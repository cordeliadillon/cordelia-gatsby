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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-10657781-2`]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cordelia McGee-Tubb`,
        short_name: `cordeliadillon`,
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
