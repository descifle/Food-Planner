import { SCREEN_SIZE } from '../actions/types'

const INITIAL_STATE = {
    screenSize: 500
}

const screenSizeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SCREEN_SIZE:
            return { screenSize:action.payload }
        default:
            return state
    }
}   

export default screenSizeReducer