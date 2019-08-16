import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/Sections/Intro/Intro';
import About from '../components/Sections/About/About';
import Projects from '../components/Sections/Projects/Projects';
import Skills from '../components/Sections/Skills/Skills';
import Contacts from '../components/Sections/Contacts/Contacts';

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
