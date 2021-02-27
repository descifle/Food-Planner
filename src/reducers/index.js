import { combineReducers } from 'redux'
import authReducer from './authReducer'
import screenSizeReducer from './screenSizeReducer'
import foodsReducer from './foodsReducer'

export default combineReducers({
    auth: authReducer,
    screenSize: screenSizeReducer,
    allFoods: foodsReducer,
    basic: () => 'hello'
})