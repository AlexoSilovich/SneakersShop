import React, { useContext } from 'react'
import Card from '../components/Card'
import AppContext from '../context'


function Favorites() {
  const {favorites} = useContext(AppContext)
  const {onAddToFavorite} = useContext(AppContext)

  return (
    <div className="content">
      <div className="top-content">
        <h1>Мои закладки</h1>
      </div>
      <div className="card-container">
        {favorites.map((obj, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...obj}
            />
          ))}
      </div>
    </div>
  )
}

export default Favorites