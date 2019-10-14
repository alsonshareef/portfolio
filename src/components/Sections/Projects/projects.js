import React from 'react';
import projectStyles from './projects.module.scss';

const Projects = () => {
    return (
        <section
            className={['section', projectStyles.projects__page].join(' ')}
            id="projects"
        >
            <div className="container">
                <h3 className="title">Projects</h3>
            </div>
        </section>
    );
};

export default Projects;
