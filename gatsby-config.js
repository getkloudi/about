var targetEnv = process.env.TARGET_ENV || process.env.NODE_ENV || 'development';
const path = require('path');
require('dotenv').config({
  path: path.resolve(`.env.${targetEnv}`),
  debug: process.env.DEBUG,
});

module.exports = {
  siteMetadata: {
    title: `Kloudi - Take control of your tools`,
    description: ``,
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
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn:
          ['production', 'staging'].indexOf(targetEnv) !== -1
            ? eval(`process.env.${targetEnv.toUpperCase()}_SENTRY_DSN`) || ''
            : '',
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
        whitelist: ['PLATFORM', 'GATSBY_API_URL'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
