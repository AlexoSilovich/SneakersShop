import logo from "./img/aKzm-logos_transparent.png"
import cart from "./img/cart.svg"
import user from "./img/user.svg"
import plus from "./img/plus.svg"

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header-left">
          <img width="200" src={logo} alt="" />
          <div className="header-info">
            <h3>Sneakers</h3>
            <p>Best shop</p>
          </div>
        </div>
        <ul className="header-right">
          <li className="cart-price">
            <img width="40" height="40" src={cart} alt="" />
            <span>1205 $</span>
          </li>
          <li>
            <img width="40" height="40" src={user} alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All sneakers</h1>
        <div className="container">
          <div className="card">
            <img
              width={150}
              src="https://woolrich-cdn.thron.com/delivery/public/image/woolrich/b3a57b12-5dc0-4327-a731-3f3fcb9bfc4d/zk128o/std/720x1080/CMWFFO2080MRUWF72-F2060.jpg"
              alt=""
            />
            <h5>Trekking Runner water-resistant sneakers</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>1 250 $</b>
              </div>
              <button>
                <img width="30" src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={150}
              src="https://cdn.modesens.com/media/77931546"
              alt=""
            />
            <h5>Acne Studios Berton Rubber-Trimmed</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>250 $</b>
              </div>
              <button>
                <img width="30" src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={150}
              src="https://cdn.shopify.com/s/files/1/0624/0605/products/NOTRE-CHICAGO-ACNE-STUDIOS-AD0296-700370-13168_900x1350_crop_center.jpg?v=1606753393"
              alt=""
            />
            <h5>Leather Hiking Boot in Brown</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>250 $</b>
              </div>
              <button>
                <img width="30" src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={150}
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Krossovki_Superstar_belyj_FV3284_01_standard.jpg"
              alt=""
            />
            <h5>Adidas SUPERSTAR 1988</h5>
            <div className="card-bottom">
              <div>
                <p>Price:</p>
                <b>1 250 $</b>
              </div>
              <button>
                <img width="30" src={plus} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
