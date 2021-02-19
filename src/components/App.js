import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
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

const App = () => {

    const myTheme = useTheme()

    console.log(myTheme)
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

export default App