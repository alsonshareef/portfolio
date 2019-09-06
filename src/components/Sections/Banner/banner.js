import React from 'react';
import bannerStyles from './banner.module.scss';

import { useSpring, animated } from 'react-spring';

const Banner = () => {
    const fadeInLeft = delay =>
        useSpring({
            config: {
                duration: 1250,
            },

            from: {
                opacity: 0,
                transform: 'translateX(-40px)',
            },

            opacity: 1,
            transform: 'translateX(0px)',
            delay: delay,
        });

    return (
        <div className={bannerStyles.banner}>
            <div className={bannerStyles.container}>
                <h1 className={bannerStyles.bannerHeading}>
                    <animated.p style={fadeInLeft(0)}>
                        Hi, my name is <span>Alson Shareef</span>
                    </animated.p>
                    <animated.p
                        className={bannerStyles.text}
                        style={fadeInLeft(2000)}
                    >
                        I'm a Fullstack Web Developer with a passion for the
                        JavaScript ecosystem.
                    </animated.p>
                </h1>
            </div>
        </div>
    );
};

export default Banner;
