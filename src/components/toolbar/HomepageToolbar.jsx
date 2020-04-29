import React, { PureComponent, useState } from "react";
import { navigate } from "gatsby";

import Toolbar from "../toolbar/Toolbar";
import MobileSideMenu from "../mobile-side-menu/MobileSideMenu";

import style from "./homepage-toolbar.module.scss";

export default class HomepageToolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileScreen: true,
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


  behindTheScenesHref = () => {
    return "https://www.notion.so/Kloudi-Behind-the-Scenes-9f58a4c91f744dbda4816838589ad1aa";
  };

  whyEarlyAccessHref = () => {
    return "https://www.notion.so/Kloudi-Why-Early-Access-Program-28fea6ae32fb41d4baa08e4787fa23b3";
  };


  eapSignUpHref = () => (`/signup`);

  signInHref = () => {
    if (typeof window !== `undefined` && process.env.TARGET_ENV !== "production")
      return `https://app-staging.kloudi.tech/login`;
    if (typeof window !== `undefined` && process.env.TARGET_ENV === "production")
      return `https://app.kloudi.tech/login`;
  };

  onToolbarHamburgerClicked() {
    this.mobileSideMenu.toggle();
  }

  updateWindowDimensions() {
    if (window.innerWidth < 960) {
      this.setState({ mobileScreen: true });
    } else {
      this.setState({ mobileScreen: false });
    }
  }

  render() {
    const featuresVisibility = this.props.featuresVisibility;
    const signUpVisibility = this.props.signUpVisibility;
    const pricingVisibility = this.props.pricingVisibility;
    console.log(this.state.mobileScreen);

    return (
      <div className={style.homepageToolbarContainer}>
        <Toolbar
          behindTheScenesHref={this.behindTheScenesHref()}
          eapSignUpHref={this.eapSignUpHref()}
          featuresVisibility={featuresVisibility}
          onHamburgerClicked={() => this.onToolbarHamburgerClicked()} pricingVisibility={pricingVisibility}
          signInHref={this.signInHref()}
          signUpVisibility={signUpVisibility}
          whyEarlyAccessHref={this.whyEarlyAccessHref()}
        />
        {!this.state.mobileScreen ? `` :
          <MobileSideMenu
            behindTheScenesHref={this.behindTheScenesHref()}
            eapSignUpHref={this.eapSignUpHref()}
            featuresVisibility={featuresVisibility}
            pricingVisibility={pricingVisibility}
            ref={mobileSideMenu => { this.mobileSideMenu = mobileSideMenu; }}
            signInHref={this.signInHref()}
            signUpVisibility={signUpVisibility}
            whyEarlyAccessHref={this.whyEarlyAccessHref()}
          />}
      </div>
    );
  }
}
