import React, { useState } from 'react'
import unlike from "../img/unliked.svg"
import like from "../img/liked.svg"
import plus from "../img/plus.svg"


function Card() {
  return (
    <div className="card">
            <div className="favorite">
              <img width={30} src={unlike} alt="like" />
            </div>
            <img
              width={150}
              src="https://sneakers.by/image/cache/catalog/li/wss_krossovki/BQ4800-100/nike-zoom-x-vista-grind-wmns-bq4800-100-168-695x695.jpeg"
              alt="sneaker"
            />
            <h5>Nike Zoom X Vista Grind Wmns</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>1 250 $</b>
              </div>
              <button>
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
  )
}

export default Card