import React from 'react'
import { Container, List, ListItem, ListItemText, Typography, FormControl, TextField, Button } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'

const AccountManage = () => {

    const [user, setUser] = React.useState({username:'user', id: 'unknown'})
    const [currentPassword, setCurrentPassword] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')


    React.useEffect(() => {
        if(localStorage.getItem('malfease') !== null || undefined) {
            setUser({
                id: localStorage.getItem('malfease'),
                username:  localStorage.getItem('malfease1')
            })
        }
    }, [])

    console.log(user)

    const updatePassword = (e) => {
        e.preventDefault()
        if(currentPassword.length > 3) {
            console.log('current is 3')
        } else {
            return
        }

        if(password.length > 3) {
            console.log('pass is 3')
        } else {
            return
        }

        if(confirmPassword.length > 3) {
            console.log('confirm is 3')
        } else {
            return
        }
    }

    const renderAccount = () => {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <List>
                    <ListItem aria-label="user information">
                        <ListItemText>
                            <Typography variant="h4">
                            Manage <Typography color="primary" variant="inherit">{user.username}'s</Typography> account
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem aria-label="user information">
                        <ListItemText>
                            update daily calories goal.
                        </ListItemText>
                    </ListItem>
                    </List>
                    <List>
                    <ListItem aria-label="update user information">
                        <ListItemText>
                            change password
                        </ListItemText>
                    </ListItem>
                        <form onSubmit={updatePassword}>
                            <TextField
                                label="current password"
                                type="password"
                                variant="filled"
                                helperText={'new password'}
                                value={currentPassword}
                                onChange={(e) => {setCurrentPassword(e.target.value)}}
                                required
                                />
                            <TextField 
                                label="new password"
                                type="password"
                                variant="outlined"
                                helperText={'new password'}
                                value={password}
                                onChange={(e) => {setpassword(e.target.value)}}
                                required
                                />
                                <TextField  
                                label="confirm password"
                                type="password"
                                variant="outlined"
                                helperText={'confirm new password'}
                                value={confirmPassword}
                                onChange={(e) => {setConfirmPassword(e.target.value)}}
                                required
                                />
                                <Button type="submit" variant="contained">change password</Button>
                        </form>
                    <ListItem aria-label="remove user information">
                        <ListItemText>
                            Delete user information
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