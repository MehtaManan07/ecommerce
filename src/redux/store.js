import logger from 'redux-logger'
import { createStore, applyMiddleware } from "redux"
import RootReducer from "./RootReducer"

const middlewares = [logger];

const store = createStore(RootReducer, applyMiddleware(...middlewares))

export default store