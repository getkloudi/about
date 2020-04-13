import React, { Component } from "react";
import { navigate } from "gatsby";

export default class HomepagePresenter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onEAPSignUpClick = info => {
    if (typeof window !== `undefined` && process.env.TARGET_ENV !== "production")
      window.location.href = `/eap-signup${info && info.email ? `?q=${info.email}` : `/`}`;
    if (typeof window !== `undefined` && process.env.TARGET_ENV === "production")
      window.location.href = `/eap-signup${info && info.email ? `?q=${info.email}` : `/`}`;
  };


  render() {
    return React.cloneElement(
      React.Children.only(this.props.children),
      {
        kloudbar: this.HomeKloudbar,
        onEAPSignUpClick: this.onEAPSignUpClick,
        onFormSubmit: this.onEAPSignUpClick,
      }
    );
  }
}
