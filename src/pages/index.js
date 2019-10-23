import React from 'react';
import { graphql } from 'gatsby';
import '../styles/index.scss';

import Layout from '../components/UI/Layout/layout';
import Head from '../components/Head/head';
import Banner from '../components/Sections/Banner/banner';
import About from '../components/Sections/About/about';
import Projects from '../components/Sections/Projects/projects';
import Skills from '../components/Sections/Skills/skills';
import Contacts from '../components/Sections/Contacts/contacts';

const IndexPage = ({ data }) => {
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
            <Skills defaultSR={defaultSR} data={data.skillsImgs.nodes} />
            <Projects defaultSR={defaultSR} data={data.projectImgs.nodes} />
            <Contacts defaultSR={defaultSR} />
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    {
        skillsImgs: allFile(filter: { relativeDirectory: { eq: "skills" } }) {
            nodes {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }

        projectImgs: allFile(
            filter: { relativeDirectory: { eq: "projects" } }
        ) {
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
`;
