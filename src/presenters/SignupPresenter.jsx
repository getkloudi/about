import React, { Component } from "react";

import authRepository from "../data/AuthRepository";
import { isEmail, isNotEmpty } from "../utils/FormUtils";
import UrlUtil from "../utils/UrlUtil";

export default class SignupPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      validity: {
        name: true,
        email: true,
      },
      error: null,
      userInfoForThankYou: undefined
    };
    this.clearError = this.clearError.bind(this);
  }
  componentDidMount() { }

  componentWillUnmount() { }

  showLoading() {
    if (!this.state.isLoading) {
      this.setState({ isLoading: true });
    }
  }

  hideLoading() {
    if (this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }

  clearError() {
    this.setState({ error: "" });
  }

  onSignupSubmit = async info => {
    if (this.validForm(info)) {
      this.showLoading();
      try {
        await authRepository.signUp(info);
        this.setState({ userInfoForThankYou: info });
      } catch (err) {
        this.setState({
          error: err.response.data.message
        });
      } finally {
        this.hideLoading();
      }
    } else {
      return null;
    }
  };

  validForm(data) {
    if (!isNotEmpty(data.name)) {
      this.setState(state => {
        const validity = state.validity;
        return {
          validity: { ...validity, name: false },
          error:
            '<span class="error-span">Full name field is empty.</span> Please enter your full name'
        };
      });
      return false;
    } else if (!isEmail(data.email)) {
      this.setState(state => {
        const validity = state.validity;
        return {
          validity: { ...validity, email: false },
          error:
            '<span class="error-span">Invalid e-mail address entered.</span> Please enter a valid email'
        };
      });
      return false;
    } else {
      return true;
    }
  }

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      onSignupSubmit: this.onSignupSubmit,
      isLoading: this.state.isLoading,
      error: this.state.error,
      clearError: this.clearError,
      userInfoForThankYou: this.state.userInfoForThankYou,
      emailInURL: UrlUtil.getParams("email")
    });
  }
}
