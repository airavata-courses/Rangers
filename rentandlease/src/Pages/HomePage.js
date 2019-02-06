import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";

export class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <Button
          onClick={e => {
            e.preventDefault();
            this.props.history.push("/addListings");
          }}
        >
          Add Listings
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            this.props.history.push("/viewListings");
          }}
        >
          View Listings
        </Button>
      </div>
    );
  }
}

export default HomePage;
