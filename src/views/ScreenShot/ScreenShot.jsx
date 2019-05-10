import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import style from './ScreenShot.module.css'

class ScreenShot extends React.Component{
	render() {
		return (
			<div className={style.root}>
				<Grid container spacing={16}>
					<Grid item xs={12}>
						<Paper className={style.paper}>xs=12</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={style.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={style.paper}>xs=6</Paper>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default ScreenShot