import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import LoginRegister from "./pages/loginRegister/LoginRegister";

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={LoginRegister} />
      </Switch>
    </div>
  );
}

export default App;
