import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'semantic-ui-css/semantic.min.css'
import App from "./App";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
