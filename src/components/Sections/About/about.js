import React from 'react';
import aboutStyles from './about.module.scss';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <section className={aboutStyles.aboutPage}>
            <h2>About</h2>
            <a
                href="https://github.com/alsonshareef"
                target="_blank"
                rel="noopener noreferrer"
                className={aboutStyles.icon}
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/alsonshareef/"
                target="_blank"
                rel="noopener noreferrer"
                className={aboutStyles.icon}
            >
                <FaLinkedin />
            </a>
        </section>
    );
};

export default About;
