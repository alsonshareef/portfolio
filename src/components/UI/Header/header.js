import React from 'react';
import headerStyles from './header.module.scss';

import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
    <header>
        <nav className={headerStyles.navbar}>
            <ul className={headerStyles.navbarItems}>
                <li>
                    <AnchorLink offset={() => 900} href="#top">
                        Home
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink offset={() => 50} href="#about">
                        About
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink offset={() => 50} href="#projects">
                        Projects
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink offset={() => 50} href="#skills">
                        Skills
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink offset={() => 50} href="#contacts">
                        Contacts
                    </AnchorLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
