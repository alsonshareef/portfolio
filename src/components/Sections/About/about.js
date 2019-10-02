import React, { Component } from 'react';
import aboutStyles from './about.module.scss';

import sr from '../../../scrollReveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class About extends Component {
    componentDidMount() {
        const h3Config = {
            ...this.props.srDefaultConfig,
            delay: 500,
            distance: '0px',
            origin: 'bottom',
        };

        sr.reveal(this.refs.abouth3, h3Config);
    }

    render() {
        return (
            <section
                id="about"
                className={['section', aboutStyles.about__page].join(' ')}
            >
                <div className="container">
                    <h3
                        className={['title', aboutStyles.title].join(' ')}
                        ref="abouth3"
                    >
                        About Me
                    </h3>
                    <div className="columns">
                        <div className="column has-text-centered">
                            {/* Replace img element with gatsby-image. */}
                            <img
                                src="https://i.pravatar.cc/300"
                                alt="placeholder"
                            ></img>
                            <ul className={[aboutStyles.socials].join(' ')}>
                                <li className="button">
                                    <a
                                        href="https://github.com/alsonshareef"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub />
                                    </a>
                                </li>
                                <li className="button">
                                    <a
                                        href="https://www.linkedin.com/in/alsonshareef/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div
                            className={[
                                'column',
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
