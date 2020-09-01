import React from "react";
import { Button } from "reactstrap";
import arrowImg from "./assets/arrow.svg";
import twitterImg from "./assets/twitter.svg";
import notionImg from "./assets/notion.svg";

import buttonStyles from "./button.module.scss";

/**
 * To create a new bootstrap/reactstrap button of a different color,
 *  define a color(e.g "new-color") in bootstrap variable in _variables.scss
 * If "new-color"is passed in the props, i.e: <Button color="new-color">,
 * the generated classname for that button by bootstrap/reactstrap is "btn-new-color"
 * If the button is an outline button, the gererated classname is btn-outline-new-color.
 * Override these classes and their pseudo-elements to create your custom styles
 */

export default Button;

//Done and tested
export const PrimaryButton = props => (
  <Button
    onClick={props.onClick}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnPrimary} ${
      props.singleColor ? buttonStyles.singleColor : ""
      }`}
    color="primary"
  >
    <div className={buttonStyles.text}>{props.children}</div>
    <img alt="" src={arrowImg} />
  </Button>
);

//Done and tested
export const OutlineButton = props => (
  <Button
    onClick={props.onClick}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnOutlinePrimary}`}
    color="primary"
    outline
  >
    <div className={buttonStyles.text}>{props.children}</div>
  </Button>
);

//Done
export const SecondaryButton = props => (
  <Button
    outline
    {...props}
    color="primary"
    className={`${props.className || ""}`}
  >
    <div className={buttonStyles.text}>{props.children}</div>
  </Button>
);

//Done and tested
export const AddFeatureButton = props => (
  <Button
    onClick={props.onClick}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnAddFeature}`}
    color="add-feature"
  >
    <div className={buttonStyles.text}>
      {props.children || "@Add "}
    </div>
    <span className="placeholder-text">&nbsp;to feature list</span>
  </Button>
);

//Done and tested
export const PricingConfirmButton = props => (
  <Button
    onClick={props.onClick}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnAddFeature}`}
    color="add-feature"
  >
    <div className={buttonStyles.text}>{props.text || "CONFIRM"}</div>
  </Button >
);

//Done and tested
export const EditFeatureButton = props => (
  <Button
    onClick={props.onClick}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnAddFeature}`}
    color="add-feature"
  >
    <div className={buttonStyles.text}>{`@Edit`}</div>
  </Button>
);

//Done and tested
export const IconButton = props => (
  <div
    className={`${buttonStyles.iconButton} ${props.className || ""}`}
    onClick={props.onClick}
  >
    <img
      className="icon"
      src={props.icon}
      style={{ transform: `rotate(${props.rotate || "0deg"})` }}
      alt=""
    />
  </div>
);

//Done and tested
export const DeleteIconButton = props => (
  <div
    className={`${buttonStyles.deleteIconButton} ${props.className} ${buttonStyles.btn}`}
    onClick={props.onClick}
  >
    <div className={`${buttonStyles.icon}`} />
  </div>
);

//Done and tested
export const SelectMultipleIconButton = props => (
  <div
    className={`${props.className} ${buttonStyles.selectMultipleIconButton} ${
      props.isActive ? buttonStyles.activeSelectMultipleIconButton : ``
      }`}
    onClick={props.onClick}
  >
    <div className={buttonStyles.icon} />
  </div>
);

//Done and tested
export const LinkIconButton = props => (
  <div
    className={`${props.className} ${buttonStyles.linkIconButton} ${
      props.isActive ? buttonStyles.activeLinkIconButton : ``
      }`}
    onClick={props.onClick}
  >
    <div className={buttonStyles.icon} />
  </div>
);

export const QueryBarBackButton = props => (
  <div
    className={`${props.className} ${buttonStyles.querybarBackButton}`}
    onClick={props.onClick}
  >
    <div className={buttonStyles.icon} />
  </div>
);

export const DisabledButton = props => (
  <Button {...props} outline color="inactive">
    {props.children}
  </Button>
);

//Done and tested
export const GenericCardButton = props => (
  <Button
    onClick={props.onClick}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnAddFeature}`}
    color="add-feature"
    dangerouslySetInnerHTML={{
      __html:
        props.buttonText ||
        `@Add <span class="placeholder-text">to feature list</span>`
    }}
  />
);

function onTwitterClick(e) {
  if (typeof window !== `undefined`)
    window.location.href = 'https://twitter.com/KloudiTech';
};

export const TwitterButton = props => (
  <Button
    onClick={e => { onTwitterClick(); }}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnTwitter}`}
    color="primary"
  >
    <img alt="" src={twitterImg} />
    <div className={buttonStyles.text}>{`Follow @KloudiTech`}</div>
  </Button>
);

export const NotionButton = props => (
  <Button
    onClick={props.onClick}
    className={`${props.className || ""} ${
      props.small ? buttonStyles.small : ""
      } ${buttonStyles.btn} ${buttonStyles.btnNotion}`}
    color="primary"
  >
    <img alt="Read More about Kloudi on Notion" src={notionImg} />
    <div className={buttonStyles.text}>{props.children}</div>
  </Button>
);
