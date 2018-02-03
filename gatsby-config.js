module.exports = {
    siteMetadata: {
        title: 'Wow blog!'
    },
    plugins: [
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'posts',
            path: `${__dirname}/posts/`
          }
        },
        'gatsby-transformer-remark'
    ]
};