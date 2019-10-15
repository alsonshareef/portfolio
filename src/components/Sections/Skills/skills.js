import React, { Component } from 'react';
import skillsStyles from './skills.module.scss';

import reactLogo from '../../../images/react.svg';
import nodeLogo from '../../../images/nodejs.png';
import babelLogo from '../../../images/babel.svg';
import npmLogo from '../../../images/npm.svg';
import htmlLogo from '../../../images/html5.svg';
import webpackLogo from '../../../images/webpack.png';
import gatsbyLogo from '../../../images/gatsby.svg';
import cssLogo from '../../../images/css.svg';

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
                                <img src={htmlLogo} alt="html logo" />
                                <p>HTML5</p>
                            </div>
                            <div className="level-item">
                                <img src={cssLogo} alt="html logo" />
                                <p>CSS3</p>
                            </div>
                            <div className="level-item">
                                <p>JavaScript</p>
                            </div>
                            <div className="level-item">
                                <img src={reactLogo} alt="react logo" />
                                <p>React</p>
                            </div>
                            <div className="level-item">
                                <img src={gatsbyLogo} alt="gatsby logo" />
                                <p>Gatsby</p>
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
                                <img src={nodeLogo} alt="node logo" />
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
                                <img src={webpackLogo} alt="webpack logo" />
                                <p>Webpack</p>
                            </div>
                            <div className="level-item">
                                <img src={babelLogo} alt="babel logo" />
                                <p>Babel</p>
                            </div>
                            <div className="level-item">
                                <img src={npmLogo} alt="npm logo" />
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
