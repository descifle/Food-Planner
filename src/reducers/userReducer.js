import { SIGN_IN, SIGN_OUT } from "../actions/types"

const INITIAL_STATE = {
    admin: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return { ...action.payload }
        case SIGN_OUT:
            localStorage.removeItem("userified")
            return { verify: null }
        default:
            return state
    }
}

export default userReducer