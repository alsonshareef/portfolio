import React, { Component } from 'react';
import skillsStyles from './skills.module.scss';

class Skills extends Component {
    render() {
        return (
            <section
                className={['section', skillsStyles.skills__page].join(' ')}
                id="skills"
            >
                <div className="container">
                    <h3 className="title">Skills</h3>
                    <div className="level box">
                        <h4 className="subtitle">Front-End</h4>
                        <div className="level-item">
                            <p>HTML5</p>
                        </div>
                        <div className="level-item">
                            <p>CSS3</p>
                        </div>
                        <div className="level-item">
                            <p>JavaScript</p>
                        </div>
                        <div className="level-item">
                            <p>React</p>
                        </div>
                    </div>
                    <div className="level box">
                        <h4 className="subtitle">Back-End</h4>
                        <div className="level-item">
                            <p>Node.js</p>
                        </div>
                        <div className="level-item">
                            <p>Express</p>
                        </div>
                        <div className="level-item">
                            <p>MongoDB</p>
                        </div>
                        <div className="level-item">
                            <p>Postgres</p>
                        </div>
                    </div>
                    <div className="level box">
                        <h4 className="subtitle">Build-Tools</h4>
                        <div className="level-item">
                            <p>Webpack</p>
                        </div>
                        <div className="level-item">
                            <p>Babel</p>
                        </div>
                        <div className="level-item">
                            <p>Git</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
