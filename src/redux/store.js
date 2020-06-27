import logger from 'redux-logger'
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./RootReducer"

const middlewares = [logger];

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store