import React from 'react'
import { Container, List, ListItem, ListItemText } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'

const AccountManage = () => {

    const renderAccount = () => {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <List>
                    <ListItem aria-label="user information">
                        <ListItemText>
                        user info
                        </ListItemText>
                    </ListItem>
                    <ListItem aria-label="user information">
                        <ListItemText>
                            arbitrary info
                        </ListItemText>
                    </ListItem>
                    </List>
                    <List>
                    <ListItem aria-label="update user information">
                        <ListItemText>
                            update info || password || username || email if allowed
                        </ListItemText>
                    </ListItem>
                    <ListItem aria-label="remove user information">
                        <ListItemText>
                            delete account
                        </ListItemText>
                    </ListItem>
                    </List>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }

    return renderAccount()
}

export default AccountManage