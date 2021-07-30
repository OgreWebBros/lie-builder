import React, { Component } from "react";
import Logo from '../../assets/logo/';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo/>
      </header>
    );
  }
}

export default Header;
