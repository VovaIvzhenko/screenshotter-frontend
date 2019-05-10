import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import classNames from 'classnames';

const drawerWidth = 300;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		background: '#455a64',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
});

class Header extends React.Component {
	state = {
		open: false
	};

	render() {
		const { classes, leftSidebarOpened, handleDrawerOpen } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<AppBar
					position="fixed"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar disableGutters={true}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={() => {handleDrawerOpen(!leftSidebarOpened)}}
							className={classNames(classes.menuButton)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h4" color="inherit" noWrap>
							<PhotoCamera /> ScreenShotter
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);