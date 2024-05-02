import React, { useState } from "react";
import logo from "../../../../Assets/logo.png";
import CartIcon from '../../../../Assets/cart_icon.png';
import "./navbar.css"

const Navbar = () => {
  const [menu , setMenu]= useState("Shop")
  
  return (
    
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" /> {/* Use the imported image variable */}
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}> <link to='/'>Shop</link> {menu ==="Shop"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Mens")}} ><link to='/mens'>Men</link>{menu ==="Mens"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Women")}}> <link to='/women'>Women</link> {menu ==="Women"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Kids")}}> <link to='kids'>Kids</link> {menu ==="Kids"? <hr/> :<></> }</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={CartIcon}/>
        <div className="nav-cart-count">0

      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
