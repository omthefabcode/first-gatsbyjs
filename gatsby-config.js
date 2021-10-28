module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
    description: "first test for gatsby JS, I am fresher here"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
