import React, { useState } from 'react';
import headerStyles from './header.module.scss';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
    IoIosHome,
    IoMdInformationCircle,
    IoIosDocument,
    IoIosListBox,
    IoIosStats,
    IoMdCall,
} from 'react-icons/io';

const Header = () => {
    // Tracks active state of navbar-burger button
    const [active, toggleActive] = useState(false);

    return (
        <header>
            <nav
                className={[
                    'navbar',
                    'is-fixed-top',
                    headerStyles.navbar__custom,
                ].join(' ')}
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
                        className={
                            active ? 'navbar-burger is-active' : 'navbar-burger'
                        }
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
                            <span className="icon">
                                <IoIosHome />
                            </span>
                            <span>Home</span>
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item "
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#about"
                        >
                            <span className="icon">
                                <IoMdInformationCircle />
                            </span>
                            <span>About</span>
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item "
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#projects"
                        >
                            <span className="icon">
                                <IoIosListBox />
                            </span>
                            <span>Projects</span>
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item "
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#skills"
                        >
                            <span className="icon">
                                <IoIosStats />
                            </span>
                            <span>Skills</span>
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item "
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#contacts"
                        >
                            <span className="icon">
                                <IoMdCall />
                            </span>
                            <span>Contacts</span>
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item "
                            onClick={() => toggleActive(false)}
                            offset={() => 50}
                            href="#"
                        >
                            <span className="icon">
                                <IoIosDocument />
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
