import React from 'react';
import layoutStyles from './layout.module.scss';

import Header from '../Header/header';
import Footer from '../Footer/footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
