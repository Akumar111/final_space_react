import React, { Component } from "react";
import logo from "../img/logo.png";

export class Header extends Component {
  render() {
    return (
      <header className="center">
        <img src={logo} alt="logo" />
      </header>
    );
  }
}

export default Header;
