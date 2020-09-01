var targetEnv = process.env.TARGET_ENV || process.env.NODE_ENV || "development";
const path = require("path");
require("dotenv").config({
  path: path.resolve(`.env`),
  debug: process.env.DEBUG,
});

module.exports = {
  siteMetadata: {
    title: `Kloudi - World's simplest terminal for your daily workflows`,
    description: `Kloudi is an NLP terminal that brings all your tools under one roof, enabling every developer to access all their tools, its data and actions from one place. All of this ease without learning any command or leaving your editor`,
    author: `Kloudi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kloudi`,
        short_name: `Kloudi`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn:
          ["production", "staging"].indexOf(targetEnv) !== -1
            ? eval(`process.env.${targetEnv.toUpperCase()}_SENTRY_DSN`) || ""
            : "",
        environment: targetEnv,
        autoBreadcrumbs: {
          console: true, // console logging
          http: true, // http and https requests
        },
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["GATSBY_API_URL", "PLATFORM", "TARGET_ENV"],
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: "WEXVY",
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://d3kv0gsk1hy8nz.cloudfront.net/",
          "https://fonts.gstatic.com",
          "https://rs.fullstory.com",
        ],
      },
    },
  ],
};
