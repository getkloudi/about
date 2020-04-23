import React, { PureComponent } from "react";

import Toolbar from "../toolbar/Toolbar";
import MobileSideMenu from "../mobile-side-menu/MobileSideMenu";

import style from "./homepage-toolbar.module.scss";

export default class HomepageToolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileScreen: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 960) {
      this.setState({ mobileScreen: true });
    } else {
      this.setState({ mobileScreen: false });
    }
  }

  onToolbarHamburgerClicked() {
    this.mobileSideMenu.toggle();
  }

  onEAPSignUpClick() {
    if (typeof window !== `undefined` && process.env.TARGET_ENV !== "production")
      window.location.href = `/signup`;
    if (typeof window !== `undefined` && process.env.TARGET_ENV === "production")
      window.location.href = `/signup`;
  }

  onSignInClick() {
    if (typeof window !== `undefined` && process.env.TARGET_ENV !== "production")
      window.location.href = `https://app-staging.kloudi.tech/sign-in`;
    if (typeof window !== `undefined` && process.env.TARGET_ENV === "production")
      window.location.href = `https://app.kloudi.tech/sign-in`;
  }

  render() {
    const featuresVisibility = this.props.featuresVisibility;
    const signUpVisibility = this.props.signUpVisibility;
    const pricingVisibility = this.props.pricingVisibility;

    if (!this.state.mobileScreen) {
      return (
        <div className={style.homepageToolbarContainer}>
          <Toolbar
            featuresVisibility={featuresVisibility}
            signUpVisibility={signUpVisibility}
            pricingVisibility={pricingVisibility}
            onEAPSignUpClick={() => this.onEAPSignUpClick()}
            onHamburgerClicked={() => this.onToolbarHamburgerClicked()}
            onSignInClick={() => this.onSignInClick()} />
        </div>
      );
    } else {
      return (
        <div className={style.homepageToolbarContainer}>
          <Toolbar
            featuresVisibility={featuresVisibility}
            signUpVisibility={signUpVisibility}
            pricingVisibility={pricingVisibility}
            onEAPSignUpClick={() => this.onEAPSignUpClick()}
            onHamburgerClicked={() => this.onToolbarHamburgerClicked()} onSignInClick={() => this.onSignInClick()} />
          <MobileSideMenu
            featuresVisibility={featuresVisibility}
            signUpVisibility={signUpVisibility}
            pricingVisibility={pricingVisibility}
            onEAPSignUpClick={() => this.onEAPSignUpClick()}
            onSignInClick={() => this.onSignInClick()}
            ref={mobileSideMenu => { this.mobileSideMenu = mobileSideMenu; }} />
        </div>
      );
    }
  }
}
