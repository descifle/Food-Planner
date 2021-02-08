import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core'
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
        }
    }
})

const App = () => {
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