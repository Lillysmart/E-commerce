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
     <ul className='nav-menu' >
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>

     </ul>
    </div>
  );
};

export default Navbar;
