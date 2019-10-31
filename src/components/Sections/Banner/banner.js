import React, { Component } from 'react';
import bannerStyles from './banner.module.scss';

class Banner extends Component {
    componentDidMount = () => {
        const titleConfig = {
            ...this.props.defaultSR,
            reset: true,
            delay: 500,
            origin: window.innerWidth > 768 ? 'left' : 'bottom',
        };

        const subtitleConfig = {
            ...this.props.defaultSR,
            reset: true,
            delay: 1200,
            origin: window.innerWidth > 768 ? 'left' : 'bottom',
        };

        import('../../../scrollReveal').then(module => {
            module.default.reveal(this.refs.title, titleConfig);
            module.default.reveal(this.refs.subtitle, subtitleConfig);
        });
    };

    render() {
        return (
            <section
                id="banner"
                className={['hero', 'is-fullheight', bannerStyles.banner].join(
                    ' '
                )}
            >
                <div className={'hero-body'}>
                    <div className="container ">
                        <h1
                            className="title has-text-centered-mobile is-size-1-desktop is-size-2-tablet is-size-3-mobile"
                            ref="title"
                        >
                            Hi, my name is{' '}
                            <span className={bannerStyles.headingMain_name}>
                                Alson Shareef
                            </span>
                        </h1>
                        <h2
                            className="subtitle has-text-centered-mobile is-size-3-desktop is-size-4-tablet is-size-5-mobile"
                            ref="subtitle"
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
