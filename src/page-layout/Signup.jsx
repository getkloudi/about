import React, { PureComponent } from "react";
import { Helmet as Head } from "react-helmet";

import SimpleSignupForm from "../components/signup-form/SimpleSignupForm";
import ThankyouForSignup from "../components/signup-form/ThankyouForSignup";

import style from "../scss/signup.module.scss";

export default class Signup extends PureComponent {

  render() {
    return (
      <div className={style.signupPage} >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>{`Kloudi - Signup for Early Access Program`}</title>
        </Head>
        <div className={style.formContainer}>
          {this.props.userInfoForThankYou ?
            <ThankyouForSignup userInfo={this.props.userInfoForThankYou} /> :
            <SimpleSignupForm
              error={this.props.error}
              clearError={this.props.clearError}
              onSubmit={this.props.onSignupSubmit}
              isLoading={this.props.isLoading}
              emailInURL={this.props.emailInURL}
            />
          }
        </div>
      </div>
    );
  }
}
