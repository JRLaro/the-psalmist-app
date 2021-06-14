import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Psalmist</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar
