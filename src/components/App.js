import { createMuiTheme, ThemeProvider } from '@material-ui/core'
// import { useTheme } from '@material-ui/core/styles'
import { Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getScreenSize, getUserInfo } from '../actions/index'
import { connect } from 'react-redux'
import '../css/main.scss'
import Landing from './Landing'
import RequireAuth from './auth/RequireAuth'
import FoodPlanner from './FoodPlanner'
import AccountManage from './AccountManage'
import CreateAccount from '../components/auth/CreateAccount'
import SignIn from './auth/Login'
import { getUser, removeUser } from './auth/configureAuth'
import { client } from './client'

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
    },
    typography: {
        h2: {
            fontFamily: "font-family: 'Ovo', serif; ",
            fontSize: "3.25rem",
            fontWeight: 'bold',
            letterSpacing: "-0.00833em",
            lineHeight: 1.2
        }
    }
})



const App = ({ getUserInfo, auth, getScreenSize }) => {

    const getWindowSize = () => {
        const { innerWidth: width, innerHeight: height } = window
        return { width, height }
    }

    //const location = useLocation()

    useEffect(() => {
        const userAuthed = getUser("loggedIn")

        if (auth?.username === undefined  && !!userAuthed) {
            client.post("/auth/verify", { verify: userAuthed  }, { withCredentials: true })
                .then(res => {
                    if (res.status === 200) {
                        getUserInfo({ ...res.data })
                    }
                })
                .catch(err => {
                    removeUser("loggedIn")
                    getUserInfo({ declined: true })
                })
        }
    }, [auth?.username, getUserInfo])

    useEffect(() => {
        // REMOVE THIS WHEN GOING PRODUCTION RESIZING IS CLAPPING RESOURCES
        const handleResize = () => getScreenSize(getWindowSize())

        getScreenSize(getWindowSize())

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [getScreenSize])

    // console.log(theme)
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                    <Route name="landing" path="/" exact element={<Landing />} />
                    <Route element={<RequireAuth auth={ auth } />}>
                        <Route name="food-planner" path="/food-planner" element={<FoodPlanner />} />
                        <Route name="manage-account" path="/manage-account" element={<AccountManage auth={ auth } />} />
                    </Route>
                    <Route name="create-account" path="/create-account" element={<CreateAccount />} />
                    <Route name="login" path="/login" element={<SignIn />} />
            </Routes>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        screenSize: state.screenSize
    }
}

export default connect(mapStateToProps, { getUserInfo, getScreenSize })(App)