import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contacts from '../components/Contacts/Contacts';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contacts />
    </Layout>
);

export default IndexPage;
