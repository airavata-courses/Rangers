import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const accessDenied = {};

export class AuthenticateBoundary extends Component {
  componentDidCatch(error) {
    console.log("Error caught");
    console.log(error);
    if (error.message === "Unauthenticated") {
      //   this.props.history.replace("/login");
      console.log("erro boundary needs to redirect");
      //   <Redirect to="/login" />;
    } else {
      throw error;
    }
  }
  render() {
    return this.props.children;
  }
}

export default AuthenticateBoundary;
