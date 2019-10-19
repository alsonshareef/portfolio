import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/index.scss';

import Layout from '../components/UI/Layout/layout';
import Head from '../components/Head/head';
import Banner from '../components/Sections/Banner/banner';
import About from '../components/Sections/About/about';
import Projects from '../components/Sections/Projects/projects';
import Skills from '../components/Sections/Skills/skills';
import Contacts from '../components/Sections/Contacts/contacts';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile {
                nodes {
                    name
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);

    const defaultSR = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '30px',
        duration: 1000,
        desktop: true,
        mobile: true,
    };

    return (
        <Layout>
            <div id="top" style={{ minHeight: '100vh' }} />
            <Head title="Home" />
            <Banner defaultSR={defaultSR} />
            <About defaultSR={defaultSR} />
            <Skills defaultSR={defaultSR} data={data.allFile.nodes} />
            <Projects defaultSR={defaultSR} />
            <Contacts defaultSR={defaultSR} />
        </Layout>
    );
};

export default IndexPage;
