import React from 'react';
import '../styles/index.scss';

import Layout from '../components/UI/Layout/layout';
import Banner from '../components/Sections/Banner/banner';
import About from '../components/Sections/About/about';
import Projects from '../components/Sections/Projects/Projects';
import Skills from '../components/Sections/Skills/Skills';
import Contacts from '../components/Sections/Contacts/Contacts';

const IndexPage = () => (
    <Layout>
        <Banner />
        <About />
        <Projects />
        <Skills />
        <Contacts />
    </Layout>
);

export default IndexPage;
