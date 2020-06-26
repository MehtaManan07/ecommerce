import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import LoginRegister from "./pages/loginRegister/LoginRegister";
import { auth, createUserProfileDoc } from "./firebase/FirebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/UserActions";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snap) => {
          setCurrentUser({
              id: snap.id,
              ...snap.data(),
            })
          });
      } else {
        setCurrentUser( userAuth );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null /* Comment1 */, mapDispatchToProps)(App);

// Comment 1 : bcoz we are getting no state from reducer
