import React, { Component } from 'react';
import skillsStyles from './skills.module.scss';

import Img from 'gatsby-image';

class Skills extends Component {
    skillItems = this.props.data.map(node => (
        <div className="level-item">
            <div className={[skillsStyles.img_container].join(' ')}>
                <Img fluid={node.childImageSharp.fluid} />
                <p>{node.name === 'Node' ? `${node.name}.js` : node.name}</p>
            </div>
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
                            {this.skillItems[10]}
                            {this.skillItems[8]}
                            {this.skillItems[5]}
                            {this.skillItems[3]}
                            {this.skillItems[12]}
                            {this.skillItems[9]}
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
                            {this.skillItems[14]}
                            {this.skillItems[0]}
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
                            {this.skillItems[4]}
                            {this.skillItems[7]}
                            {this.skillItems[2]}
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
                            {this.skillItems[6]}
                            {this.skillItems[13]}
                            {this.skillItems[11]}
                            {this.skillItems[1]}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
