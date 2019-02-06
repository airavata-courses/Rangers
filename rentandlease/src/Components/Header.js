import React, { PureComponent } from "react";
import "./Header.css";
import { Button } from "react-bootstrap";

export class Header extends PureComponent {
  render() {
    return (
      <div id="header">
        This is the Header
        <Button>Logout</Button>
        <hr />
      </div>
    );
  }
}

export default Header;
