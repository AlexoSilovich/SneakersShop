import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import AppContext from "./context"
import Orders from "./pages/Orders"


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const [cartReponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://620a36d892946600171c58ab.mockapi.io/cart'),
          axios.get('https://620a36d892946600171c58ab.mockapi.io/favorites'),
          axios.get('https://620a36d892946600171c58ab.mockapi.io/items')
        ])
        
      setIsLoading(false)

      setCartItems(cartReponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
      } catch (error) {
        alert('Ошибка при загрузке данных')
        console.error(error)
      }
    }
    fetchData()
  },[])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(i => Number(i.parentId) !== Number(obj.id)))
        await axios.delete(`https://620a36d892946600171c58ab.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])
        const {data} = await axios.post('https://620a36d892946600171c58ab.mockapi.io/cart', obj)
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item
        }))
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
      console.error(error)
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://620a36d892946600171c58ab.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Ошибка при удалении из корзины')
      console.error(error)
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        await axios.delete(`https://620a36d892946600171c58ab.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((i) => Number(i.id) !== Number(obj.id)))
      } else {
        const {data} = await axios.post('https://620a36d892946600171c58ab.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
      console.log(error)
    }
  }

  const onSearchInput = event => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }


  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToFavorite,
      onAddToCart,
      setCartOpened,
      setCartItems
    }}>
    <div className="wrapper">
      <Drawer 
        onClose={() => setCartOpened(false)} 
        onRemove={onRemoveItem}
        items={cartItems}  
        opened={cartOpened}
      />
      <Header 
        onClickCart={() => setCartOpened(true)} 
      />
      <Routes>
        <Route path="/" element={
          <Home 
            items={items} 
            cartItems={cartItems}
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            onSearchInput={onSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            isLoading={isLoading}
          />}
        />
        <Route path="/favorites" element={
          <Favorites />
          } 
        />
        <Route path="/orders" element={
          <Orders />
          } 
        />
      </Routes>
    </div>
    </AppContext.Provider>
  )
}

export default App
