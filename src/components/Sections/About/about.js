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
                    <img src="https://i.pravatar.cc/300" alt=""></img>
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

                <div className={aboutStyles.__main}>
                    <h3 className={aboutStyles.main__name}>Alson Shareef</h3>
                    <p className={aboutStyles.main__position}>
                        Full-Stack Developer
                    </p>
                    <p className={aboutStyles.main__info}>
                        (Info about me goes here.)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
