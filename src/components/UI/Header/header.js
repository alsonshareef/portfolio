import React, { useState } from 'react';
import headerStyles from './header.module.scss';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
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
                    <div className="navbar-end is-size-6-touch is-size-5-desktop">
                        <AnchorLink
                            className="navbar-item "
                            onClick={() => toggleActive(false)}
                            offset={() => 900}
                            href="#top"
                        >
                            <span className={headerStyles.icon__home}>
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            <span>Home</span>
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item "
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
                            className="navbar-item "
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
                            className="navbar-item "
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
                            className="navbar-item "
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
                            className="navbar-item "
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#"
                        >
                            <span className={headerStyles.icon__resume}>
                                <FontAwesomeIcon icon={faFile} />
                            </span>
                            <span>Resume</span>
                        </AnchorLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
