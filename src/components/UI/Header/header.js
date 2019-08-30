import React from 'react';
import headerStyles from './header.module.scss';

const Header = () => (
    <header>
        <nav className={headerStyles.navbar}>
            <ul className={headerStyles.navbarList}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Skills</a>
                </li>
                <li>
                    <a href="/">Contacts</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
