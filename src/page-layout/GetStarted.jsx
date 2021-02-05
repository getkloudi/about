import React from "react";
import { Helmet as Head } from "react-helmet";

import { Download as DownloadSection } from "../components/download/Download";
import Footer from "../components/footer/Footer";
import HomepageToolbar from "../components/toolbar/HomepageToolbar";

import style from "../scss/homepage.module.scss";

export default class GetStarted extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileScreen: false,
      copied: false,
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
        <HomepageToolbar topLinksVisibility={false} />
        <DownloadSection firstSection mobileScreen={this.state.mobileScreen} />
        <div className={style.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}



