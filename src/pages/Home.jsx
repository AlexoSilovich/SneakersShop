import React from 'react'
import Card from "../components/Card"
import search from "../img/search.svg"
import removeInput from "../img/remove-input.svg"


function Home({
  items,
  searchValue,
  setSearchValue,
  onSearchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading
}) {

  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (isLoading ? [...Array(8)] : filterItems)
    .map((item, index) => (
      <Card
        key={index}
        onFavorite={obj => onAddToFavorite(obj)}
        onPlus={obj => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ))
  }

  return (
    <div className="content">
      <div className="top-content">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img width={20} src={search} alt="search" />
          <input
            value={searchValue}
            onChange={onSearchInput}
            placeholder="Поиск.."
            type="text"
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="removeInput"
              src={removeInput}
              alt="clear"
            />
          )}
        </div>
      </div>
      <div className="card-container">
        {renderItems()}
      </div>
    </div>
  )
}

export default Home