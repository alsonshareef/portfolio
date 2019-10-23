import React from 'react';
import projectStyles from './projects.module.scss';
import Img from 'gatsby-image';

const Projects = ({ data }) => {
    // Array of gatsby image versions of project images queried from graphql
    const projectImgs = data.map(node => (
        <Img fluid={node.childImageSharp.fluid} />
    ));

    return (
        <section
            className={['section', projectStyles.projects__page].join(' ')}
            id="projects"
        >
            <div className="container">
                <h3 className={['title', projectStyles.title].join(' ')}>
                    Projects
                </h3>
                <div className="columns">
                    <div className="column">
                        <div className={['card', projectStyles.card].join(' ')}>
                            <header className="card-header">
                                <p className="card-header-title">Project 1</p>
                            </header>
                            <div className="card-content">
                                {projectImgs[0]}
                                <div className="content">
                                    This is the description for Project 1.
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
                        <div className={['card', projectStyles.card].join(' ')}>
                            <header className="card-header">
                                <p className="card-header-title">Project 3</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    {projectImgs[0]}
                                    This is the description for Project 3.
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
                        <div className={['card', projectStyles.card].join(' ')}>
                            <header className="card-header">
                                <p className="card-header-title">Project 2</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    {projectImgs[0]}
                                    This is the description for Project 2.
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
};

export default Projects;
