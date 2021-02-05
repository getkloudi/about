
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Divider } from "antd";

import CodeBlock from "../code-block/CodeBlock";
import { OutlineButton as CTAButton } from "../button";

import copyToClipboardLogo from "./assets/copy-to-clipboard.svg";
import searchLogo from "../../images/search-logo.svg";

import style from "../../scss/homepage.module.scss";

export function Download(props) {
  const command = `bash -c "$(curl -L https://raw.githubusercontent.com/kloudi-tech/local/release/get_kloudi.sh)"`;

  const heading = `Get started with Kloudi for free`;
  const alphaSubHeading = `Self-hosted`;
  const alphaDescription = [`Run the command to launch Kloudi app and server locally.`, <br />, `Available on macOS · Beta`];
  const bravoSubHeading = `Cloud`;
  const bravoDescription = [`Get started with Kloudi from anywhere.`, <br />, `Available on all platforms · Beta`];
  const { firstSection, mobileScreen } = props;

  const [copyText, setCopyText] = useState(`Copy to Clipboard`);

  function handleOnCopyToClipboard() { setCopyText(`Copied`); }

  useEffect(() => {
    if (copyText === `Copied`) {
      const timeout = setTimeout(() => {
        setCopyText(`Copy to Clipboard`);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [copyText]);

  return (
    <section className={style.contentWrapper}>
      <div className={style.content}
        style={firstSection ? { margin: "auto auto" } : {}}>
        <img alt="" className={style.terminal} src={searchLogo} />
        <div className={`${style.h2} ${`medium`}`}>{heading}</div>
        <div className={style.featureRow} >
          <div className={style.featureColumn}>
            <div className={style.columnContent}>
              <div className={style.h3}>{alphaSubHeading}</div>
              <div className={`${style.h6}`}>{alphaDescription}</div>
              <div className={`${style.h6}`}>&nbsp;</div>
            </div>
            <div className={style.featureCard}
              style={{
                width: "100%", maxWidth: "100%", height: "unset",
                padding: "16px", margin: "0"
              }}>
              <CopyToClipboard text={command}
                onCopy={handleOnCopyToClipboard}>
                <div style={{
                  width: "100%", backgroundColor: "rgb(245, 242, 240)",
                  padding: "16px 16px 4px 8px",
                  borderRadius: "8px 8px 0 0", cursor: "pointer"
                }}>
                  <div style={{
                    display: "flex", justifyContent: "flex-end",
                    alignItems: "center", fontSize: "12px", fontWeight: "500"
                  }}>
                    <span>{copyText}</span>
                    <img style={{
                      backgroundColor: "#4a4a4a", borderRadius: "8px",
                      height: "24px", marginLeft: "8px"
                    }} src={copyToClipboardLogo} />
                  </div>
                </div>
              </CopyToClipboard>
              <CodeBlock language={`powershell`} value={command} />
              <div className={`${style.secondary}`}
                style={{ fontSize: "12px", fontWeight: "500" }}>
                <br />&nbsp;&nbsp;
              {`- macOS version 10.14 or newer`}<br />
              &nbsp;&nbsp;
              {`- Docker for macOS required`}<br />
              </div>
            </div>
          </div>
          {
            mobileScreen ? <Divider className={style.divider} /> :
              <Divider type={`vertical`}
                style={{ margin: "0 32px", height: "240px" }} />
          }
          <div className={style.featureColumn}
            style={{ minHeight: mobileScreen ? "unset" : "340px" }}>
            <div className={style.columnContent} >
              <div className={style.h3}>{bravoSubHeading}</div>
              <div className={`${style.h6}`}>{bravoDescription}</div>
              <div className={`${style.h6}`}>&nbsp;</div>
            </div>
            <div className={style.featureCard}
              style={{
                width: "100%", maxWidth: "100%", height: "unset",
                padding: "16px", margin: mobileScreen ? "0" : "auto 0"
              }}>
              <a className={style.button} href={`https://app.kloudi.tech/`}
                style={{ display: "flex", justifyContent: "center" }}>
                <CTAButton
                  className={style.primaryButton}
                  small={mobileScreen ? true : false}>
                  {`Try Kloudi now`}
                </CTAButton>
              </a>
            </div>
          </div>
        </div>
        <Divider className={style.divider} />
      </div>
    </section >);
};
