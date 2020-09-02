import React from "react";
import { Helmet as Head } from "react-helmet";
import { Form, Input } from "reactstrap";
import { Link } from "gatsby";

import { PrimaryButton, OutlineButton } from "../components/button";
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
      mobileScreen: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  UNSAFE_componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 960) {
      this.setState({ mobileScreen: true });
    } else {
      this.setState({ mobileScreen: false });
    }
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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          {/* <!-- SEO --> */}
          <meta name="application-name" content="Kloudi" />
          <meta name="description" content="Kloudi is an NLP terminal that brings all the data and actions from your tools at one place. All of this ease without learning any command or leaving your editor." />
          {/* <!-- open graph and twitter tags --> */}
          <meta property="og:site_name" content="Kloudi" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Simplest terminal for your workflow" />
          <meta property="og:description" content="Kloudi is an NLP terminal that brings all the data and actions from your tools at one place. All of this ease without learning any command or leaving your editor." />
          <meta property="og:image" content="https://kloudi.tech/happy-logo.png" />
          <meta property="og:url" content="https://kloudi.tech/" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@KloudiTech" />
          <meta name="twitter:image" content="https://kloudi.tech/happy-logo.png" />
          <meta name="twitter:alt" content="Kloudi - World's simplest terminal for your daily workflows." />
          <title>
            {`Kloudi - World's simplest terminal for your daily workflows.`}
          </title>
          {/* <!-- Web App Icons --> */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Kloudi" />
        </Head>
        <HomepageToolbar signUpVisibility={false} />
        <div
          className="contentWrapper"
          style={this.state.mobileScreen ?
            { marginTop: "48px", marginBottom: "48px" } :
            { marginTop: "128px", marginBottom: "64px" }
          }>
          <div className="content">
            <div className="terminalIcon">{`> _`}</div>
            <div className="headingWrapper">
              <div className="headingH3">
                {`World's simplest terminal for your daily workflows`}
              </div >
              <div className="subheadingH4">
                {`A seamless workflow designed to get the most out of your development experience`}
              </div>
              <Form className="formPage" onSubmit={e => this.onFormSubmit(e)}>
                <div
                  className="input-wrapper"
                  style={this.state.mobileScreen ?
                    { border: "none", padding: "0 0" } :
                    {}}
                >
                  <img src={emailIcon} alt="Enter work email" className="img" />
                  <Input
                    className="input"
                    placeholder="Work Email"
                    type="email"
                    onChange={e => this.onInputChange("email", e.target.value)}
                  />
                  <Link
                    className="eap-button"
                    to={`/signup${!!this.state.email ?
                      `?email=${this.state.email}` :
                      `/`}`}>
                    <PrimaryButton
                      onClick={_ => this.props.onEAPSignUpClick()}
                      small={this.state.mobileScreen ? true : false}
                    >
                      {`Get Early Access`}
                    </PrimaryButton>
                  </Link>
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
            </div >
          </div >
        </div >
        <HomepageEAPSection
          headingH2={`Zero navigation for all your actions`}
          headingH5={<span><p>{`Enabling cross-functionality of your tools to give you connected, enriched and actionable data.`}</p>
            <p style={{ marginTop: "16px", marginBottom: "16px" }}>
              <span className="demibold">{`Now`}</span>{` present right in your `}<span className="demibold"> {`IDE`}</span>
            </p>
          </span>
          }
          ide
          illustration={`https://kloudi.tech/kloudi-in-vscode.png`}
          mobileScreen={this.state.mobileScreen}
        />
        <HomepageSection
          headingH2={`Integrate all your tools at one place`}
          headingH5={<p>{`Easily plugin all tools to get a `}
            <span className="demibold">
              {`connected and actionable `}
            </span>
            {`view of all the data.`}
          </p>}
          illustration={connect}
        />
        <HomepageSection
          headingH2={`Simple view of all your data`}
          headingH5={<p>{`View connected data of all your tools through `}
            <br />
            {`a `}
            <span className="demibold">
              {` simple conversational search`}
            </span>
            {`.`}
          </p>}
          illustration={converse}
        />
        <HomepageSection
          headingH2={`View and take actions on data`}
          headingH5={<p>{`Enriched and actionable view of  `}
            <span className="demibold">
              {`collated data `}
              <br />
            </span>
            {`from all your tools.`}
          </p>}
          illustration={collate}
        />
        <HomepageSection
          headingH2={`Share your queries with your team`}
          headingH5={<p>
            <span className="demibold">
              {`Collaboratively `}
            </span>
            {`improve your team’s productivity by sharing  `}
            {`queries and help them automate workflows.`}
          </p>}
          illustration={collaborate}
        />
        <HomepageEAPSection
          headingH2={`Unlock your productivity with Kloudi`}
          headingH5={`We are giving early access to a select few. Request now to jump the queue.`}
          mobileScreen={this.state.mobileScreen}
        />
        <div className="footerContainer">
          <Footer />
        </div>
      </div >
    );
  }
}

const getContentForHomepageEAPSection = (ide, illustration, mobileScreen) => {
  if (!!ide)
    return <div>
      <a className="button" href={`vscode:extension/Kloudi.kloudi`} >
        <img alt={`Install Kloudi's VSCode Extension`}
          className={`illustration${ide ? ` ide` : ``}`}
          src={illustration} />
        <OutlineButton small={mobileScreen ? true : false}>
          {`Install Extension`}
        </OutlineButton>
      </a>
      <p>{`or download from `}
        <a className="link" href={`https://marketplace.visualstudio.com/items?itemName=Kloudi.kloudi`}>{`Visual Studio Marketplace`}</a>
      </p>
    </div >;
  else
    return <img className={"illustration"} src={illustration} alt="" />;
};

const HomepageEAPSection = props => {
  return (
    <div className="contentWrapper" style={{ background: "#fafafa" }}>
      <div className="content">
        <div className="headingWrapper">
          <div className="headingH2">{props.headingH2}</div>
          <div className="headingH5">
            <article>{props.headingH5}</article>
          </div>
          {props.illustration ?
            getContentForHomepageEAPSection(
              props.ide, props.illustration, props.mobileScreen) :
            <Link className="button" to={`/signup`} >
              <OutlineButton small={props.mobileScreen ? true : false}>
                {`Request Access`}
              </OutlineButton>
            </Link>
          }
        </div>
      </div>
    </div>);
};

const HomepageSection = props => {
  return (
    <div className="contentWrapper">
      <div className="content">
        <div className="terminalIcon smallTerminalIcon">{`>_ `}</div>
        <div className="headingWrapper">
          <div className="headingH2">{props.headingH2}</div>
          <div className="headingH5">
            <article>{props.headingH5}</article>
          </div>
          {props.illustration ?
            <img
              className={"illustration"}
              src={props.illustration} alt={props.headingH2} /> :
            ``}
        </div>
      </div>
    </div>);
};
