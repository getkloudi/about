import React, { PureComponent } from "react";
import loadingStyles from "./loading.module.scss";

export default class Loading extends PureComponent {
  render() {
    return (
      <div
        className={`${loadingStyles.loading} ${
          this.props.small ? loadingStyles.small : ""
        } ${
          this.props.center ? loadingStyles.center : ""
        }`}
      >
        <div
          className={`${loadingStyles.loader}
            ${this.props.secondary ? loadingStyles.secondary : ``}
              `}
        />
      </div>
    );
  }
}
