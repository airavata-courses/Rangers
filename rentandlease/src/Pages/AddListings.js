import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { accessDenied } from "../Constants/Constants";

export class AddListings extends PureComponent {
  componentDidMount() {
    console.log("here");
    // throw { message: "Unauthenticated" };
    // <Redirect to="/login" />;
  }
  render() {
    return <div>This is the page that allows user to add listings.</div>;
  }
}

export default AddListings;
