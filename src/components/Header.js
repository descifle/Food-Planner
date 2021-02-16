import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import useStyles from '../css/styles'
import MenuIcon from '@material-ui/icons/Menu'
import GoogleAuth from './auth/GoogleAuth'



const Header = () => {

    const classes = useStyles();
    // console.log(props)
    return (
        <div className={classes.root}>
            <AppBar style={{padding: '.7rem'}} position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" color="inherit">
                        Food Planner
                    </Typography>
                    <div className="justify-center auth" style={{ marginLeft: 'auto' }}>
                        <Button style={{color: 'white', fontFamily: "'Quattrocento Sans', sans-serif", marginRight: '1rem', fontSize: '1.2rem'}} variant="text">Create Account</Button>
                        <GoogleAuth />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header