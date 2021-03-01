module.exports = {
  siteMetadata: {
    title: `Cordelia McGee-Tubb`,
    description: `Cordelia McGee-Tubb is a person with a website.`,
    author: `Cordelia McGee-Tubb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cordelia--wave.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-jsx`,
  ],
}
