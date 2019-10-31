import React, { Component } from 'react';
import contactsStyles from './contacts.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Contacts extends Component {
    // componentDidMount() {
    //     const titleConfig = {
    //         ...this.props.defaultSR,
    //         delay: 600,
    //         origin: 'bottom',
    //     };

    //     const textConfig = {
    //         ...this.props.defaultSR,
    //         delay: 800,
    //         origin: 'left',
    //     };

    //     const linkConfig = {
    //         ...this.props.defaultSR,
    //         delay: 1000,
    //         origin: 'left',
    //     };

    //     import('../../../scrollReveal').then(module => {
    //         module.default.reveal(this.refs.title, titleConfig);
    //         module.default.reveal(this.refs.text, textConfig);

    //         for (const refProp of Object.keys(this.refs)) {
    //             if (refProp.includes('link')) {
    //                 module.default.reveal(this.refs[refProp], linkConfig);
    //             }
    //         }
    //     });
    // }

    render() {
        return (
            <section
                className={['section', contactsStyles.contacts__page].join(' ')}
                id="contacts"
            >
                <div className="container">
                    <h3
                        className={['title', contactsStyles.title].join(' ')}
                        ref="title"
                    >
                        Contacts
                    </h3>
                    <div className="contact content">
                        <p ref="text">If you would like to reach out... </p>
                        <a
                            className={[
                                'button is-large',
                                contactsStyles.link,
                            ].join(' ')}
                            href="mailto:alson.shareef@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            ref="link1"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a
                            className={[
                                'button is-large',
                                contactsStyles.link,
                            ].join(' ')}
                            href="https://github.com/alsonshareef"
                            target="_blank"
                            rel="noopener noreferrer"
                            ref="link2"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            className={[
                                'button is-large',
                                contactsStyles.link,
                            ].join(' ')}
                            href="https://www.linkedin.com/in/alsonshareef/"
                            target="_blank"
                            rel="noopener noreferrer"
                            ref="link3"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;
