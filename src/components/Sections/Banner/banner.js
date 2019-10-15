import React, { Component } from 'react';
import bannerStyles from './banner.module.scss';

class Banner extends Component {
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
                            data-sal="slide-up"
                            data-sal-duration="1200"
                            data-sal-easing="ease-out"
                        >
                            Hi, my name is{' '}
                            <span className={bannerStyles.headingMain__name}>
                                Alson Shareef
                            </span>
                        </h1>
                        <h2
                            className="subtitle is-size-5-mobile is-size-4-tablet is-size-3-desktop"
                            data-sal="slide-up"
                            data-sal-duration="1200"
                            data-sal-delay="1000"
                            data-sal-easing="ease-out"
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
