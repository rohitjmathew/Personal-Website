module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131441240-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Rohit Mathew',
    description: 'Full stack software enginner',
    keywords: 'full stack, software enginner, portfolio, personal website',
    url: 'https://rohitjmathew.xyz'
  }
};
