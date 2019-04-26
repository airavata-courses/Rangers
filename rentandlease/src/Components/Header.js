import React, { PureComponent } from "react";
import "./Header.css";
import { Button, Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../Actions/UserActions";
import { withRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";

export class Header extends PureComponent {
  logout = () => {
    console.log("Logout called");
    this.props.logout();

    window.location.assign("/");
  };

  render() {
    return (
      // <div id="header">
      //   RentNLease-Green
      //   {this.props.isLoggedIn && <Button onClick={this.logout}>Logout</Button>}
      //   <hr />
      // </div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{color:"blue"}}>RentNLease</Navbar.Brand>
        {this.props.isLoggedIn ? (
          <Nav className="mr-auto">
            <Link to="/viewListings" className="navbar-brand">
              View Listing
            </Link>
            <Link to="/addListings" className="navbar-brand">
              Add Listing
            </Link>
          </Nav>
        ) : null}
        {this.props.isLoggedIn ? (
          <Nav>
            <Navbar.Text style={{ paddingRight: "10px" }}>
              {`Logged in as: ${this.props.firstName} `}
            </Navbar.Text>
            <Button
              className="logout"
              variant="outline-secondary"
              onClick={() => this.logout()}
            >
              Logout
            </Button>
          </Nav>
        ) : null}
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    firstName: state.user.firstName,
    lastName: state.user.lastName
  };
};

Header = connect(
  mapStateToProps,
  { logout }
)(Header);

// Header = withRouter(Header);

export default Header;
