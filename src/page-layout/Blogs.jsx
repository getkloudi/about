import React from "react";

import "../scss/blogs.scss";


export default class Blogs extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="iframe-wrapper">
      <iframe
        className="iframe"
        src="https://blog.kloudi.tech/embed/"
        frameBorder="0"
        sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
        allowFullScreen={true}
        mozallowfullscreen="true"
        webkitallowfullscreen="true" />
    </div>;
  }
}
