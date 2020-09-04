import React from "react";
import { Helmet as Head } from "react-helmet";
import { Link } from "gatsby";

import { PrimaryButton, OutlineButton } from "../components/button";
import Footer from "../components/footer/Footer";
import HomepageToolbar from "../components/toolbar/HomepageToolbar";

import idea from "../images/bulb.svg";
import connect from "../images/connect.svg";
import converse from "../images/converse.svg";
import converseMobile from "../images/converse-mobile.svg";
import collate from "../images/collate.svg";
import collateMobile from "../images/collate-mobile.svg";
import collaborate from "../images/collaborate.svg";
import searchLogo from "../images/search-logo.svg";

import EnvironmentUtil from "../utils/EnvironmentUtil";

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
          <meta property="og:title" content="Kloudi - No command terminal for your daily workflows" />
          <meta property="og:description" content="Kloudi is an NLP terminal that brings all the data and actions from your tools at one place. All of this ease without learning any command or leaving your editor." />
          <meta property="og:image" content="https://kloudi.tech/happy-logo.png" />
          <meta property="og:url" content="https://kloudi.tech/" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@KloudiTech" />
          <meta name="twitter:image" content="https://kloudi.tech/happy-logo.png" />
          <meta name="twitter:alt" content="Kloudi - No command terminal for your daily workflows." />
          <title>
            {`Kloudi - No command terminal for your daily workflows.`}
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
            { marginTop: "32px", marginBottom: "32px" } :
            { marginTop: "64px", marginBottom: "64px" }
          }>
          <div className="content">
            <img className="terminal" src={searchLogo} />
            <div className="h2 semi-bold ">{`No command terminal`}
            </div >
            <div className="h3 light">{`Connecting all your daily workflows`}</div >
            <div className="secondary h4 light "
              style={{ marginTop: "8px", marginBottom: "32px" }}>
              {`Kloudi is an NLP terminal that brings all the data and actions from your tools at one place so that you have the most seamless experience ever!`}
            </div>
            <Link
              className="eap-button"
              to={`/signup${!!this.state.email ?
                `?email=${this.state.email}` :
                `/`}`}>
              <PrimaryButton
                className="primary-button"
                onClick={_ => this.props.onEAPSignUpClick()}
                small={this.state.mobileScreen ? true : false}>
                {`Get Started`}
              </PrimaryButton>
            </Link>
          </div >
        </div >
        <HomepageSection
          emoji={`🔗`}
          h2={`Terminal to connect all your tools`}
          h3={`Bringing all the data at one place`}
          h5={`Tired of old-fashioned debugging and navigating between tools to make sense of your data. Say no more!`}
          hint={`It takes only 2 mins to connect your tool with Kloudi`}
          illustration={connect}
        />
        <HomepageSection
          emoji={`⌘`}
          h2={`Perform every action using Kloudi`}
          h3={`Without learning any command `}
          h5={<p>{`Are you sick of learning commands for every tool. Press `}{["Mac OS", "iOS"].indexOf(EnvironmentUtil.getOS()) >= 0 ? <span className="key">{`command`}</span> : <span className="key">{`ctrl`}</span>}
            {` + `}
            <span className="key">{`k`}</span>
            {` and watch your tools tell you the story.`}</p>}
          hint={`Queries in Kloudi build context to your data`}
          illustration={converse}
          mobileIllustration={converseMobile}
          mobileScreen={this.state.mobileScreen}
        />
        <HomepageSection
          emoji={`🧩`}
          h2={`Zero navigation for your workflows`}
          h3={`Unlocking cross-functionality for tools`}
          h5={`Don’t you wish you had to spend less time navigating tools and collating data. Wish no more cause with Kloudi you get the most actionable data.`}
          hint={'Navigation can take upto 25 mins of your time everyday'}
          illustration={collate}
          mobileIllustration={collateMobile}
          mobileScreen={this.state.mobileScreen}
        />
        <HomepageEAPSection
          emoji={`🎮`}
          h2={`Completely functional in your IDE`}
          h3={`Live with VSCode.`}
          h5={`We built Kloudi to bring the best experience in your IDEs. Kloudi extension is live in VSCode and IntelliJ plugin is coming soon!`}
          illustration={`https://kloudi.tech/kloudi-in-vscode.png`}
          ide
          mobileScreen={this.state.mobileScreen}
        />
        <HomepageSection
          h2={`Unlock a better experience for your tools with Kloudi`}
          mobileScreen={this.state.mobileScreen}
          button
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
    return <div className="vscode-illustration">
      <a className="button" href={`vscode:extension/Kloudi.kloudi`}>
        <img alt={`Install Kloudi's VSCode Extension`}
          className={`illustration${ide ? ` ide` : ``}`}
          src={illustration} />
        <PrimaryButton
          className="primary-button"
          small={mobileScreen ? true : false}>
          {`Install Extension`}
        </PrimaryButton>
      </a>
      <p style={{ textAlign: "center" }}>
        {`or download from `}
        <a className="link" href={`https://marketplace.visualstudio.com/items?itemName=Kloudi.kloudi`}>{`Visual Studio Marketplace`}</a>
      </p>
    </div >;
  else
    return <img className={"illustration"} src={illustration} alt="" />;
};

const HomepageEAPSection = props => {
  return (
    <div className="contentWrapper secondary-bg" >
      <div className="content">
        <div className="headingWrapper">
          <div className="h2 emoji"><span>{props.emoji}</span></div>
          <div className="h2 semi-bold ">{props.h2}</div>
          <div className="h3 light">{props.h3}</div>
          <div className="h5 secondary">{props.h5}</div>
          {props.illustration ?
            getContentForHomepageEAPSection(
              props.ide, props.illustration, props.mobileScreen) :
            <Link className="button" to={`/signup`} >
              <PrimaryButton
                className="primary-button"
                small={props.mobileScreen ? true : false}>
                {`Request Access`}
              </PrimaryButton>
            </Link>
          }
        </div>
      </div>
    </div>);
};

const HomepageSection = props => {
  return (
    <div className={`contentWrapper`}>
      <div className="content">
        {props.emoji ?
          <div className="h2 emoji"><span>{props.emoji}</span></div> :
          <img className="terminal" src={searchLogo}></img>
        }
        <div className="headingWrapper">
          <div className="h2 semi-bold">{props.h2}</div>
          <div className="h3 light">{props.h3}</div>
          <div className="h5 secondary">{props.h5}</div>
          {/* <div className="iframe-wrapper">
            <iframe src="https://www.loom.com/embed/e9b6a5194a0449e98752116bda7a912e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="iframe" />
          </div> */}
        </div>
        {props.illustration ?
          <img
            alt=""
            className={`homepage-illustration`}
            src={props.mobileScreen ? props.mobileIllustration || props.illustration : props.illustration} /> :
          ``}
        {props.hint ? <div className="h6 hint">
          <img className="hint-img" src={idea} />
          {`${props.hint}`}
        </div> : ""}
        {props.button ? <Link className="button" to={`/signup`} >
          <PrimaryButton
            className="primary-button"
            small={props.mobileScreen ? true : false}>
            {`Get Started`}
          </PrimaryButton>
        </Link> : ''}
      </div>
    </div>);
};
