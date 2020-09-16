import React, { PureComponent } from "react";
import { Link } from "gatsby";

import logo from "../../images/kloudi-footer-logo.svg";
import twitterImg from "../../images/twitter.svg";
import linkedinImg from "../../images/linkedin.svg";

import style from "./footer.module.scss";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.footerContent = [
      {
        heading: "Company",
        links: [
          { text: "Book a demo", url: "https://calendly.com/sneh_ganjoo/kloudi-onboarding" },
          { text: "Newsletter", url: "http://kloudi.substack.com/" },
        ]
      },
      // {
      //   heading: "Resources",
      //   links: [
      //     { text: "Newsletter", url: "http://kloudi.substack.com/" },
      //     { text: "Blog", url: "http://blog.kloudi.tech/" }
      //   ]
      // },
      {
        heading: "Support",
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
        <div className={style.footer}>
          <img src={logo}
          // style={{ visibility: "hidden" }}
          />
          <div className={style.columnWrapper}>{footerColumns}</div>
        </div>
        <hr />
        <div className={style.socialBar}>
          <div className={style.copyrightMessage}>
            {`© 2020 Kloudi Virtual Assistant Private Ltd.`}
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
