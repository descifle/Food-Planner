import { SIGN_IN, SIGN_OUT, SCREEN_SIZE } from './types'

export const signIn = user => {
    return {
        type: SIGN_IN,
        payload: user
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const getScreenSize = screenSize => {
    return {
        type: SCREEN_SIZE,
        payload: screenSize
    }
}