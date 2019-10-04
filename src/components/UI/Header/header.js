import React, { useState } from 'react';
import headerStyles from './header.module.scss';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfo,
    faFile,
    faList,
    faChartBar,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // Tracks active state of navbar-burger button
    const [active, toggleActive] = useState(false);

    return (
        <header>
            <nav
                className={['navbar', 'is-fixed-top', headerStyles.navbar].join(
                    ' '
                )}
            >
                {/* 
                    Left Side of Navbar
                */}

                <div className="navbar-brand">
                    <AnchorLink
                        onClick={() => toggleActive(false)}
                        className="navbar-item is-size-4-touch is-size-3-desktop"
                        offset={() => 900}
                        href="#top"
                    >
                        Alson Shareef
                    </AnchorLink>

                    <button
                        onClick={() => toggleActive(!active)}
                        className={[
                            active
                                ? 'navbar-burger is-active'
                                : 'navbar-burger',
                            headerStyles.burger,
                        ].join(' ')}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navMenu"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                {/* 
                    Right Side of Navbar
                */}

                <div
                    id="navMenu"
                    className={active ? 'navbar-menu is-active' : 'navbar-menu'}
                >
                    <Scrollspy
                        className="navbar-end is-size-6-touch is-size-5-desktop"
                        items={[
                            'top',
                            'about',
                            'skills',
                            'projects',
                            'contacts',
                        ]}
                        currentClassName="is-active"
                        offset={-300}
                    >
                        {/* Fake link thats invisible, but count as an item in Scrollspy to delay highlighting of navbar*/}
                        <a href="#top"> </a>
                        <AnchorLink
                            className="navbar-item is-tab"
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#about"
                        >
                            <span className={headerStyles.icon__about}>
                                <FontAwesomeIcon icon={faInfo} />
                            </span>
                            <span>About</span>
                        </AnchorLink>
                        <AnchorLink
                            className="navbar-item is-tab"
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#skills"
                        >
                            <span className={headerStyles.icon__skills}>
                                <FontAwesomeIcon icon={faChartBar} />
                            </span>
                            <span>Skills</span>
                        </AnchorLink>
                        <AnchorLink
                            className="navbar-item is-tab"
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#projects"
                        >
                            <span className={headerStyles.icon__projects}>
                                <FontAwesomeIcon icon={faList} />
                            </span>
                            <span>Projects</span>
                        </AnchorLink>
                        <AnchorLink
                            className="navbar-item is-tab"
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#contacts"
                        >
                            <span className={headerStyles.icon__contacts}>
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <span>Contacts</span>
                        </AnchorLink>
                        <AnchorLink
                            className="navbar-item is-tab"
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#"
                        >
                            <span className={headerStyles.icon__resume}>
                                <FontAwesomeIcon icon={faFile} />
                            </span>
                            <span>Resume</span>
                        </AnchorLink>
                    </Scrollspy>
                </div>
            </nav>
        </header>
    );
};

export default Header;
