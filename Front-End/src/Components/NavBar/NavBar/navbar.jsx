import React, { useState } from "react";
import logo from "../../../../Assets/logo.png";
import CartIcon from '../../../../Assets/cart_icon.png';
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu , setMenu]= useState("Shop")
  
  return (
    
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" /> {/* Use the imported image variable */}
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}> <Link to='/'>Shop </Link> {menu ==="Shop"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Mens")}} ><Link to='/mens'>Men</Link>{menu ==="Mens"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Women")}}> <Link to='/women'>Women</Link> {menu ==="Women"? <hr/> :<></> } </li>
        <li onClick={()=>{setMenu("Kids")}}> <Link to='kids'>Kids</Link> {menu ==="Kids"? <hr/> :<></> }</li>
      </ul>
      <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link> 
       <Link to='/cart'> <img src={CartIcon}/></Link>
        <div className="nav-cart-count">0

      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
