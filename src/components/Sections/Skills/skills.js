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

	filterItems = () => {
		// 1. Create an array of skill item divs
		let skillItems = this.props.data.map((node, i) => (
			<div
				className={['box', skillsStyles.skill_item].join(' ')}
				ref={`skillItem${i}`}
				key={i}
			>
				<div className={[skillsStyles.img_container].join(' ')}>
					<Img fluid={node.childImageSharp.fluid} />
				</div>
				<p className="has-text-weight-semibold is-size-5">
					{node.name === 'Node' ? `${node.name}.js` : node.name}
				</p>
			</div>
		));

		// 2. Filter each skill item into their respective category

		// -- Arrays to store filtered items.
		let filteredFrontEnd = [],
			filteredBackEnd = [],
			filteredDatabase = [],
			filteredBuildTool = [];

		// -- Arrays storing order of each items list.
		let frontEndOrder = [
				'HTML5',
				'CSS',
				'Sass',
				'Javascript',
				'React',
				'Gatsby',
				'GraphQL',
			],
			backEndOrder = ['Node.js', 'Express'],
			databaseOrder = ['MongoDB', 'PostgreSQL'],
			buildToolOrder = ['Webpack', 'Babel', 'npm', 'Github'];

		// -- Front-end filtering
		for (let i = 0; i < frontEndOrder.length; i++) {
			for (let j = 0; j < skillItems.length; j++) {
				if (
					skillItems[j].props.children[1].props.children ===
					frontEndOrder[i]
				) {
					filteredFrontEnd.push(skillItems[j]);
				}
			}
		}

		// -- Back-end filtering
		for (let i = 0; i < backEndOrder.length; i++) {
			for (let j = 0; j < skillItems.length; j++) {
				if (
					skillItems[j].props.children[1].props.children ===
					backEndOrder[i]
				) {
					filteredBackEnd.push(skillItems[j]);
				}
			}
		}

		// -- Database filtering
		for (let i = 0; i < databaseOrder.length; i++) {
			for (let j = 0; j < skillItems.length; j++) {
				if (
					skillItems[j].props.children[1].props.children ===
					databaseOrder[i]
				) {
					filteredDatabase.push(skillItems[j]);
				}
			}
		}

		// -- Build-Tool filtering
		for (let i = 0; i < buildToolOrder.length; i++) {
			for (let j = 0; j < skillItems.length; j++) {
				if (
					skillItems[j].props.children[1].props.children ===
					buildToolOrder[i]
				) {
					filteredBuildTool.push(skillItems[j]);
				}
			}
		}

		return {
			frontEnd: filteredFrontEnd,
			backEnd: filteredBackEnd,
			databases: filteredDatabase,
			buildTools: filteredBuildTool,
		};
	};

	render() {
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
							{this.filterItems().frontEnd}
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
							{this.filterItems().backEnd}
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
							{this.filterItems().databases}
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
							{this.filterItems().buildTools}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
