import React, { Component } from 'react';
import skillsStyles from './skills.module.scss';

import Img from 'gatsby-image';

class Skills extends Component {
    // componentDidMount() {
    //     const titleConfig = {
    //         ...this.props.defaultSR,
    //         delay: 600,
    //         origin: 'bottom',
    //     };

    //     const subtitleConfig = {
    //         ...this.props.defaultSR,
    //         delay: 1000,
    //         origin: 'left',
    //     };

    //     const skillItemConfig = {
    //         ...this.props.defaultSR,
    //         delay: 1200,
    //         origin: 'bottom',
    //     };

    //     import('../../../scrollReveal').then(module => {
    //         // Title SR
    //         module.default.reveal(this.refs.title, titleConfig);

    //         // Subtitle SR
    //         for (const refProp of Object.keys(this.refs)) {
    //             if (refProp.includes('subtitle')) {
    //                 module.default.reveal(this.refs[refProp], subtitleConfig);
    //             }
    //         }

    //         // Skill item SR
    //         for (const refProp of Object.keys(this.refs)) {
    //             if (refProp.includes('skillItem')) {
    //                 module.default.reveal(this.refs[refProp], skillItemConfig);
    //             }
    //         }
    //     });
    // }

    render() {
        // Array of components holding html for each skill item using data from graphql query.
        let skillItems = this.props.data.map((node, i) => (
            <div
                className={['box', skillsStyles.skill_item].join(' ')}
                ref={`skillItem${i}`}
            >
                <div className={[skillsStyles.img_container].join(' ')}>
                    <Img fluid={node.childImageSharp.fluid} />
                </div>
                <p className="has-text-weight-semibold is-size-5">
                    {node.name === 'Node' ? `${node.name}.js` : node.name}
                </p>
            </div>
        ));

        return (
            <section
                className={['section', skillsStyles.skills__page].join(' ')}
                id="skills"
            >
                <h3
                    className={['title', skillsStyles.title].join(' ')}
                    ref="title"
                >
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
                                ref="subtitle1"
                            >
                                Front-End
                            </h4>
                            {skillItems[7]}
                            {skillItems[2]}
                            {skillItems[12]}
                            {skillItems[8]}
                            {skillItems[11]}
                            {skillItems[4]}
                        </div>
                        <div className="column">
                            <h4
                                className={[
                                    'subtitle is-4',
                                    skillsStyles.subtitle,
                                ].join(' ')}
                                ref="subtitle2"
                            >
                                Back-End
                            </h4>
                            {skillItems[10]}
                            {skillItems[3]}
                        </div>
                        <div className="column">
                            <h4
                                className={[
                                    'subtitle is-4',
                                    skillsStyles.subtitle,
                                ].join(' ')}
                                ref="subtitle3"
                            >
                                Databases / Tooling
                            </h4>
                            {skillItems[9]}
                            {skillItems[14]}
                            {skillItems[6]}
                        </div>
                        <div className="column">
                            <h4
                                className={[
                                    'subtitle is-4',
                                    skillsStyles.subtitle,
                                ].join(' ')}
                                ref="subtitle4"
                            >
                                Build-Tools
                            </h4>
                            {skillItems[1]}
                            {skillItems[0]}
                            {skillItems[13]}
                            {skillItems[5]}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
