import React from 'react';
import aboutStyles from './about.module.scss';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <div className={aboutStyles.aboutPage}>
            About
            <a
                href="https://github.com/alsonshareef"
                target="_blank"
                className={aboutStyles.icon}
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/alsonshareef/"
                target="_blank"
                className={aboutStyles.icon}
            >
                <FaLinkedin />
            </a>
        </div>
    );
};

export default About;
