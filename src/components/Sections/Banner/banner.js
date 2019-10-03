import React, { Component } from 'react';
import bannerStyles from './banner.module.scss';

import sr from '../../../scrollReveal';

class Banner extends Component {
    // Applies scroll reveal functionality to heading after mounting.
    componentDidMount() {
        // Scroll reveal config for h1
        const h1Config = {
            ...this.props.srDefaultConfig,
            reset: true,
            delay: 500,
            origin: window.innerWidth > 768 ? 'left' : 'bottom',
        };

        sr.reveal(this.refs.bannerh1, h1Config);

        // Scroll reveal config for h2
        const h2config = {
            ...this.props.srDefaultConfig,
            reset: true,
            delay: 1400,
            origin: window.innerWidth > 768 ? 'left' : 'bottom',
        };

        sr.reveal(this.refs.bannerh2, h2config);
    }

    render() {
        return (
            <section
                id="banner"
                className={['hero', 'is-fullheight', bannerStyles.banner].join(
                    ' '
                )}
            >
                <div className={'hero-body'}>
                    <div className="container has-text-centered-mobile">
                        <h1
                            className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop"
                            ref="bannerh1"
                        >
                            Hi, my name is{' '}
                            <span className={bannerStyles.headingMain__name}>
                                Alson Shareef
                            </span>
                        </h1>

                        <h2
                            className="subtitle is-size-5-mobile is-size-4-tablet is-size-3-desktop"
                            ref="bannerh2"
                        >
                            I enjoy problem-solving and building meaningful
                            solutions for the web.
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
