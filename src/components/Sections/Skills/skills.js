import React, { Component } from 'react';
import skillsStyles from './skills.module.scss';

import Img from 'gatsby-image';

class Skills extends Component {
    // // Array of components holding html for each skill item using data from graphql query.
    skillItems = this.props.data.map(node => (
        <div className={['box', skillsStyles.skill_item].join(' ')}>
            <div className={[skillsStyles.img_container].join(' ')}>
                <Img fluid={node.childImageSharp.fluid} />
            </div>
            <p className="has-text-weight-semibold">
                {node.name === 'Node' ? `${node.name}.js` : node.name}
            </p>
        </div>
    ));

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
                    <div className="columns">
                        <div className="column">
                            <h4
                                className={[
                                    'subtitle is-4',
                                    skillsStyles.subtitle,
                                ].join(' ')}
                            >
                                Front-End
                            </h4>
                            {this.skillItems[7]}
                            {this.skillItems[2]}
                            {this.skillItems[12]}
                            {this.skillItems[8]}
                            {this.skillItems[11]}
                            {this.skillItems[4]}
                        </div>
                        <div className="column">
                            <h4
                                className={[
                                    'subtitle is-4',
                                    skillsStyles.subtitle,
                                ].join(' ')}
                            >
                                Back-End
                            </h4>
                            {this.skillItems[10]}
                            {this.skillItems[3]}
                        </div>
                        <div className="column">
                            <h4
                                className={[
                                    'subtitle is-4',
                                    skillsStyles.subtitle,
                                ].join(' ')}
                            >
                                Databases / Tooling
                            </h4>
                            {this.skillItems[9]}
                            {this.skillItems[14]}
                            {this.skillItems[6]}
                        </div>
                        <div className="column">
                            <h4
                                className={[
                                    'subtitle is-4',
                                    skillsStyles.subtitle,
                                ].join(' ')}
                            >
                                Build-Tools
                            </h4>
                            {this.skillItems[1]}
                            {this.skillItems[0]}
                            {this.skillItems[13]}
                            {this.skillItems[5]}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
