import React from "react";
import axios from 'axios';


const MY_DOMAIN = "kloudi.tech/blogs";
const SLUG_TO_PAGE = {
  "": "ef5448d503fb413c84406f51f5fe5682",
  "/behind-the-scenes": "9f58a4c91f744dbda4816838589ad1aa",
};

export default class Blogs extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div></div>;
  }
}
