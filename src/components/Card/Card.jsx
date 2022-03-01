import React, { useState, useContext } from 'react'
import ContentLoader from "react-content-loader"
import AppContext from '../../context'
import unlike from "../../img/unliked.svg"
import like from "../../img/liked.svg"
import plus from "../../img/plus.svg"
import cheked from "../../img/cheked.svg"
import style from "./Card.module.scss"


function Card({
  id,
  name,
  price,
  src,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false
}) {
  const {isItemAdded} = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const itemObj = {id, parentId: id, name, price, src}

  const changePlus = () => {
    onPlus(itemObj)
  } 

  const onClickFavorite = () => {
    onFavorite(itemObj)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={style.card}>
    {
      loading ? <ContentLoader 
    speed={1.5}
    width={220}
    height={330}
    viewBox="0 0 220 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="170" rx="5" ry="5" width="217" height="20" /> 
    <rect x="0" y="200" rx="5" ry="5" width="140" height="20" /> 
    <rect x="0" y="272" rx="5" ry="5" width="140" height="40" /> 
    <rect x="160" y="272" rx="50" ry="50" width="43" height="43" /> 
    <rect x="0" y="0" rx="5" ry="5" width="216" height="157" />
  </ContentLoader> : <>
  <div className={style.favorite}>
        {onFavorite && <img 
          width={30} 
          onClick={onClickFavorite}
          src={isFavorite ? like : unlike} 
          alt="like"
        />}
      </div>
      <img src={src} alt="sneakers"/>
      <h5>{name}</h5>
      <div className={style.cardBottom}>
        <div>
          <p>Цена:</p>
          <b>{price} BYN</b>
        </div>
        {onPlus && <button 
          className={style.plus} 
          onClick={changePlus}
        >
          <img 
            src={isItemAdded(id) ? cheked : plus} 
            alt="plus"
          />
        </button>}
      </div>
  </> 
    }
    </div>
  )
}

export default Card