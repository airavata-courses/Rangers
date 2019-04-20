import React, { PureComponent } from "react";
import "./Header.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../Actions/UserActions";
import { withRouter } from "react-router";

export class Header extends PureComponent {
  logout = () => {
    console.log("Logout called");
    this.props.logout();

    window.location.assign("/");
  };

  render() {
    return (
      <div id="header">
        RentNLease
        {this.props.isLoggedIn && <Button onClick={this.logout}>Logout</Button>}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

Header = connect(
  mapStateToProps,
  { logout }
)(Header);

// Header = withRouter(Header);

export default Header;
