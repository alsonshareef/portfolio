import React, { Component } from 'react';
import '../styles/index.scss';

import Layout from '../components/UI/Layout/layout';
import Banner from '../components/Sections/Banner/banner';
import About from '../components/Sections/About/about';
import Projects from '../components/Sections/Projects/projects';
import Skills from '../components/Sections/Skills/skills';
import Contacts from '../components/Sections/Contacts/contacts';

class IndexPage extends Component {
    // Default scrollReveal config properties.
    srDefaultConfig = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '30px',
        duration: 1000,
        desktop: true,
        mobile: true,
    };

    render() {
        return (
            <Layout>
                <div id="top" />
                <Banner srDefaultConfig={this.srDefaultConfig} />
                <About srDefaultConfig={this.srDefaultConfig} />
                <Projects srDefaultConfig={this.srDefaultConfig} />
                <Skills srDefaultConfig={this.srDefaultConfig} />
                <Contacts srDefaultConfig={this.srDefaultConfig} />
            </Layout>
        );
    }
}

export default IndexPage;
