import React, { Component } from "react";
// import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand">Todo Company</a>
          </div>

          <ul className="navbar-nav">
            <li className="nav-link"><a href="/home" >Home</a></li>
            {/* <Link className="nav-link" to="/home">Home</Link> */}
            <li className="nav-link"><a href="/todo" >Todo</a></li>
            {/* <Link className="nav-link"to="/todo">Todo</Link> */}
          </ul>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link">Login</li>
            <li className="nav-link">Logout</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
