import React, { Component } from "react";
import { navigate } from "gatsby";

export default class HomePresenter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if (authRepository.isAuthenticated()) {
    //   getProjects().then(projects => {
    //     if (projects && projects.length > 0)
    //       navigate("/", { replace: true });
    //     else navigate("/welcome", { replace: true });
    //   });
    // }
  }

  onEAPSignUpClick = info => {
    if (typeof window !== `undefined` && process.env.TARGET_ENV !== "production")
      window.location.href = `/eap-signup${info.email ? `?q=${info.email}` : `/`}`;
    if (typeof window !== `undefined` && process.env.TARGET_ENV === "production")
      window.location.href = `/eap-signup${info.email ? `?q=${info.email}` : `/`}`;
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
