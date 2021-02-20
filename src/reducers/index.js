import { combineReducers } from 'redux'
import authReducer from './authReducer'
import screenSizeReducer from './screenSizeReducer'

export default combineReducers({
    auth: authReducer,
    screenSize: screenSizeReducer,
    basic: () => 'hello'
})