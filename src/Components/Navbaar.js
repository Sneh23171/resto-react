import "../App.css";
import React, {  useState } from "react";
import cartImage from "../Img/ShoppingCart.png";
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

     return (
   <nav className="site-navbar">
      <div className="navbar-left">
        <div className="navbar-logo">RESTO</div>

        <div
          id="navbarLinks"
          className={`navbar-links ${isOpen ? "active" : ""}`}
        >
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={closeMenu}>Blog</a>
          <a href="#" onClick={closeMenu}>Menu</a>
          <a href="#" onClick={closeMenu}>About</a>
        </div>

        <div
          id="navbarHamburger"
          className={`navbar-hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-right">
        <img className="cart-image" src={cartImage} alt="" />
        <a href="#" className="signin-button">Sign In</a>
      </div>
    </nav>

     );
}