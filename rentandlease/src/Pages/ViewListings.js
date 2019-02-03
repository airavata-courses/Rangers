import React, { PureComponent } from "react";
import { Redirect } from "react-router";

export class ViewListings extends PureComponent {
  componentDidMount() {
    // <Redirect to="/login" />;
  }
  render() {
    return <div>This is the page that enables user to view listings.</div>;
  }
}

export default ViewListings;
