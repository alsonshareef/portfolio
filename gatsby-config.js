module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: 'Alson Shareef',
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1,
                once: true,
            },
        },
    ],
};
