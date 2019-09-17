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
        <div id="banner" className={bannerStyles.banner}>
            <div className={bannerStyles.container}>
                <h1 className={bannerStyles.bannerHeading}>
                    <animated.span
                        className={bannerStyles.headingMain}
                        style={fadeInLeft(0)}
                    >
                        Hi, my name is <span>Alson Shareef</span>
                    </animated.span>

                    <animated.span
                        className={bannerStyles.headingText}
                        style={fadeInLeft(2000)}
                    >
                        I'm a Fullstack Web Developer with a passion for the
                        JavaScript ecosystem.
                    </animated.span>
                </h1>
            </div>
        </div>
    );
};

export default Banner;
