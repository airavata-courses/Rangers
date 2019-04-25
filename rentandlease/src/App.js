import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import AuthenticateBoundary from "./Common/AuthenticateBoundary";
import store from "./Components/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import AddListings from "./Pages/AddListings";
import ViewListings from "./Pages/ViewListings";
import Register from "./Pages/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          {/* <AuthenticateBoundary> */}
          <div>
            <Header />

            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/addListings" component={AddListings} />
            <Route exact path="/viewListings" component={ViewListings} />
            <Route exact path="/register" component={Register} />
          </div>
        </Provider>
        {/* </AuthenticateBoundary> */}
      </div>
    );
  }
}

export default App;
