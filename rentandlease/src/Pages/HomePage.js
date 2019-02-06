import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

export class HomePage extends PureComponent {
  render() {
    console.log(this.props.isLoggedIn);
    if (!this.props.isLoggedIn) {
      this.props.history.push("/login");
      return null;
    } else {
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
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

HomePage = connect(mapStateToProps)(HomePage);

export default HomePage;
