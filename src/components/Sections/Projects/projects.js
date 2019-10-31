import React, { Component } from 'react';
import projectStyles from './projects.module.scss';
import Img from 'gatsby-image';

class Projects extends Component {
    // componentDidMount() {
    //     const titleConfig = {
    //         ...this.props.defaultSR,
    //         delay: 600,
    //         origin: 'bottom',
    //     };

    //     const projectConfig = {
    //         ...this.props.defaultSR,
    //         delay: 1000,
    //         origin: 'left',
    //     };

    //     import('../../../scrollReveal').then(module => {
    //         // Title SR
    //         module.default.reveal(this.refs.title, titleConfig);

    //         // Project card SR
    //         for (const refProp of Object.keys(this.refs)) {
    //             if (refProp.includes('project')) {
    //                 module.default.reveal(this.refs[refProp], projectConfig);
    //             }
    //         }
    //     });
    // }

    render() {
        return (
            <section
                className={['section', projectStyles.projects__page].join(' ')}
                id="projects"
            >
                <div className="container">
                    <h3
                        className={['title', projectStyles.title].join(' ')}
                        ref="title"
                    >
                        Projects
                    </h3>
                    <div className="columns">
                        <div className="column">
                            <div
                                className={['card', projectStyles.card].join(
                                    ' '
                                )}
                                ref="project1"
                            >
                                <header className="card-header">
                                    <p className="card-header-title">
                                        Coming soon...
                                    </p>
                                </header>
                                <div className="card-content">
                                    <Img
                                        fluid={
                                            this.props.data[0].childImageSharp
                                                .fluid
                                        }
                                    />
                                    <div className="content">
                                        -- project description --
                                    </div>
                                    <span className="tag">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">Javascript</span>
                                </div>
                                <footer className="card-footer">
                                    <a href="/" className="card-footer-item">
                                        Live Demo
                                    </a>
                                    <a href="/" className="card-footer-item">
                                        Source Code
                                    </a>
                                </footer>
                            </div>
                            <div
                                className={['card', projectStyles.card].join(
                                    ' '
                                )}
                                ref="project2"
                            >
                                <header className="card-header">
                                    <p className="card-header-title">
                                        Coming soon...
                                    </p>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        <Img
                                            fluid={
                                                this.props.data[0]
                                                    .childImageSharp.fluid
                                            }
                                        />
                                        -- project description --
                                    </div>
                                    <span className="tag">Node.js</span>
                                    <span className="tag">Express</span>
                                    <span className="tag">MongoDB</span>
                                </div>
                                <footer className="card-footer">
                                    <a href="/" className="card-footer-item">
                                        Live Demo
                                    </a>
                                    <a href="/" className="card-footer-item">
                                        Source Code
                                    </a>
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <div
                                className={['card', projectStyles.card].join(
                                    ' '
                                )}
                                ref="project3"
                            >
                                <header className="card-header">
                                    <p className="card-header-title">
                                        Coming soon...
                                    </p>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        <Img
                                            fluid={
                                                this.props.data[0]
                                                    .childImageSharp.fluid
                                            }
                                        />
                                        -- project description --
                                    </div>
                                    <span className="tag">React</span>
                                    <span className="tag">Gatsby</span>
                                    <span className="tag">GraphQL</span>
                                </div>
                                <footer className="card-footer">
                                    <a href="/" className="card-footer-item">
                                        Live Demo
                                    </a>
                                    <a href="/" className="card-footer-item">
                                        Source Code
                                    </a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
