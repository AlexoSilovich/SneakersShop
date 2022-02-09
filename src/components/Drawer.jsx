import React from "react"
import remove from "../img/remove.svg"
import arrow from "../img/right-arrow.svg"


function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img className="remove-btn" src={remove} alt="remove" />
        </h2>
        <div className="items">
          <div className="cart-item">
            <img
              width={80}
              src="https://sneakers.by/image/cache/catalog/li/wss_krossovki/BQ4800-100/nike-zoom-x-vista-grind-wmns-bq4800-100-168-695x695.jpeg"
              alt="sneaker"
            />
            <div className="info">
              <p>Nike Zoom X Vista Grind Wmns</p>
              <b>1 250$</b>
            </div>
            <img className="remove-btn" src={remove} alt="remove" />
          </div>
          <div className="cart-item">
            <img
              width={80}
              src="https://sneakers.by/image/cache/catalog/li/wss_krossovki/BQ4800-100/nike-zoom-x-vista-grind-wmns-bq4800-100-168-695x695.jpeg"
              alt="sneaker"
            />
            <div className="info">
              <p>Nike Zoom X Vista Grind Wmns</p>
              <b>1 250$</b>
            </div>
            <img className="remove-btn" src={remove} alt="remove" />
          </div>
        </div>
        <div className="outcome">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>2 500$</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>18$</b>
            </li>
          </ul>
          <button className="green-btn">
            Оформить заказ
            <img width={20} src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
