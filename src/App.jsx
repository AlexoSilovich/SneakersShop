import search from "./img/search.svg"
import Header from "./components/Header"
import Card from "./components/Card"
import Drawer from "./components/Drawer"


function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="top-content">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={20} src={search} alt="search" />
            <input placeholder="Поиск.." type="text" />
          </div>
        </div>
        <div className="container">
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <div className="card">
            <div className="favorite">
              <img width={30} src={like} alt="like" />
            </div>
            <img
              width={150}
              src="https://sneakers.by/image/cache/catalog/li/wss_krossovki/1193A164-100/asics-x-sneakerwolf-gel-kayano-trainer-1193a164-100-2344-695x695.jpeg"
              alt="sneaker"
            />
            <h5>Asics x Sneakerwolf Gel-Kayano Trainer</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>250 $</b>
              </div>
              <button>
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={30} src={unlike} alt="like" />
            </div>
            <img
              width={150}
              src="https://sneakers.by/image/cache/catalog/li/studio_krossovki/367198-02/puma-rs-100-x-ader-error-367198-02-1-695x695.jpeg"
              alt="sneaker"
            />
            <h5>Puma RS-100 x Ader Error</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>250 $</b>
              </div>
              <button>
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={30} src={unlike} alt="like" />
            </div>
            <img
              width={150}
              src="https://sneakers.by/image/cache/catalog/li/wss_krossovki/AA4315-100/nikelab-air-shake-ndestrukt-x-pigalle-aa4315-100-352-695x695.jpeg"
              alt="sneaker"
            />
            <h5>NikeLab Air Shake NDestrukt x Pigalle</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>1 250 $</b>
              </div>
              <button>
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
