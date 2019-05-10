import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

// @material-ui/core components
import {withStyles} from "@material-ui/core/styles/index";
import Drawer from '@material-ui/core/Drawer';
// List components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
// Expansion components
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import style from './Sidebar.module.css'
import classNames from "classnames";

const drawerWidth = 300;

const styles = {
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		marginTop: '64px',
	},
	expansionList: {
		minWidth: drawerWidth,
	},
	navLink: {
		textDecoration: 'none'
	},
	active: {
		background: 'black'
	}
};

const ExpansionPanel = withStyles({
	root: {
		border: '1px solid rgba(0,0,0,.125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
	},
	expanded: {
		margin: 'auto',
	},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0,0,0,.03)',
		borderBottom: '1px solid rgba(0,0,0,.125)',
		marginBottom: -1,
		minHeight: 40,
		'&$expanded': {
			minHeight: 40,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
	root: {
		padding: '0px',
	},
}))(MuiExpansionPanelDetails);

class LeftSidebar extends React.Component {
	state = {
		expanded: [],
		project: ''
	}

	handleChange = event => {
		this.setState({ project: event.target.value });
	};

	render() {
		const { classes, leftSidebarOpened, routes } = this.props;

		let expansionPanel = (
			<div>
				{routes.map((item, key) => {
					return (
						<ExpansionPanel
							key={key}
							onClick={() => { item.expanded = !item.expanded }}
						>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography>{item.name}</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<List component="nav">
									{item.children.map((prop, index) => (
										<NavLink
											to={item.baseRoute + prop.route}
											activeClassName={style.active}
											key={index}
											className={classes.navLink}
										>
											<ListItem
												className={classNames(classes.expansionList, style.expansionActive)}
												button
											>
												<ListItemText primary={prop.text} />
											</ListItem>
										</NavLink>
									))}
								</List>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					)
				})}
			</div>
		);

		let props = {
			sites: [
				{ domain: 'https://google.com', value: 20 }
			]
		}

		let productSwitcher = (
			<FormControl>
				<Select
					value={this.state.project}
					onChange={this.handleChange}
				>
					{props.sites.map((item, key) => {
						return (
							<MenuItem value={item.value} key={key}>{ item.domain }</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		)

		return (
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={leftSidebarOpened}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				{ productSwitcher }
				{ expansionPanel }
			</Drawer>
		)
	}
}

LeftSidebar.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(LeftSidebar);
