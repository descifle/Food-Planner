import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import '../css/main.scss'
import Header from './Header'
import Landing from './Landing'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#dddddd',
            light: '#000000',
            dark: '#eeeeee'
        },
        secondary: {
            main: '#000000'
        }
    }
})

const App = () => {

    const myTheme = useTheme()

    console.log(myTheme)
    return (
        <ThemeProvider theme={theme}>
             <Header />
            <Landing />
            <Container>
                yeeted
           </Container>
        </ThemeProvider>
    )
}
export default App