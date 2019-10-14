import React from 'react';
import contactsStyles from './contacts.module.scss';

const Contacts = () => {
    return (
        <section
            className={['section', contactsStyles.contacts__page].join(' ')}
            id="contacts"
        >
            <div className="container">
                <h3 className="title">Contacts</h3>
            </div>
        </section>
    );
};

export default Contacts;
