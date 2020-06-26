const { default: logger } = require("redux-logger");
const { createStore, applyMiddleware } = require("redux");
const { default: RootReducer } = require("./RootReducer");

const middlewares = [logger];

const store = createStore(RootReducer, applyMiddleware(...middlewares))

export default store