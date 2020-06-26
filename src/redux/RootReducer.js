import userReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducer";

import { combineReducers } from 'redux'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})