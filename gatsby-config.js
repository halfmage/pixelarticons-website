module.exports = {
  siteMetadata: {
    title: `Pixelarticons`,
    description: `Beautiful pixel icons. For the pixel vibes.`,
    author: `@gatsbyjs`,
    url: "https://www.pixelarticons.com",
    image: "/pixelarticons-cover.jpg",
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Space Mono`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pixelarticons`,
        path: `node_modules/pixelarticons/svg`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pixelarticons`,
        short_name: `pixelarticons`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `minimal-ui`,
        icon: `src/images/pixelarticons-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
