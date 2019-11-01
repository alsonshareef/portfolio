module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        description: 'Portfolio webisite for Alson Shareef',
        author: 'Alson Shareef',
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
    ],
};
