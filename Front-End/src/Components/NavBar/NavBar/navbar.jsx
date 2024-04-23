import React from 'react';
import logo from '../../../../Assets/logo.png' ;
//import CartIcon from '../../../../Assets/cart-icon.png';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" /> {/* Use the imported image variable */}
        <p>Shopper</p>
      </div>
    </div>
  );
};

export default Navbar;
