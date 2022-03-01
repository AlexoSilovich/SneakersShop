import React, { useContext } from "react"
import AppContext from "../context"
import arrow from "../img/right-arrow.svg"
import style from "../components/Drawer/Drawer.module.scss"

function Info({ title, description, image}) {
  const {setCartOpened} = useContext(AppContext)

  return (
    <div className={style.cartEmpty}>
      <img src={image} alt="no items" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className={style.greenBtn}>
        <img width={20} src={arrow} alt="arrow" />
      </button>
    </div>
  )
}

export default Info
