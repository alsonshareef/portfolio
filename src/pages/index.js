import React from 'react';
import { graphql } from 'gatsby';

import '../styles/index.scss';

import Layout from '../components/UI/Layout/layout';
import SEO from '../components/SEO/SEO';
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
            <SEO title="Home" />
            <Banner defaultSR={defaultSR} />
            <About defaultSR={defaultSR} data={data.profileImg.nodes} />
            <Skills defaultSR={defaultSR} data={data.skillsImgs.nodes} />
            <Projects defaultSR={defaultSR} data={data.projectImgs.nodes} />
            <Contacts defaultSR={defaultSR} />
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    {
        profileImg: allFile(filter: { relativeDirectory: { eq: "profile" } }) {
            nodes {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }

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
