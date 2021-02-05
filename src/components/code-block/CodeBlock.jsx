import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  base16AteliersulphurpoolLight,
  coy,
  duotoneLight,
  prism,
  solarizedlight
} from "react-syntax-highlighter/dist/esm/styles/prism";

import "./code-block.scss";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
    small: PropTypes.bool,
    auto: PropTypes.bool,
    style: PropTypes.string
  };

  static defaultProps = {
    language: `json`,
    small: false,
    auto: false,
    style: `prism`
  };

  getStyle(style) {
    if (style === `coy`) return coy;
    else if (style === `duotoneLight`) return duotoneLight;
    else if (style === `solarizedlight`) return solarizedlight;
    else if (style === `base16AteliersulphurpoolLight`)
      return base16AteliersulphurpoolLight;
    else if (style === `prism`) return prism;
    else return prism;
  }
  render() {
    const { language, value, small, auto, style } = this.props;
    const customStyle = {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      marginTop: "0",
      marginBottom: "4px",
      overflow: "auto",
      whiteSpace: "pre-line",
      wordBreak: "break-word",
      overflowWrap: "break-word",
      borderRadius: "0 0 8px 8px",
      padding: "16px 12px"
    };

    const autoCustomStyle = {
      ...customStyle,
      padding: "16px 16px"
    };
    return (
      <SyntaxHighlighter
        customStyle={auto ? autoCustomStyle : customStyle}
        codeTagProps={{
          className: `code-block ${small ? `small` : ``} ${auto ? `auto` : ``}`
        }}
        language={language}
        style={this.getStyle(style)}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
