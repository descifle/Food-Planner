import React from 'react'
import { Container } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'

const AccountManage = () => {
    return (
        <React.Fragment>
            <Header />
            <Container>
                <div>
                    user info
                </div>
                <div>
                    arbitrary info
                </div>
                <div>
                    update info || password || username || email if allowed
                </div>
                <div>
                    delete account
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default AccountManage