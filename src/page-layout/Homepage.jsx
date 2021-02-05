import React from "react";
import { Helmet as Head } from "react-helmet";
import { Link } from "gatsby";

import { Divider } from "antd";
import { Download as DownloadSection } from "../components/download/Download";
import { PrimaryButton } from "../components/button";
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

import style from "../scss/homepage.module.scss";

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
      <div className={style.homePage}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          {/* <!-- SEO --> */}
          <meta name="application-name" content="Kloudi" />
          <meta name="description" content="Kloudi is a universal command line that brings all the data and actions from your tools at one place." />
          {/* <!-- open graph and twitter tags --> */}
          <meta property="og:site_name" content="Kloudi" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Kloudi - Universal command line for engineering tools" />
          <meta property="og:description" content="Kloudi is a universal command line that brings all the data and actions from your tools at one place." />
          <meta property="og:image" content="https://kloudi.tech/happy-logo.png" />
          <meta property="og:url" content="https://kloudi.tech/" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@KloudiTech" />
          <meta name="twitter:image" content="https://kloudi.tech/happy-logo.png" />
          <meta name="twitter:alt" content="Kloudi - Universal command line for engineering tools." />
          <title>
            {`Kloudi - Universal command line for engineering tools.`}
          </title>
          {/* <!-- Web App Icons --> */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Kloudi" />
        </Head>
        <HomepageToolbar signUpVisibility={false} />
        <HomepageSection
          firstSection
          h2={`Universal Command Line `}
          h3={`Get relevant data from tools, in seconds!`}
          h5={`Enter commands and queries to search, view and perform actions on data from all your engineering tools.`}
          button />
        <HomepageSection
          h2={`All the goodness of a Command Line`}
          h3={`And more, for your tools`} >
          <div className={style.featureRow}>
            <HomepageFeatureCardSection
              description={"Initialize by connecting your tools. Kloudi currently connects with tools through API Keys and OAuth."}
              emoji={`🔗`}
              queries={["connect with sentry", "github init"]}
              title={"Connect"} />
            <HomepageFeatureCardSection
              description={"Enter commands to search relevant data from tools using an AI powered command line."}
              emoji={`⌘`}
              queries={["ls issues last 24hrs", "view open tickets"]}
              title={"Search"} />
            <HomepageFeatureCardSection
              description={"View data and perform relevant actions without the clutter of alerts, notifications and mindless navigation."}
              emoji={`🎮`}
              title={"Play"}
              queries={["sentry mark issue done",
                "create an issue on gh"]} />
          </div>
          <HomepageSupportedToolsCardSection
            mobileScreen={this.state.mobileScreen} />
          <div className={`${style.columnContent} medium`}
            style={{
              margin: this.state.mobileScreen ?
                "16px auto 0 auto" : "16px auto 0 32px"
            }}>
            {`Can't see your favorite tool yet. `}
            <Link className={style.link} to={``}>{`Let us know!`}</Link>
          </div>
          <div className={`${style.columnContent} medium`}
            style={{
              margin: this.state.mobileScreen ?
                "8px auto 0 auto" : "8px auto 0 32px"
            }}>
            {`Want to connect your favorite tool with Kloudi? `}
            <Link className={style.link} to={``}>{`Help us out in our garage.`}</Link>
          </div>
        </HomepageSection>
        <HomepageHighlightSection
          h2={`🛡 Your privacy is our priority`}
          h4={`All form factors of Kloudi can be run locally, giving you 100% functionality and performance from the safety of your system.`}
          mobileScreen={this.state.mobileScreen} />
        <HomepageSection
          h2={`How developers use Kloudi`}
          h5={`Kloudi is built for developers, to help them solve the problem of managing data across tools and the cognitive overload that comes with a decoupled toolkit. Here's how you can use Kloudi. `}>
          <HomepageFeatureRowSection
            description={`Move away from the archaic way of searching for data within your tools and learning how to use them. With unified command line powered by AI you can now search and view data that matters to you.`}
            heading={`🔍 Universal Search`}
            hint={`Queries helps you to build context for data from your tools`}
            illustration={converse}
            index={0}
            key={0}
            mobileScreen={this.state.mobileScreen} />
          <HomepageFeatureRowSection
            description={`Minimize navigating across tools by connecting your tools with Kloudi. Connecting tools enables connecting the dots to build context required to solve your next bug faster!`}
            heading={`🧩 Contextual Navigation`}
            hint={`Any tool with an API can be added to Kloudi.`}
            illustration={connect}
            index={1}
            key={1}
            mobileScreen={this.state.mobileScreen} />
          <HomepageFeatureRowSection
            description={[
              `Paraphrasing J.R.R Tolkien from ${this.state.mobileScreen ? `LOTR` : `Lord of the Rings`}, `,
              <br />, <br />,
              <i>&nbsp;One </i>,
              ["Mac OS", "iOS"].indexOf(EnvironmentUtil.getOS()) >= 0 ?
                <span className={style.key}>{`command+k`}</span> :
                <span className={style.key}>{`ctrl+k`}</span>,
              <i> to connect them all,</i>,
              <br />,
              <i>&nbsp;One </i>,
              ["Mac OS", "iOS"].indexOf(EnvironmentUtil.getOS()) >= 0 ?
                <span className={style.key}>{`command+k`}</span> :
                <span className={style.key}>{`ctrl+k`}</span>,
              <i> to find them </i>,
              <br />,
              <i>&nbsp;One </i>,
              ["Mac OS", "iOS"].indexOf(EnvironmentUtil.getOS()) >= 0 ?
                <span className={style.key}>{`command+k`}</span> :
                <span className={style.key}>{`ctrl+k`}</span>,
              <i> to bring them all,</i>,
              <br />,
              <i>&nbsp;And </i>,
              <i> in the darkness bind them.&nbsp;</i>
            ]}
            heading={`🏎 Faster Actions`}
            illustration={collate}
            mobileScreen={this.state.mobileScreen}
            index={2}
            key={2} />
        </HomepageSection>
        <DownloadSection mobileScreen={this.state.mobileScreen} />
        <HomepageNewsletterSection
          h2={`🗞 Subscribe to Kloudi's Newsletter`}
          h4={`Get bi-weekly newsletter from Kloudi's founders talking about the changes of the week, origin stories, first principles and much more`}
          mobileScreen={this.state.mobileScreen} />

        <div className={style.footerContainer}>
          <Footer />
        </div>
      </div >
    );
  }
}

const HomepageHighlightSection = props => {
  const { mobileScreen } = props;
  return (
    <section className={`${style.contentWrapper} ${style.secondaryBg}`} >
      <div className={style.content}>
        <div className={`${style.h2} ${`semiBold`}`}>{props.h2}</div>
        <div className={`${style.h4} ${`light`} ${style.containBox}`}>
          {props.h4}
        </div>
        <Link className={style.button}
          style={{ marginTop: "32px", marginBottom: "16px" }}
          to={`/get-started`} >
          <PrimaryButton
            className={`${style.primaryButton} ${style.textTransformNone}`}
            small={mobileScreen ? true : false}>
            {`Available on macOS`}
          </PrimaryButton>
        </Link>
        <Divider className={style.divider} />
      </div>
    </section>);
};

const HomepageNewsletterSection = props => {
  const { mobileScreen } = props;
  return (
    <section className={`${style.contentWrapper} ${style.secondaryBg}`} >
      <div className={style.content}>
        <div className={`${style.h2} ${`semiBold`}`}>{props.h2}</div>
        <div className={`${style.h4} ${`light`} ${style.containBox}`}>
          {props.h4}
        </div>
        <a className={style.button}
          style={{ marginTop: "32px", marginBottom: "16px" }}
          href={`https://kloudi.substack.com`} >
          <PrimaryButton
            className={`${style.primaryButton} ${style.textTransformNone}`}
            small={mobileScreen ? true : false}>
            {`SUBSCRIBE`}
          </PrimaryButton>
        </a>
        <Divider className={style.divider} />
      </div>
    </section>);
};

const HomepageSection = props => {
  const { firstSection, mobileScreen } = props;
  return (
    <section className={style.contentWrapper}>
      <div className={style.content}
        style={firstSection ? { marginTop: "64px" } : {}}>
        {props.emoji ?
          <div className={`${style.h2} ${style.emoji}`}><span>{props.emoji}</span></div> :
          <img alt="" className={style.terminal} src={searchLogo} />
        }
        <div className={`${style.h2} ${`medium`}`}>{props.h2}</div>
        <div className={`${style.h3} ${`light`} ${style.containBox}`}>
          {props.h3}
        </div>
        {props.h5 !== undefined ?
          <div className={`${style.h5} ${style.containBox}`}
            style={{ marginTop: "32px", marginBottom: "16px" }}>
            {props.h5}
          </div> : ``
        }
        {props.illustration ?
          <img alt=""
            className={`${style.homepageIllustration}`}
            src={mobileScreen ? props.mobileIllustration || props.illustration : props.illustration} /> : ``
        }
        {props.hint ? <div className={`${style.h6} ${style.hint}`}>
          <img alt="" className={style.hintImg} src={idea} />
          <span >{props.hint}</span>
        </div> : ""}
        {props.children ? props.children : ``}
        {props.button ?
          <Link className={style.button} to={`/get-started`} >
            <PrimaryButton
              className={style.primaryButton}
              small={mobileScreen ? true : false}>
              {`Get Started`}
            </PrimaryButton>
          </Link> : ''}
        <Divider className={style.divider} />
      </div>
    </section >);
};

const HomepageFeatureRowSection = props => {
  const { index, mobileScreen } = props;
  return (
    <div className={`${style.featureRow} ${!mobileScreen ? (index % 2 == 1 ? `` : `${style.featureRowReverse}`) : style.featureRowReverse}`}
      key={index}>
      <div className={style.featureColumn}>
        <div className={style.columnContent}>
          <div className={`${style.h3} medium`}>{props.heading}</div>
          <div className={style.h6} >{props.description}</div>
        </div>
        {props.hint ? <div className={`${style.h6} ${style.hint}`}>
          <img alt="" className={style.hintImg} src={idea} />
          <span >{props.hint}</span>
        </div> : ""}
      </div>
      <div className={style.featureColumn}>
        {props.video ?
          <div className={style.video}>{props.video}</div> :
          <img alt="" className={style.featureIllustration}
            src={
              mobileScreen ?
                props.mobileIllustration || props.illustration :
                props.illustration
            } />
        }
      </div>
    </div>
  );
};

const HomepageFeatureCardSection = props => {
  return (
    <div className={`${style.featureColumn} ${style.featureCard}`}>
      <div className={style.columnContent}>
        {props.emoji ?
          <div className={`${style.h2} ${style.emoji}`}>
            <span>{props.emoji}</span>
          </div> :
          props.image ?
            <img alt="" className={style.terminal} src={props.image} /> : ``
        }
        <div className={`${style.h4} medium`}>{props.title}</div>
        <div className={style.h6}>{props.description}</div>
        {props.queries ?
          <div className={style.h6}>
            <br />
            {
              props.queries.map((q, index) =>
                <span className={style.key} key={index}
                  style={{
                    lineHeight: "2", padding: "4px 8px",
                  }}>
                  {q}
                  <br />
                </span>
              )
            }
          </div> : ``}
      </div>
    </div >
  );
};

const HomepageSupportedToolsCardSection = props => {
  const { mobileScreen } = props;
  return (
    <div className={style.featureRow}
      style={{
        borderRadius: "8px",
        border: "solid 1px rgba(0, 0, 0, 0.1)",
        boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.1), 0 0 0.5px 0 rgba(0, 0, 0, 0.05)",
        background: "linear-gradient(0deg, rgba(248, 251, 252, 1) 0, rgba(248, 251, 252, 0) 100%)",
        padding: "32px",
        marginLeft: !mobileScreen ? "16px" : "auto",
        marginRight: "auto"
      }}>
      <div className={style.featureColumn}
        style={{ alignItems: "start", width: "100%", marginTop: "0px" }}>
        <div className={`${mobileScreen ? style.h3 : style.h4} ${style.columnContent} medium`} style={{ marginBottom: "16px" }}>
          {`Built in tools supported by Kloudi`}
        </div>
        <div className={style.columnContent}
          style={{
            width: mobileScreen ? "100%" : "unset", marginBottom: "8px"
          }}>
          {["Sentry", "GitHub", "Jira"].map((q, index) =>
            <span className={style.key} key={index}
              style={{
                marginRight: "4px", fontSize: "14px",
                lineHeight: "2", padding: "4px 8px"
              }}>
              <svg style={{ width: "8px", marginRight: "8px" }}
                viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#4caf50" />
              </svg>
              {q}
              {mobileScreen && index == 1 ? <br /> : ``}
            </span>)}
        </div>
        <div className={style.columnContent}
          style={{
            width: mobileScreen ? "100%" : "unset", marginBottom: "8px"
          }}>
          {["Datadog", "Bitbucket",
            mobileScreen ? "Amazon EC2" : "Amazon Elastic Compute Cloud (EC2)",
            "Rollbar", "Opsgenie"].map((q, index) =>
              <span className={style.key} key={index}
                style={{
                  marginRight: "4px", fontSize: "14px",
                  lineHeight: "2", padding: "4px 8px"
                }}>
                <svg style={{ width: "8px", marginRight: "8px" }}
                  viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="#ffc107" />
                </svg>
                {q}
                {mobileScreen && (index == 1) ? <br /> : ``}
              </span>
            )}
        </div>
        <div className={style.columnContent}
          style={{
            width: mobileScreen ? "100%" : "unset", marginBottom: "8px"
          }}>
          {["Bash", "Vercel", "MongoB Atlas", "Slack", "Microsoft Azure"].map((q, index) =>
            <span className={style.key} key={index}
              style={{
                marginRight: "4px", fontSize: "14px",
                lineHeight: "2", padding: "4px 8px"
              }}>
              <svg style={{ width: "8px", marginRight: "8px" }}
                viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#4a90e2" />
              </svg>
              {q}
              {mobileScreen && index > 0 && (index == 1 || index == 4)
                ? <br /> : ``}
            </span>
          )}
        </div>
        <div className={`demi-bold`}
          style={{ margin: "16px 0 0 auto", fontSize: "12px" }}>
          <span style={{
            padding: mobileScreen ? "0 4px" : "0 8px",
            margin: mobileScreen ? "0 4px" : "0 8px 0 0"
          }}>
            <svg style={{
              width: "8px", marginRight: mobileScreen ? "4px" : "8px"
            }}
              viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#4caf50" />
            </svg>
            {`Beta`}
          </span>
          <span style={{
            padding: mobileScreen ? "0 4px" : "0 8px",
            margin: mobileScreen ? "0 4px" : "0 8px"
          }}>
            <svg style={{
              width: "8px", marginRight: mobileScreen ? "4px" : "8px"
            }}
              viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#ffc107" />
            </svg>
            {`Alpha`}
          </span>
          <span style={{
            padding: mobileScreen ? "0 4px" : "0 8px",
            margin: mobileScreen ? "0 4px" : "0 8px"
          }}>
            <svg style={{
              width: "8px", marginRight: mobileScreen ? "4px" : "8px"
            }}
              viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#4a90e2" />
            </svg>
            {`Coming Soon`}
          </span>
        </div>
      </div>
    </div>
  );
};
