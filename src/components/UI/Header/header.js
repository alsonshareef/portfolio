import React, { useState } from 'react';
import headerStyles from './header.module.scss';

import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    // Tracks active state of navbar-burger button.
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
                <div className="navbar-brand">
                    <AnchorLink
                        className="navbar-item is-size-4-touch is-size-3-desktop"
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

                <div
                    id="navMenu"
                    className={active ? 'navbar-menu is-active' : 'navbar-menu'}
                >
                    <div className="navbar-end is-size-6-touch is-size-5-desktop">
                        <AnchorLink
                            className="navbar-item is-tab is-hoverable"
                            offset={() => 900}
                            href="#top"
                        >
                            Home
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item is-tab"
                            offset={() => 50}
                            href="#about"
                        >
                            About
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item is-tab"
                            offset={() => 50}
                            href="#projects"
                        >
                            Projects
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item is-tab"
                            offset={() => 50}
                            href="#skills"
                        >
                            Skills
                        </AnchorLink>

                        <AnchorLink
                            className="navbar-item is-tab"
                            offset={() => 50}
                            href="#contacts"
                        >
                            Contacts
                        </AnchorLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
