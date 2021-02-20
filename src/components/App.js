import { createMuiTheme, ThemeProvider } from '@material-ui/core'
// import { useTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { getScreenSize } from '../actions/index'
import { connect } from 'react-redux'
import '../css/main.scss'
import Footer from './Footer'
import Header from './Header'
import Landing from './Landing'
import FoodPlanner from './FoodPlanner'

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
    }
})

const App = (props) => {

    // const myTheme = useTheme()
    console.log(props)

    console.log(theme)
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route name="landing" path="/" exact component={Landing} />
                        <Route name="food-planner" path="/food-planner" component={FoodPlanner} />
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