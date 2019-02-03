import React, { PureComponent } from "react";
import { Redirect } from "react-router";

export class HomePage extends PureComponent {
  componentDidMount() {
    return <Redirect to="/login" />;
  }
  render() {
    return <div>This is the page which displays user options.</div>;
  }
}

export default HomePage;
