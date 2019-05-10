import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


class Header extends React.Component {
	render() {
		return (
			<div>
				<AppBar position="fixed">
					<Toolbar disableGutters={true}>
						<IconButton>
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

export default Header;