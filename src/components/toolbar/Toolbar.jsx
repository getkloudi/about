import React, { PureComponent } from "react";
import { Link, navigate } from "gatsby";

import logoImg from "../../images/logo.svg";
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

  render() {

    const topLinksVisibility = this.props.topLinksVisibility !== undefined ? this.props.topLinksVisibility : true;
    const featuresVisibility = this.props.featuresVisibility || false;
    const signUpVisibility = this.props.signUpVisibility || false;
    const pricingVisibility = this.props.pricingVisibility;
    console.log(topLinksVisibility, this.props.topLinksVisibility);

    return (
      <div className={style.toolbarWrapper}>
        <div className={style.toolbar}>
          <Link to={"/"}>
            <img
              alt="Goto homepage"
              src={logoImg}
              className={style.logo} />
          </Link>
          <Link to={"/"}>
            <div className={style.logoText}>{`KLOUDI`}</div>
          </Link>
          <div className={style.filler} />

          {/* <div
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
          </div> */}

          <div
            className={style.item}
            style={topLinksVisibility === true && !this.state.mobileScreen
              ? { display: "inline-block" }
              : { display: "none" }
            }
          >
            <Link to="/blog/behind-the-scenes">{`BEHIND THE SCENES`}</Link>
          </div>

          <div
            className={style.item}
            style={topLinksVisibility === true && !this.state.mobileScreen
              ? { display: "none" }
              : { display: "none" }
            }
          >
            <Link to="/blog/why-early-access">{`WHY EARLY ACCESS?`}</Link>

          </div>

          <div
            className={style.item}
            style={topLinksVisibility === true && !this.state.mobileScreen
              ? { display: "inline-block" }
              : { display: "none" }
            }
          >
            <a href={this.props.signInHref}>SIGN IN</a>
          </div>

          <Link
            style={topLinksVisibility === true && !this.state.mobileScreen
              ? { display: "inline-block" }
              : { display: "none" }
            }
            to={this.props.eapSignUpHref} >
            <PrimaryButton
              className={style.button}
              small="true">
              Get Started
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
