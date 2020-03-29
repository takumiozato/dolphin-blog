module.exports = {
  siteMetadata: {
    title: `Dolphin`,
    description: `フロントエンドエンジニアの日々の学びをつらつらと`,
    author: `takumi ozato`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "84c83e39-eb73-4d4a-928c-502596dd44f3",
        serviceId: "dolphin",
        endpoint: "post",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:300,400,500,700`, `Lato`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
