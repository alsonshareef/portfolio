import React from 'react';
import bannerStyles from './banner.module.scss';

const Banner = () => {
    return (
        <div className={bannerStyles.banner}>
            <div>
                <h1 className={bannerStyles.bannerTitle}>
                    Hi, my name is <span>Alson Shareef</span>
                </h1>
                <h2 className={bannerStyles.bannerSubTitle}>
                    I'm a Fullstack Web Developer with a passion for the
                    JavaScript ecosystem.
                </h2>
            </div>
        </div>
    );
};

export default Banner;
