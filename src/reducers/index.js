import { combineReducers } from 'redux'
import screenSizeReducer from './screenSizeReducer'
import foodsReducer from './foodsReducer'
import userReducer from './userReducer'

export default combineReducers({
    auth: userReducer,
    screenSize: screenSizeReducer,
    allFoods: foodsReducer
})