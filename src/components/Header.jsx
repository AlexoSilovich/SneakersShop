import React from 'react'
import logo from "../img/aKzm-logos_transparent.png"
import cart from "../img/cart.svg"
import user from "../img/user.svg"


function Header() {
  return (
    <header>
        <div className="header-left">
          <img width="200" src={logo} alt="" />
          <div className="header-info">
            <h3>Sneakers</h3>
            <p>Best shop</p>
          </div>
        </div>
        <ul className="header-right">
          <li className="cart-price">
            <img width="40" height="40" src={cart} alt="" />
            <span>1205 $</span>
          </li>
          <li>
            <img width="40" height="40" src={user} alt="" />
          </li>
        </ul>
      </header>
  )
}

export default Header