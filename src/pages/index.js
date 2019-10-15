import React, { Component } from 'react';
import '../styles/index.scss';

import Layout from '../components/UI/Layout/layout';
import Head from '../components/Head/head';
import Banner from '../components/Sections/Banner/banner';
import About from '../components/Sections/About/about';
import Projects from '../components/Sections/Projects/projects';
import Skills from '../components/Sections/Skills/skills';
import Contacts from '../components/Sections/Contacts/contacts';

class IndexPage extends Component {
    render() {
        return (
            <Layout>
                <div id="top" style={{ minHeight: '100vh' }} />
                <Head title="Home" />
                <Banner />
                <About />
                <Skills />
                <Projects />
                <Contacts />
            </Layout>
        );
    }
}

export default IndexPage;
