import React from 'react'
import { Container, List, ListItem, ListItemText, Typography, TextField, Button } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

const AccountManage = () => {

    const [user, setUser] = React.useState({username:'user', id: 'unknown'})
    const [calories, setCalories] = React.useState(0)
    const [changedCalories, setChangedCalories] = React.useState(0)
    const [currentPassword, setCurrentPassword] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    React.useEffect(() => {
        if(localStorage.getItem('malfease') === null || localStorage.getItem('malfease1') === null) {
            window.location.pathname = '/'
        }
    })

    React.useEffect(() => {
        if(localStorage.getItem('malfease') !== null || undefined) {

            const id = localStorage.getItem('malfease')
            const username =  localStorage.getItem('malfease1')

            setUser({
                id,
                username
            })
            
            const getData = () => {
                axios.get('http://localhost:3001/user/getcalories', {
                params: {
                    mxdata: id,
                    username: username,
                    id: id
                },
                withCredentials: true
                }).then(res => {
                    if(res.status === 200 && res.data.calories !== null) {
                        setCalories(res.data.calories) 
                    } else {
                        return
                    }
                })
            }

            getData()
            
        }
    }, [])

    const updateCalories = (e) => {
        e.preventDefault()

        if(calories !== changedCalories) {
            axios.patch('http://localhost:3001/user/updatecalories', {
            calories: changedCalories,
            ...user
            })
            setChangedCalories('new')
        }
    }

    const updatePassword = (e) => {
        e.preventDefault()
        // if(currentPassword.length > 3) {
        //     console.log('current is 3')
        // } else {
        //     return
        // }

        // if(password.length > 3) {
        //     console.log('pass is 3')
        // } else {
        //     return
        // }

        // if(confirmPassword.length > 3) {
        //     console.log('confirm is 3')
        // } else {
        //     return
        // }

       if(confirmPassword === password) {
        axios.patch('http://localhost:3001/user/updatepassword', {
            newPassword: confirmPassword,
            password: currentPassword,
            ...user
        })
        setpassword('')
        setCurrentPassword('')
        setConfirmPassword('')
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
                    <form onSubmit={updateCalories} >
                            <TextField
                                label="daily calories"
                                type="number"
                                variant="standard"
                                helperText={'new password'}
                                value={changedCalories === 0 ? calories : changedCalories}
                                onChange={(e) => {setChangedCalories(e.target.value)}}
                                />
                            <Button type="submit" variant="contained">update calories</Button>
                        </form>
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