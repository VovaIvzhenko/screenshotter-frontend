import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/Header/Header.jsx'
import { Switch, Route } from "react-router-dom";

import routes from "../routes.js";

const switchRoutes = (
	<Switch>
		{routes.map((prop, key) => {
			if (prop.layout === "default") {
				return (
					<Route
						path={prop.route}
						component={prop.component}
						key={key}
					/>
				)
			}
		})}
	</Switch>
);

const styles = theme => ({
	root: {
		display: 'flex',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		})
	},
});

class PersistentDrawerLeft extends React.Component {
	state = {
		open: false,
	};

	handleDrawerOpen = (value) => {
		this.setState({ open: value });
	};

	render() {
		const { classes } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline/>
				<Header handleDrawerOpen={this.handleDrawerOpen}/>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					{switchRoutes}
				</main>
			</div>
		);
	}
}

PersistentDrawerLeft.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersistentDrawerLeft);