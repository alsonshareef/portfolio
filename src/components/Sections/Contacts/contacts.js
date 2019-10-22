import React from 'react';
import contactsStyles from './contacts.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return (
        <section
            className={['section', contactsStyles.contacts__page].join(' ')}
            id="contacts"
        >
            <div className="container">
                <h3 className={['title', contactsStyles.title].join(' ')}>
                    Contacts
                </h3>
                <div className="contact content">
                    <p>If you would like to reach out... </p>
                    <a
                        className={[
                            'button is-large',
                            contactsStyles.link,
                        ].join(' ')}
                        href="mailto:alson.shareef@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
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
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
