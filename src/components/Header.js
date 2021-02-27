import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import logo from '../assets/logo.png'
import useStyles from '../css/styles'
import MenuIcon from '@material-ui/icons/Menu'
import GoogleAuth from './auth/GoogleAuth'



const Header = ({ screenSize, malfease }) => {

    const classes = useStyles()

    // create a popper for when sign in is clicked to have google sign in and regular sign in
    const renderAuth = () => {
        console.log(malfease)
        if(malfease.isNormalSignedIn === true || malfease.isSignedIn === true) {
            return (
                <React.Fragment>
                    <GoogleAuth />
                </React.Fragment>
            )
        } else if((malfease.isNormalSignedIn === true || malfease.isSignedIn === true) && screenSize.width < 800) {
            return (
                <React.Fragment>
                    <Button style={{color: 'white', fontFamily: "inherit", fontSize: 'inherit'}} variant="text"><Link to="/create-account">Create Account</Link></Button>
                    <GoogleAuth />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Button style={{color: 'white', fontFamily: "inherit", fontSize: 'inherit'}} variant="text"><Link to="/create-account">Create Account</Link></Button>
                    <GoogleAuth />
                </React.Fragment>
            )
        }
    }

    const renderHeader = () => {
        if(screenSize.width < 800) {
            return (
                // mobile view
                <div className={classes.root}>
                    <AppBar style={{padding: '.7rem 0'}} position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon fontSize="large" />
                            </IconButton>
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <div className="text-center auth" style={{ marginLeft: 'auto' }}>
                            {renderAuth()}
                                {/* {
                                    malfease.isNormalSignedIn === true || malfease.isNormalSignedIn === null ? null : <Button style={{color: 'white', fontFamily: "inherit", fontSize: 'inherit'}} variant="text"><Link to="/create-account">Create Account</Link></Button>
                                }
                                <GoogleAuth /> */}
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        } else {
            return (
                // desktop view
                <div className={classes.root}>
                    <AppBar style={{padding: '.7rem'}} position="static">
                        <Toolbar variant="dense">
                            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <Typography variant="h4" color="inherit">
                               <Link style={{ fontFamily: "'Quattrocento Sans', sans-serif", marginLeft: '.5rem' }} to="/"> Food Planner</Link>
                            </Typography>
                            
                            <div className="text-center auth" style={{ marginLeft: 'auto' }}>
                                {renderAuth()}
                                {/* {
                                    malfease.isNormalSignedIn === true || malfease.isNormalSignedIn === null ? null : <Button style={{color: 'white', fontFamily: "'Quattrocento Sans', sans-serif", fontSize: '1.2rem'}} variant="text">
                                    <Link to="/create-account">Create Account</Link>
                                </Button>
                                }
                                <GoogleAuth /> */}
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        }
    }
    console.log(malfease)
    
    return renderHeader()
}

const mapStateToProps = (state) => {
    return {
        screenSize: state.screenSize,
        malfease: state.auth
    }
}

export default connect(mapStateToProps)(Header)