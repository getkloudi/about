import React from "react";
import { Helmet as Head } from "react-helmet";
import { Form, Input } from "reactstrap";

import { PrimaryButton } from "../components/button";
import Footer from "../components/footer/Footer";
import HomepageToolbar from "../components/toolbar/HomepageToolbar";

import connect from "../images/connect.svg";
import converse from "../images/converse.svg";
import collate from "../images/collate.svg";
import collaborate from "../images/collaborate.svg";
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
        <div
          className="contentWrapper"
          style={{ marginTop: "128px", marginBottom: "64px" }}>
          <div className="content">
            <div className="terminalIcon">{`>_ `}</div>
            <div className="headingWrapper">
              <div className="headingH1">
                {`Take Control of All your Tools`}
              </div>
              <div className="subheadingH4">
                {`A seamless workflow designed to get the most out of your development experience`}
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
        <div className="contentWrapper" style={{ background: "#fafafa" }}>
          <div className="content">
            <div className="headingWrapper">
              <div className="headingH2">
                {`Zero navigation for all your actions`}
              </div>
              <div className="headingH5">
                <p >{`Enabling cross-functionality of your tools to give you connected, enriched and actionable data.`}
                </p>
                <p style={{ marginTop: "32px", marginBottom: "16px" }}>
                  <span className="demibold">{`Now`}</span>
                  {` present right in your `}
                  <span className="demibold"> {`IDE`}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contentWrapper" >
          <div className="content">
            <div className="terminalIcon smallTerminalIcon">{`>_ `}</div>
            <div className="headingWrapper">
              <div className="headingH2">
                {`Integrate all your tools at one place`}
              </div>
              <div className="subheadingH5">
                <p>{`Easily plugin all tools to get a `}
                  <span className="demibold">
                    {`connected and actionable `}
                    <br />
                  </span>
                  {`view of all the data.`}
                </p>
              </div>
              <img className={"illustration"} src={connect} alt="" />
            </div>
          </div>
        </div>
        <div className="contentWrapper" >
          <div className="content">
            <div className="terminalIcon smallTerminalIcon">{`>_ `}</div>
            <div className="headingWrapper">
              <div className="headingH2">
                {`Simple view of all your data`}
              </div>
              <div className="subheadingH5">
                <p>{`View connected data of all your tools through `}
                  <br />
                  {`a `}
                  <span className="demibold">
                    {` simple conversational search`}
                  </span>
                  {`.`}
                </p>
              </div>
              <img className={"illustration"} src={converse} alt="" />
            </div>
          </div>
        </div>
        <div className="contentWrapper" >
          <div className="content">
            <div className="terminalIcon smallTerminalIcon">{`>_ `}</div>
            <div className="headingWrapper">
              <div className="headingH2">
                {`View and take actions on data`}
              </div>
              <div className="subheadingH5">
                <p>{`Enriched and actionable view of  `}
                  <span className="demibold">
                    {`collated data `}
                    <br />
                  </span>
                  {`from all your tools.`}
                </p>
              </div>
              <img className={"illustration"} src={collate} alt="" />
            </div>
          </div>
        </div>
        <div className="contentWrapper" >
          <div className="content">
            <div className="terminalIcon smallTerminalIcon">{`>_ `}</div>
            <div className="headingWrapper">
              <div className="headingH2">
                {`Share your queries with your team`}
              </div>
              <div className="subheadingH5">
                <p>
                  <span className="demibold">
                    {`Collaboratively `}
                  </span>
                  {`improve your team’s productivity by sharing  `}
                  <br />
                  {`queries and help them automate workflows.`}
                </p>
              </div>
              <img className={"illustration"} src={collaborate} alt="" />
            </div>
          </div>
        </div>
        <div className="contentWrapper" style={{ background: "#fafafa" }}>
          <div className="content">
            <div className="headingWrapper">
              <div className="headingH2">
                {`Unlock your productivity with Kloudi`}
              </div>
              <div className="headingH5">
                <p style={{ marginBottom: "32px" }}>
                  {`We are giving early access to a select few. Request now`}
                  <br /> {` to jump the queue.`}
                </p>
              </div>
              <PrimaryButton
                className="button"
                onClick={_ => this.props.onEAPSignUpClick()}>
                {`Request Access`}
              </PrimaryButton>
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
