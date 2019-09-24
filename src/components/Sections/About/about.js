import React from 'react';
import aboutStyles from './about.module.scss';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className={aboutStyles.about__page}>
            <h2>About Me</h2>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.sidebar}>
                    {/* Replace img element with gatsby-image. */}
                    <img
                        className={aboutStyles.sidebar__image}
                        src="https://i.pravatar.cc/300"
                        alt=""
                    ></img>
                    <ul className={aboutStyles.sidebar__socials}>
                        <li className={aboutStyles.sidebar__socials__items}>
                            <a
                                href="https://github.com/alsonshareef"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    aboutStyles.sidebar__socials__items__link
                                }
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li className={aboutStyles.sidebar__socials__items}>
                            <a
                                href="https://www.linkedin.com/in/alsonshareef/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    aboutStyles.sidebar__socials__items__link
                                }
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={aboutStyles.main}>
                    <p className={aboutStyles.main__info}>
                        I'm a passionate Full-Stack Web Developer focused on
                        consistent learning and pushing my boundaries to become
                        a better problem-solver.
                    </p>
                    <p className={aboutStyles.main__info}>
                        I have been primarly focused on learning the JavaScript
                        ecosystem and how to utilise these technologies to build
                        clean, perfomant front-ends and robust back-ends.
                    </p>
                    <p className={aboutStyles.main__info}>
                        In the sections below you will see the technologies I
                        have been focused on learning as well as the projects I
                        have built in order to properly understand them.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
