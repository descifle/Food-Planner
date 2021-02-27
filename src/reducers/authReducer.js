import { SIGN_IN, SIGN_OUT, RSIGN_IN, RSIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    isNormalSignedIn: null,
    user: null,
    rUser: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, user:action.payload}
        case RSIGN_IN:
            return { ...state, isNormalSignedIn: true, rUser:action.payload}
        case SIGN_OUT:
            return { ...state, isSignedIn: false, user:null }
        case RSIGN_OUT:
            localStorage.removeItem('malfease')
            localStorage.removeItem('malfease1')
            return { ...state, isNormalSignedIn: false, rUser:null }
        default:
            return state
    }
}   

export default authReducer