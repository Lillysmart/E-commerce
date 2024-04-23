import React from "react";
import logo from "../../../../Assets/logo.png";
import CartIcon from '../../../../Assets/cart_icon.png';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" /> {/* Use the imported image variable */}
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li>Shop <hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={CartIcon}/>

      </div>
    </div>
  );
};

export default Navbar;
