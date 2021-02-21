import { createMuiTheme, ThemeProvider } from '@material-ui/core'
// import { useTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getScreenSize } from '../actions/index'
import { connect } from 'react-redux'
import '../css/main.scss'
import Footer from './Footer'
import Header from './Header'
import Landing from './Landing'
import FoodPlanner from './FoodPlanner'
import AccountManage from './AccountManage'

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
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "3.25rem",
            fontWeight: 400,
            letterSpacing: "-0.00833em",
            lineHeight: 1.2
        }
    }
})



const App = ({ getScreenSize, screenSize }) => {

    const getWindowSize = () => {
        const { innerWidth: width, innerHeight: height } = window
        return { width, height }
    }

    useEffect(() => {
        const handleResize = () => getScreenSize(getWindowSize())

        getScreenSize(getWindowSize())

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [getScreenSize])

    // console.log(theme)
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route name="landing" path="/" exact component={Landing} />
                        <Route name="food-planner" path="/food-planner" component={FoodPlanner} />
                        <Route name="manage-account" path="/manage-account" component={AccountManage} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => {
    return {
        screenSize: state.screenSize
    }
}

export default connect(mapStateToProps, { getScreenSize })(App)