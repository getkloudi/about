import React, { PureComponent } from "react";

import { PrimaryButton } from "../button";

import textLogo from "./assets/kloudi-signup-logo.svg";
import logo from "../../images/happy-logo.webp";

import style from "./thankyou-signup.module.scss";
import { TwitterButton, NotionButton } from "../button/Button";

export default class ThankyouForSignup extends PureComponent {
  constructor(props) {
    super(props);
  }

  onFillOnboardingSurveyClick = (e) => {
    const name = this.props.userInfo ? this.props.userInfo.name : "";
    const email = this.props.userInfo ? this.props.userInfo.email : "";
    const firstName = name.split(" ")[0];
    if (typeof window !== `undefined` && process.env.TARGET_ENV !== "production")
      window.location.href = `https://kloudi.typeform.com/to/cbTP1wgB?email=${email}&name=${firstName}`;
    if (typeof window !== `undefined` && process.env.TARGET_ENV === "production")
      window.location.href = `https://kloudi.typeform.com/to/bkOD88Rb?email=${email}&name=${firstName}`;
  };

  onNotionClick = e => {
    if (typeof window !== `undefined`)
      window.location.href = 'https://www.notion.so/Kloudi-Behind-the-scenes-9f58a4c91f744dbda4816838589ad1aa';
  };

  render() {
    const name = this.props.userInfo ? this.props.userInfo.name : "";
    const firstName = name.split(" ")[0];
    return (
      <div className={style.container}>
        <div className={style.header}>
          <img src={logo} alt="Thank you for signing up on Kloudi" className={style.logo} />
          <div className={style.greeting}>{`Awesome${firstName ? ` ${firstName}` : ``}!`}</div>
          <div className={style.message}>
            {`We have you on the waitlist for access 🗒`}
          </div>
        </div>
        <div className={style.content} >
          <div className={style.message} >
            {`While you wait to explore Kloudi, please fill the form so that we can ensure that you have a seamless experience with Kloudi.`}
          </div >
          <PrimaryButton
            className={style.submit}
            onClick={e => {
              this.onFillOnboardingSurveyClick(e);
            }}>
            {`Fill Up Onboarding Form`}
          </PrimaryButton>
          <div className={style.divider} />
        </div >
        <div className={style.footer}>
          <TwitterButton className={style.btn} small />
          <NotionButton
            className={style.btn}
            onClick={e => {
              this.onNotionClick(e);
            }}
            small
          >
            {'Behind the scenes'}
          </NotionButton>
          <img
            className={style.logo}
            src={textLogo}
            alt=""
          />
        </div>
      </div >
    );
  }
}
