import React, { PureComponent } from "react";

import style from "./footer.module.scss";

import twitterImg from "../../images/twitter.svg";
import linkedinImg from "../../images/linkedin.svg";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.footerContent = [
      // {
      //   heading: "Discover",
      //   links: [
      //     { text: "Why Kloudi?", url:"/why-kloudi" },
      //   ]
      // },
      {
        heading: "Legal",
        links: [
          { text: "Privacy Policy", url: "/privacy-policy" },
          { text: "Terms of Service", url: "/terms-of-service" }
        ]
      },
      {
        heading: "Company",
        links: [
          // { text: "Blog", url:"https://blog.kloudi.tech" },
          // { text: "Careers" },
          // { text: "FAQs" },
          { text: "Contact Us", url: "mailto:hello@kloud.team" }
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
        {/* <div className={style.footer}>
          <img src={logo} style={{ visibility: "hidden" }} />
          <div className={style.columnWrapper}>{footerColumns}</div>
        </div> */}
        <hr />
        <div className={style.socialBar}>
          <p className={style.copyrightMessage}>
            © 2020 Kloudi Virtual Assistant Private Ltd. All rights reserved.
          </p>
          <div className={style.filler} />
          {/* <a href="https://www.facebook.com/kloudbot/" target="_blank">
            <img
              className={style.socialIcon}
              src={facebookImg}
              alt="Kloudi facebook icon"
            />
          </a>*/}
          <a href="https://twitter.com/@KloudiTech" target="_blank">
            <img
              className={style.socialIcon}
              src={twitterImg}
              alt="Follow Kloudi on Twitter at @KloudiTech"
            />
          </a>
          <a href="https://www.linkedin.com/company/kloudi/" target="_blank">
            <img
              className={style.socialIcon}
              src={linkedinImg}
              alt="Follow Kloudi on Linked"
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
