import React from 'react';
import '../styles/index.scss';

import Layout from '../components/UI/Layout/layout';
import Banner from '../components/Sections/Banner/banner';
import About from '../components/Sections/About/about';
import Projects from '../components/Sections/Projects/projects';
import Skills from '../components/Sections/Skills/skills';
import Contacts from '../components/Sections/Contacts/contacts';

const IndexPage = () => (
    <Layout>
        <div id="top" />
        <Banner />
        <About />
        <Projects />
        <Skills />
        <Contacts />
    </Layout>
);

export default IndexPage;
