module.exports = {
  siteMetadata: {
    title: `MJ Quality Services`,
    description: `We focus our services on QUALITY without forgetting the GOOD PRICE so everyone can have access to them.`,
    author: `Sergio Olivares`,
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
        name: `MJ Quality Services`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `hsl(24.2, 100%, 50%)`,
        theme_color: `hsl(24.2, 100%, 50%)`,
        display: `minimal-ui`,
        icon: `src/images/logo-mjqservices-white-500px.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat Alternates`,
            variants: [`400`, `600`],
          },
          {
            family: `Montserrat Alternates`,
            subsets: [`latin`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
