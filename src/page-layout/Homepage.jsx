import React from "react";
import { Helmet as Head } from "react-helmet";
import { Form, Input } from "reactstrap";

import { PrimaryButton } from "../components/button";
import Footer from "../components/footer/Footer";
import HomepageToolbar from "../components/toolbar/HomepageToolbar";

import emailIcon from "../images/email.svg";

import "../scss/homepage.scss";

export default class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  onInputChange = (key, value) => {
    this.setState({ [key]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit({
      email: this.state.email,
    });
  };

  render() {
    return (
      <div className="homePage">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>{`Kloudi - Take control of your tools`}</title>
        </Head>
        <HomepageToolbar signUpVisibility={false} />
        <div className="contentWrapper">
          <div className="content">
            <div className="terminalIcon">{`>_ `}</div>
            <div className="headingWrapper">
              <div className="headingH1">
                {`Take Control of All your Tools`}
              </div>
              <div className="subheadingH5">
                {`A seamless workflow designed to get the most out your development experience`}
              </div>
              <Form className="formPage" onSubmit={e => this.onFormSubmit(e)}>
                <div className="input-wrapper">
                  <img src={emailIcon} alt="Email icon" className="img" />
                  <Input
                    className="input"
                    placeholder="Work Email"
                    type="email"
                    onChange={e => this.onInputChange("email", e.target.value)}
                  />
                  <PrimaryButton
                    className="button"
                    onClick={_ => this.props.onEAPSignUpClick()}>
                    {`Get Early Access`}
                  </PrimaryButton>
                </div>

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
            </div>
          </div>
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div >
    );
  }
}
