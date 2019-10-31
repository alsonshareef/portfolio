import React, { Component } from 'react';
import aboutStyles from './about.module.scss';

import Img from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    // componentDidMount() {
    //     const titleConfig = {
    //         ...this.props.defaultSR,
    //         delay: 600,
    //         origin: 'bottom',
    //     };

    //     const profileColumnConfig = {
    //         ...this.props.defaultSR,
    //         delay: 1000,
    //         origin: 'left',
    //     };

    //     const textColumnConfig = {
    //         ...this.props.defaultSR,
    //         delay: 1000,
    //         origin: 'right',
    //     };

    //     import('../../../scrollReveal').then(module => {
    //         module.default.reveal(this.refs.title, titleConfig);
    //         module.default.reveal(this.refs.profileColumn, profileColumnConfig);
    //         module.default.reveal(this.refs.textColumn, textColumnConfig);
    //     });
    // }

    render() {
        return (
            <section
                id="about"
                className={['section', aboutStyles.about__page].join(' ')}
            >
                <h3
                    className={['title', aboutStyles.title].join(' ')}
                    ref="title"
                >
                    About Me
                </h3>
                <div className="container">
                    <div className="columns">
                        <div
                            className={[
                                'column has-text-centered',
                                aboutStyles.profileColumn,
                            ].join(' ')}
                            ref="profileColumn"
                        >
                            <div className={aboutStyles.img_container}>
                                <Img
                                    fluid={
                                        this.props.data[0].childImageSharp.fluid
                                    }
                                />
                            </div>
                            <ul className={[aboutStyles.socials].join(' ')}>
                                <li className={aboutStyles.link}>
                                    <a
                                        className="button is-large"
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
                                <li className={aboutStyles.link}>
                                    <a
                                        className="button is-large"
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
                                <li className={aboutStyles.link}>
                                    <a
                                        className="button is-large"
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
                            ref="textColumn"
                        >
                            <p>
                                I'm a passionate Full-Stack Web Developer
                                focused on consistent learning and pushing my
                                boundaries in both my logical and creative sides
                                to become a better problem-solver.
                            </p>
                            <p>
                                I have been primarly focused on learning the
                                JavaScript ecosystem, and how to utilise these
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
