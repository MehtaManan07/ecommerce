import userReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducer";

const { combineReducers } = require("redux");

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})