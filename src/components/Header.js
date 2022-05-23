import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import logo from '../assets/logo.png'
import useStyles from '../css/styles'
// import GoogleAuth from './auth/GoogleAuth'



const Header = ({ screenSize, auth }) => {

    const classes = useStyles()

    const renderAuth = () => {
        if(auth?.username) {
            return (
                <React.Fragment>
                    {window.location.pathname !== '/food-planner' ? 
                    <Link to="/food-planner"><Button style={{ textTransform: "initial", fontFamily: "inherit", fontSize: 'inherit'}} variant="contained">My Foods</Button></Link> :
                    null
                    }
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                        <Button style={{color: 'white', fontFamily: "inherit", fontSize: 'inherit'}} variant="text"><Link to="/create-account">Create Account</Link></Button>
                        <Link to="/login">
                            <Button color="inherit" variant="outlined" style={{fontFamily: "inherit", fontSize: 'inherit'}} >
                            Sign In
                            </Button>
                        </Link>
                        
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
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <div className="text-center auth" style={{ marginLeft: 'auto' }}>
                            {/* render authorized user */}
                            {renderAuth()}
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
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <Typography variant="h4" color="inherit">
                               <Link style={{ fontFamily: '', marginLeft: '.5rem' }} to="/"> Food Planner</Link>
                            </Typography>
                            <div className="text-center auth" style={{ marginLeft: 'auto' }}>
                                {/* render authorized user */}
                                {renderAuth()}
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
    return {
        screenSize: state.screenSize,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header)