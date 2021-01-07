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
    title: 'Rohit Jacob Mathew',
    description: 'Senior Software Engineer based in India. SSE at Turtlemint, Auth0 Ambassador & Former SDE Intern at HackerRank',
    keywords: 'full stack, software engineer, portfolio, personal website, Rohit Mathew, Rohit Jacob Mathew',
    image: "../assets/images/rohit.webp",
    url: 'https://rohitjmathew.space'
  }
};
