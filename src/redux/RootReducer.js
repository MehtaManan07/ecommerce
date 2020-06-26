import userReducer from "./user/UserReducer";

const { combineReducers } = require("redux");

export default combineReducers({
    user: userReducer
})