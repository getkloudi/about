import React, { PureComponent } from "react";
import { Link } from "gatsby";

import { Divider } from "antd";

import logo from "../../images/kloudi-footer-logo.svg";
import twitterImg from "../../images/twitter.svg";
import linkedinImg from "../../images/linkedin.svg";
import githubImg from "../../images/github.svg";

import style from "./footer.module.scss";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.footerContent = [
      {
        heading: "Platform",
        links: [
          { text: "Mac App", url: "https://kloudi-tech/get-started/" },
          { text: "Cloud", url: "https://app.kloudi.tech/" },
          { text: "VSCode Extension (Alpha)", url: "https://marketplace.visualstudio.com/items?itemName=Kloudi.kloudi" }
        ]
      },
      {
        heading: "Garage",
        links: [
          { text: "Discord", url: "https://discord.gg/d7AmNdUgJB" },
          { text: "Twitter", url: "https://twitter.com/@KloudiTech" },
        ]
      },
      {
        heading: "Company",
        links: [
          { text: "Github", url: "https://github.com/getkloudi/" },
          { text: "Newsletter", url: "http://kloudi.substack.com/" },
        ]
      },
      {
        heading: "Support",
        links: [
          { text: "Contact Us", url: "mailto:hello@kloudi.tech" }
        ]
      }
    ];
  }

  render() {
    const footerColumns = this.footerContent.map((column, index) => (
      <div className={style.column} key={index}>
        <p className={style.heading}>{column.heading}</p>
        {column.links.map((link, i) => (
          <p className={style.link} key={i}>
            <a href={link.url}>{link.text}</a>
          </p>
        ))}
      </div>
    ));
    return (
      <div className={style.footerWrapper}>
        <div className={style.footer}>
          <img src={logo}
          // style={{ visibility: "hidden" }}
          />
          <div className={style.columnWrapper}>{footerColumns}</div>
        </div>
        <Divider className={style.hr} />
        <div className={style.socialBar}>
          <div className={style.copyrightMessage}>
            {`© 2021 Kloudi Virtual Assistant`}
          </div>
          <div className={style.copyrightMessage}>
            <Link to="/terms-of-service">{`Terms`}</Link>
          </div>
          <div className={style.copyrightMessage}>
            <Link to="/privacy-policy">{`Privacy`}</Link>
          </div>
          <div className={style.filler} />
          {/* <a href="https://www.facebook.com/kloudbot/" target="_blank">
            <img
              className={style.socialIcon}
              src={facebookImg}
              alt="Kloudi facebook icon"
            />
          </a>*/}
          <a href="https://github.com/getkloudi/" >
            <img
              className={style.socialIcon}
              src={githubImg}
              alt="Follow Kloudi on Github"
            />
          </a>
          <a href="https://twitter.com/@KloudiTech">
            <img
              className={style.socialIcon}
              src={twitterImg}
              alt="Follow Kloudi on Twitter at @KloudiTech"
            />
          </a>
          {/* <a href="https://www.instagram.com/kloudi.tech/" target="_blank">
            <img
              className={style.socialIcon}
              src={instagramImg}
              alt="Kloudi instagram icon"
            />
          </a>*/}
        </div>
      </div>
    );
  }
}

export default Footer;
