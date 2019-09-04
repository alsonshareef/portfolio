import React from 'react';
import bannerStyles from './banner.module.scss';

const Banner = () => {
    return (
        <div className={bannerStyles.banner}>
            <div className={bannerStyles.container}>
                <h1 className={bannerStyles.bannerHeading}>
                    <p>
                        Hi, my name is <span>Alson Shareef</span>
                    </p>
                    <p className={bannerStyles.text}>
                        I'm a Fullstack Web Developer with a passion for the
                        JavaScript ecosystem.
                    </p>
                </h1>
            </div>
        </div>
    );
};

export default Banner;
