import React from 'react'
import "../css/header.css"
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <nav>

        <div className="logo">
          <a href="">Furni<span>.</span></a>
        </div>

       <div className="lists">

       <ul>
          <li><a className='homeList' href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact us</a></li>
        </ul>

        <div className="icons">
         <img src="https://themewagon.github.io/furni/images/user.svg" alt="" />
         <img src="https://themewagon.github.io/furni/images/cart.svg" alt="" />
        </div>

       </div>


      </nav>
    </header>
  )
}

export default Header