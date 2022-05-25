module.exports = {
  siteMetadata: {
    siteUrl: `https://duqqy.com`,
    title: `Duqqy`,
    description: ``,
    siteUrl: `https://duqqy.com`,
    author: ``,
    i18nLocales: {
      locales: ["en", "ru"],
      defaultLocale: "en",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
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
        name: `Duqqy`,
        short_name: `duqqy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/fav/fav.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "en",
        langKeyForNull: "en",
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ],
};
