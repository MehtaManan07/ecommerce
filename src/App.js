import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import LoginRegister from "./pages/loginRegister/LoginRegister";
import { auth, createUserProfileDoc } from "./firebase/FirebaseUtils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snap) => {
          this.setState(
            {
              currentUser: {
                id: snap.id,
                ...snap.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });

        // console.log(this.state)
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={LoginRegister} />
        </Switch>
      </div>
    );
  }
}
export default App;
