import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import logo from '../assets/logo.png'
import useStyles from '../css/styles'
import MenuIcon from '@material-ui/icons/Menu'
import GoogleAuth from './auth/GoogleAuth'



const Header = ({ screenSize }) => {

    const classes = useStyles()

    const renderHeader = () => {
        if(screenSize.height < 800) {
            return (
                <div className={classes.root}>
                    <AppBar style={{padding: '.7rem 0'}} position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon fontSize="large" />
                            </IconButton>
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <div className="text-center auth" style={{ marginLeft: 'auto' }}>
                                <Button style={{color: 'white', fontFamily: "inherit", fontSize: 'inherit'}} variant="text"><Link to="/food-planner">Create Account</Link></Button>
                                <GoogleAuth />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        } else {
            return (
                <div className={classes.root}>
                    <AppBar style={{padding: '.7rem'}} position="static">
                        <Toolbar variant="dense">
                            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <Typography variant="h4" color="inherit">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                                {/* Food Planner */}
                            </Typography>
                            <div className="text-center auth" style={{ marginLeft: 'auto' }}>
                                <Button style={{color: 'white', fontFamily: "'Quattrocento Sans', sans-serif", fontSize: '1.2rem'}} variant="text">
                                    <Link to="/food-planner">Create Account</Link>
                                </Button>
                                <GoogleAuth />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        }
    }
    
    return renderHeader()
}

const mapStateToProps = (state) => {
    return state.screenSize
}

export default connect(mapStateToProps)(Header)