import React, { PureComponent } from "react";
import { Link, navigate } from "gatsby";

import logoImg from "../../images/logo.webp";
import hamburgerImg from "./assets/hamburger.svg";

import { PrimaryButton, OutlineButton } from "../button";

import style from "./toolbar.module.scss";

export default class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileScreen: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  UNSAFE_componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 960) {
      this.setState({ mobileScreen: true });
    } else {
      this.setState({ mobileScreen: false });
    }
  }

  onHomeNavClick() {
    navigate("/");
  }

  render() {
    const featuresVisibility = this.props.featuresVisibility || false;
    const signUpVisibility = this.props.signUpVisibility || false;
    const pricingVisibility = this.props.pricingVisibility;

    return (
      <div className={style.toolbarWrapper}>
        <div className={style.toolbar}>
          <img
            alt="Goto homepage"
            src={logoImg}
            className={style.logo}
            onClick={_ => this.onHomeNavClick()}
          />
          <div className={style.logoText}>{`KLOUDI`}</div>
          <div className={style.filler} />

          <div
            className={style.logoText}
            style={
              featuresVisibility == true && !this.state.mobileScreen
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <Link to="/why-kloudi">WHY KLOUDI?</Link>
          </div>

          <div
            className={style.item}
            style={
              pricingVisibility === true && !this.state.mobileScreen
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <Link to="/pricing">PRICING</Link>
          </div>

          <div
            className={style.item}
            style={!this.state.mobileScreen
              ? { display: "inline-block" }
              : { display: "none" }
            }
          >
            <a href={this.props.behindTheScenesHref}>
              {`BEHIND THE SCENES`}
            </a>
          </div>

          <div
            className={style.item}
            style={!this.state.mobileScreen
              ? { display: "inline-block" }
              : { display: "none" }
            }
          >
            <a href={this.props.whyEarlyAccessHref}>
              {`WHY EARLY ACCESS?`}
            </a>
          </div>

          <div
            className={style.item}
            style={!this.state.mobileScreen
              ? { display: "inline-block" }
              : { display: "none" }
            }
          >
            <a href={this.props.signInHref}>SIGN IN</a>
          </div>

          <Link
            style={!this.state.mobileScreen
              ? { display: "inline-block" }
              : { display: "none" }
            }
            to={this.props.eapSignUpHref} >
            <PrimaryButton
              className={style.button}
              small="true">
              Get Early Access
              </PrimaryButton>
          </Link>
          <img
            alt=""
            src={hamburgerImg}
            className={style.hamburger}
            onClick={_ => this.props.onHamburgerClicked()}
          />
        </div>
      </div>
    );
  }
}
