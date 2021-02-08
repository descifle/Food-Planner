import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../css/styles'
import MenuIcon from '@material-ui/icons/Menu'
import GoogleAuth from './auth/GoogleAuth'



const Header = () => {

    const classes = useStyles();
    // console.log(props)
    return (
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" color="inherit">
                        Food Planner
                    </Typography>
                    <GoogleAuth />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header