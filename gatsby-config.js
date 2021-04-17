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
        icon: `src/images/mjqservices-logo-512px-white.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `source sans pro\:400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
      options: {
        fonts: [
          `Caveat Brush`,
          `source sans pro\:400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyA_e34Bpq2iIu6lHlS7J5nBjfpcY_ZXonc",
          authDomain: "mjqservices.firebaseapp.com",
          databaseURL: "https://mjqservices.firebaseio.com",
          projectId: "mjqservices",
          storageBucket: "mjqservices.appspot.com",
          messagingSenderId: "678583414165",
          appId: "1:678583414165:web:dde712897dd57d84f35a9c",
          measurementId: "G-Y5Z3HN2RWD",
        },
      },
    },
  ],
}
