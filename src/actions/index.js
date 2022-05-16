import { SIGN_IN, RSIGN_IN, SIGN_OUT, RSIGN_OUT, REFRESH_USER,SCREEN_SIZE, FOODS } from './types'
import { client } from '../components/client'

export const signIn = user => {
    return {
        type: SIGN_IN,
        payload: user
    }
}

export const rSignIn = user => {
    return {
        type: RSIGN_IN,
        payload: user
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const rSignOut = () => {
    return {
        type: RSIGN_OUT
    }
}

export const getScreenSize = screenSize => {
    return {
        type: SCREEN_SIZE,
        payload: screenSize
    }
}

export const getFoods = foods => {
    return {
        type: FOODS,
        payload: foods 
    }
}

export const getUserInfo = (data) => {
    return {
        type: SIGN_IN,
        payload: data
    }
}

export const deleteUserInfo = (data) => {
    return {
        type: SIGN_OUT,
        payload: data
    }
}

export const refreshUser = (data) => async (dispatch, getState) => {
    const result = await client.post("/auth/verify", {}, { withCredentials:true })

    dispatch({
        type: REFRESH_USER,
        payload: result.data
    })
}