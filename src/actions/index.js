import { SIGN_IN, SIGN_OUT, REFRESH_USER,SCREEN_SIZE, FOODS } from './types'
import { client } from '../components/client'

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