import { Container } from '@material-ui/core'
import React from 'react'
import '../css/main.scss'
import Header from './Header'
import Landing from './Landing'

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Landing />
            <Container>
                yeeted
           </Container>
        </React.Fragment>  
    )
}
export default App