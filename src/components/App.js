import { createMuiTheme, ThemeProvider } from '@material-ui/core'
// import { useTheme } from '@material-ui/core/styles'
import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getScreenSize } from '../actions/index'
import { connect } from 'react-redux'
import '../css/main.scss'
import Landing from './Landing'
import FoodPlanner from './FoodPlanner'
import AccountManage from './AccountManage'
import CreateAccount from '../components/auth/CreateAccount'
import SignIn from './auth/Login'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#114B5F',
            light: '#000000',
            dark: '#eeeeee'
        },
        secondary: {
            main: '#1A936F'
        }
    },
    typography: {
        h2: {
            fontFamily: "font-family: 'Ovo', serif; ",
            fontSize: "3.25rem",
            fontWeight: 'bold',
            letterSpacing: "-0.00833em",
            lineHeight: 1.2
        }
    }
})



const App = ({ getScreenSize }) => {

    const getWindowSize = () => {
        const { innerWidth: width, innerHeight: height } = window
        return { width, height }
    }

    useEffect(() => {
        // REMOVE THIS WHEN GOING PRODUCTION RESIZING IS CLAPPING RESOURCES
        const handleResize = () => getScreenSize(getWindowSize())

        getScreenSize(getWindowSize())

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [getScreenSize])

    // console.log(theme)
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <main>
                    <Route name="landing" path="/" exact component={Landing} />
                    <Route name="food-planner" path="/food-planner" component={FoodPlanner} />
                    <Route name="manage-account" path="/manage-account" component={AccountManage} />
                    <Route name="create-account" path="/create-account" component={CreateAccount} />
                    <Route name="login" path="/login" component={SignIn} />
                </main>
            </Routes>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => {
    return {
        screenSize: state.screenSize
    }
}

export default connect(mapStateToProps, { getScreenSize })(App)