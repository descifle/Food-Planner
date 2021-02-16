import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import '../css/main.scss'
import Footer from './Footer'
import Header from './Header'
import Landing from './Landing'

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
            <Header />
            <main>
            <Landing />
            </main>
            <Footer />
        </ThemeProvider>
    )
}
export default App