import React, { PureComponent } from "react";
import { Link } from "gatsby";
import { PrimaryButton } from "../button/";

import logoImg from "../../images/logo.png";
import closeImg from "./assets/close.svg";

import style from "./mobile-side-menu.module.scss";

export default class MobileSideMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuVisibility: style.isHidden
    };
    this.updateSideMenuState = this.updateSideMenuState.bind(this);
  }

  componentDidMount() {
    window.addEventListener("animationend", this.updateSideMenuState);
  }

  componentWillUnmount() {
    window.removeEventListener("animationend", this.updateSideMenuState);
  }

  updateSideMenuState() {
    if (this.state.sideMenuVisibility === `${style.slideInLeft} ${style.isAnimating}`) {
      this.setState({ sideMenuVisibility: style.isHidden });
    } else if (
      this.state.sideMenuVisibility === `${style.slideInRight} ${style.isAnimating}`
    ) {
      this.setState({ sideMenuVisibility: style.isOpen });
    } else {
      //Kuch bhi.
    }
  }

  sideMenuOpened() {
    this.setState({ sideMenuVisibility: `${style.slideInRight} ${style.isAnimating}` });
  }

  sideMenuClosed() {
    this.setState({ sideMenuVisibility: `${style.slideInLeft} ${style.isAnimating}` });
  }

  toggle() {
    if (this.state.sideMenuVisibility === style.isHidden) {
      this.sideMenuOpened();
    } else {
      this.sideMenuClosed();
    }
  }

  render() {
    const featuresVisibility = this.props.featuresVisibility || false;
    const signUpVisibility = this.props.signUpVisibility || false;
    const pricingVisibility = this.props.pricingVisibility || false;

    return (
      <div className={style.mobileSideMenuContainer}>
        <div className={`${style.mobileSideMenu} ${this.state.sideMenuVisibility}`}>
          <div className={style.topbar}>
            <img src={logoImg} className={style.logo} />
            <div className={style.filler} />
            <div className={style.close} onClick={() => this.sideMenuClosed()}>
              <img src={closeImg} />
            </div>
          </div>
          <div className={style.wrapper}>
            <div className={style.contentContainer}>
              <div className={style.list}>
                <div
                  className={style.item}
                  style={featuresVisibility == true ? {} : { display: "none" }}
                >
                  <Link to="/why-kloudi">WHY KLOUDI?</Link>
                </div>
                <div
                  className={style.item}
                  style={pricingVisibility == true ? {} : { display: "none" }}
                >
                  <Link to="/price-estimator">PRICING</Link>
                </div>

                <div
                  className={style.item}
                  style={!this.state.mobileScreen
                    ? { display: "flex" }
                    : { display: "none" }}
                >
                  <a href={this.props.behindTheScenesHref}>
                    {`BEHIND THE SCENES`}
                  </a>
                </div>

                <div
                  className={style.item}
                  style={!this.state.mobileScreen
                    ? { display: "flex" }
                    : { display: "none" }}
                >
                  <a href={this.props.whyEarlyAccessHref}>
                    {`WHY EARLY ACCESS?`}
                  </a>
                </div>

                <div
                  className={style.item}
                  style={!this.state.mobileScreen
                    ? { display: "flex" }
                    : { display: "none" }
                  }
                >
                  <a href={this.props.signInHref}>SIGN IN</a>
                </div>
              </div>
              <Link
                className={style.actionButtons}
                style={!this.state.mobileScreen
                  ? { display: "flex" }
                  : { display: "none" }
                }
                to={this.props.eapSignUpHref} >
                <PrimaryButton
                  className={style.buttons}
                  small="true">
                  Get Early Access
              </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
