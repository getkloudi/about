import React, { PureComponent } from "react";
import { Form, Input } from "reactstrap";

//Image assets
import textLogo from "./assets/kloudi-signup-logo.webp";
import logo from "../../images/logo.svg";
import emailIcon from "../../images/email.svg";
import nameIcon from "../../images/name.svg";

import Loading from "../loading/Loading";
import { PrimaryButton } from "../button";
import { toTitleCase } from "../../utils/StringUtils";

import "./signup-form.scss";

export default class SimpleSignupForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidMount = _ => {
    this.setState({ email: this.props.emailInURL || "" });
  };

  onInputChange = (key, value) => {
    this.setState({ [key]: value });
    if (this.props.clearError) this.props.clearError();
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      email: this.state.email,
    });
  };

  onSigninClick = e => {
    if (typeof window !== `undefined` && process.env.TARGET_ENV !== "production")
      window.location.href = `https://app-staging.kloudi.tech/login${this.state.email ? `?email=${this.state.email}` : ``}`;
    if (typeof window !== `undefined` && process.env.TARGET_ENV === "production")
      window.location.href = `https://app.kloudi.tech/login${this.state.email ? `?email=${this.state.email}` : ``}`;
  };

  getFirstName = name => { return toTitleCase(name).split(' ')[0]; };

  render() {
    return (
      <div className="signup-form">
        <div className="signup-header">
          <img src={logo} alt="Signup on Kloudi" className="header-logo" />
          <div className="header-greeting">{`Hey${this.state.name && this.state.name.length > 0 ? ` ${this.getFirstName(this.state.name)}` : ``} 👋🏼!`}</div>
          <div className="header-message">{`Let's get you in the queue for Early Access.`}</div>
        </div>
        <Form className="form-page" onSubmit={e => this.onFormSubmit(e)}>

          <div className={"input-wrapper"}>
            <img src={emailIcon} alt="Work Email" className="img" />
            <Input
              className="input"
              placeholder="Work Email"
              type="email"
              onChange={e => this.onInputChange("email", e.target.value)}
              value={this.state.email}
            />
          </div>
          <div className={"input-wrapper"}>
            <img src={nameIcon} alt="Full Name" className="img" />
            <Input
              className="input"
              placeholder="Your Full Name"
              onChange={e => this.onInputChange("name", e.target.value)}
              value={this.state.name}
              onBlur={this.validateName}
            />
          </div>
          <div
            className="footer-message"
            style={{ visibility: `${this.props.error ? "visible" : "hidden"}` }}
            dangerouslySetInnerHTML={{ __html: this.props.error }}
          />
          <input
            type="submit"
            style={{
              position: "absolute",
              left: "-99999px",
              width: "1px",
              height: "1px"
            }}
            tabIndex="-1"
          />
        </Form>
        <div className="signup-footer">
          {this.props.isLoading ? (
            <Loading small />
          ) : (
              <PrimaryButton
                className="submit"
                onClick={e => this.onFormSubmit(e)}
              >
                Next
              </PrimaryButton>
            )}
          <div className="signup-placeholder">
            Already using Kloudi?{" "}
            <a onClick={e => this.onSigninClick(e)} className="link">
              {`Login`}
            </a>
          </div>
          <img
            className="footer-logo"
            src={textLogo}
            alt=""
          />
        </div>
      </div>
    );
  }
}
