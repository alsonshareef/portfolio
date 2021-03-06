import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO/SEO';
import Layout from '../components/UI/Layout/layout';

const NotFound = () => {
    return (
        <Layout>
            <SEO title="404" />
            <h1>Page not found</h1>
            <p>
                <Link to="/" />
                Head to home page.
            </p>
        </Layout>
    );
};

export default NotFound;
