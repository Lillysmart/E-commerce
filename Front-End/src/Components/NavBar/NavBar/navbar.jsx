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
        <li onClick={()=>{setMenu("Shop")}}> Shop{menu ==="Shop"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Mens")}} >Men{menu ==="Mens"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Women")}}>Women {menu ==="Women"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Kids")}}>Kids {menu ==="Kids"? <hr/> :<></> }</li>
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
