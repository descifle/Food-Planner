import { SIGN_IN, RSIGN_IN, SIGN_OUT, RSIGN_OUT, SCREEN_SIZE, FOODS } from './types'

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