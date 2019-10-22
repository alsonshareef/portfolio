import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import footerStyles from './footer.module.scss';

const footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>{`Created by ${data.site.siteMetadata.author}, ©️ 2019`}</p>
            </div>
        </footer>
    );
};

export default footer;
