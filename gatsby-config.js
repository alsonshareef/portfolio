const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: 'Alson Shareef',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        'gatsby-plugin-sass',
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
