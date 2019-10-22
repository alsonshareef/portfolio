import React, { Component } from 'react';
import aboutStyles from './about.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    render() {
        return (
            <section
                id="about"
                className={['section', aboutStyles.about__page].join(' ')}
            >
                <h3 className={['title', aboutStyles.title].join(' ')}>
                    About Me
                </h3>
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            {/* Replace img element with gatsby-image. */}
                            <img
                                src="https://i.pravatar.cc/300"
                                alt="placeholder"
                            ></img>
                            <ul className={[aboutStyles.socials].join(' ')}>
                                <li
                                    className={[
                                        'button is-large',
                                        aboutStyles.link,
                                    ].join(' ')}
                                >
                                    <a
                                        href="mailto:alson.shareef@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            className={aboutStyles.icon}
                                            icon={faEnvelope}
                                        />
                                    </a>
                                </li>
                                <li
                                    className={[
                                        'button is-large',
                                        aboutStyles.link,
                                    ].join(' ')}
                                >
                                    <a
                                        href="https://github.com/alsonshareef"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            className={aboutStyles.icon}
                                            icon={faGithub}
                                        />
                                    </a>
                                </li>
                                <li
                                    className={[
                                        'button is-large',
                                        aboutStyles.link,
                                    ].join(' ')}
                                >
                                    <a
                                        href="https://www.linkedin.com/in/alsonshareef/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                            />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div
                            className={[
                                'column',
                                'content',
                                'has-text-centered-mobile',
                                aboutStyles.textColumn,
                            ].join(' ')}
                        >
                            <p>
                                I'm a passionate Full-Stack Web Developer
                                focused on consistent learning and pushing my
                                boundaries to become a better problem-solver.
                            </p>
                            <p>
                                I have been primarly focused on learning the
                                JavaScript ecosystem and how to utilise these
                                technologies to build clean, perfomant
                                front-ends and robust back-ends.
                            </p>
                            <p>
                                In the sections below you will see the
                                technologies I have been focused on learning as
                                well as the projects I have built in order to
                                properly understand them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
