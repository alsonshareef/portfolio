import React, { Component } from 'react';
import skillsStyles from './skills.module.scss';

class Skills extends Component {
    render() {
        return (
            <section
                className={['section', skillsStyles.skills__page].join(' ')}
                id="skills"
            >
                <h3 className={['title', skillsStyles.title].join(' ')}>
                    Skills
                </h3>
                <div className="container">
                    <div className="box">
                        <h4
                            className={[
                                'subtitle is-4',
                                skillsStyles.subtitle,
                            ].join(' ')}
                        >
                            Front-End
                        </h4>
                        <div className="level">
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
                    </div>
                    <div className="box">
                        <h4
                            className={[
                                'subtitle is-4',
                                skillsStyles.subtitle,
                            ].join(' ')}
                        >
                            Back-End
                        </h4>
                        <div className="level">
                            <div className="level-item">
                                <p>Node.js</p>
                            </div>
                            <div className="level-item">
                                <p>Express</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h4
                            className={[
                                'subtitle is-4',
                                skillsStyles.subtitle,
                            ].join(' ')}
                        >
                            Databases / Tooling
                        </h4>
                        <div className="level">
                            <div className="level-item">
                                <p>MongoDB</p>
                            </div>
                            <div className="level-item">
                                <p>Postgres</p>
                            </div>
                            <div className="level-item">
                                <p>GraphQL</p>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h4
                            className={[
                                'subtitle is-4',
                                skillsStyles.subtitle,
                            ].join(' ')}
                        >
                            Build-Tools
                        </h4>
                        <div className="level">
                            <div className="level-item">
                                <p>Webpack</p>
                            </div>
                            <div className="level-item">
                                <p>Babel</p>
                            </div>
                            <div className="level-item">
                                <p>npm</p>
                            </div>
                            <div className="level-item">
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
