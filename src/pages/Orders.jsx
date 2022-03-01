import React from 'react'
import axios from 'axios'
import Card from '../components/Card'


function Orders() {
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get('https://620a36d892946600171c58ab.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Error')
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="content">
      <div className="top-content">
        <h1>Мои заказы</h1>
      </div>

      <div className="card-container">
        {(isLoading ? [...Array(8)] : orders)
          .map((item, index) => (
            <Card 
              key={index}
              loading={isLoading}
              {...item}
            />
          ))}
      </div>
    </div>
  )
}

export default Orders