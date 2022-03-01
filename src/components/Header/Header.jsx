import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../img/aKzm-logos_transparent.png"
import cart from "../../img/cart.svg"
import user from "../../img/user.svg"
import favorite from "../../img/unliked.svg"
import style from "./Header.module.scss"
import {useCart} from "../../hooks/useCart"

function Header({onClickCart}) {
  const {totalPrice} = useCart()

  return (
    <header className={style.header}>
        <div className={style.headerLeft}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className={style.headerInfo}>
            <h3>Sneakers</h3>
            <p>Best shop</p>
          </div>
        </div>
        <ul className={style.headerRight}>
          <li onClick={onClickCart} className={style.icon}>
            <img src={cart} alt="cart" />
            <span>{totalPrice} BYN</span>
          </li>
          <li className={style.icon}>
            <Link to="/favorites">
              <img src={favorite} alt="favorite" />
            </Link>
          </li>
          <li className={style.icon}>
            <Link to="/orders">
              <img src={user} alt="user" />
            </Link>
          </li>
        </ul>
      </header>
  )
}

export default Header