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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          {/* <AuthenticateBoundary> */}
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        </Provider>
        {/* </AuthenticateBoundary> */}
      </div>
    );
  }
}

export default App;
