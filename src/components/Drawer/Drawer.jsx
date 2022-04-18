import React, {useState} from "react"
import Info from "../Info"
import axios from "axios"
import remove from "../../img/remove.svg"
import close from "../../img/close.svg"
import arrow from "../../img/right-arrow.svg"
import cartEmpty from "../../img/cart-empty.svg"
import order from "../../img/order.svg"
import style from "./Drawer.module.scss"
import { useCart } from "../../hooks/useCart"

const delay = ms => new Promise(res => setTimeout(res, ms))


function Drawer({ onClose, onRemove, items, opened }) {
  const {cartItems, setCartItems, totalPrice} = useCart()
  const [orderId, setOrderId] = useState(null)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://620a36d892946600171c58ab.mockapi.io/orders', {
        items: cartItems
      })
      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      for(let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete('https://620a36d892946600171c58ab.mockapi.io/orders/' + item.id)
        await delay(1000)
      }
    } catch (error) {
      alert("Error order ):")
    }  
    setIsLoading(false)
  }

  return (
    <div className={`${style.overlay} ${opened ? style.overlayVisible : ''}`}>
      <div className={style.drawer}>
        <h2>
          Корзина
          <img
            className="remove-btn"
            onClick={onClose}
            src={close}
            alt="close"
          />
        </h2>

        {items.length > 0 ? (
          <>
          <div className={style.items}>
            {items.map((obj) => (
              <div key={obj.id} className={style.cartItem}>
                <img width={80} src={obj.src} alt="sneaker" />
                <div className={style.info}>
                  <p>{obj.name}</p>
                  <b>{obj.price} BYN</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className={style.removeBtn}
                  src={remove}
                  alt="remove"
                />
              </div>
            ))}
          </div>

          <div className={style.outcome}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} BYN</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>{(totalPrice / 100) * 5} BYN</b>
            </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder} className={style.greenBtn}>
            Оформить заказ
            <img width={20} src={arrow} alt="arrow" />
          </button>
        </div>
        </>
        ) : (
          <Info 
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пуста"}
            description={isOrderComplete ? `Ваш заказ #${orderId} был успешно оформлен` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"}
            image={isOrderComplete ? order : cartEmpty}
          />
        )}
      </div>
    </div>
  )
}

export default Drawer
