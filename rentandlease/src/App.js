import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import AuthenticateBoundary from "./Common/AuthenticateBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AuthenticateBoundary> */}
        <Header />
        <Main />
        <Footer />
        {/* </AuthenticateBoundary> */}
      </div>
    );
  }
}

export default App;
