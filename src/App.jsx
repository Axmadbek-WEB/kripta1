import logo from "./img/logo.png"
import food from "./img/Image.png"
import food1 from "./img/Image5.png"
import './App.css'
import { useTranslation } from "react-i18next";
import i18n from "./assets/i18n";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <div className="box container">
          <img src={logo} alt="" />
          <div className="ota">
            <p>{t("search_by_food")}</p>
            <button>{t("btn")}</button>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language}

            >
              <option value="en">English</option>
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </header>
      <main>

        <section className="hm">

          <div className="doda container">
            <div className="ota1">
              <h1>{t("header")}</h1>
              <p>Within a few clicks, find meals that are accessible near you</p>
            </div><br /><br />
            <div className="ota2">
              <button>Delivery</button>
              <button>Pickup</button>
              <div className="bola">
                <input type="text" placeholder="Enter Your Address" className="inp" />
                <button className="ffd">Find Food</button>
              </div>
            </div>
          </div>
          <img src={food} alt="" className="fd" />

        </section>
        <section>
          <div className="carts container">
            <div className="cart">
              <img src={food1} alt="" style={{width:'70%', borderRadius:'7px'}}/>
              <h1 style={{margin:'10px'}}>Greys Vage</h1>
              <button  className="ffd">{t("header")}</button>
            </div>
            <div className="cart">
              <img src={food1} alt="" style={{width:'70%', borderRadius:'7px'}}/>
              <h1 style={{margin:'10px'}}>Greys Vage</h1>
              <button  className="ffd">{t("header")}</button>
            </div>
            <div className="cart">
              <img src={food1} alt="" style={{width:'70%', borderRadius:'7px'}}/>
              <h1 style={{margin:'10px'}}>Greys Vage</h1>
              <button  className="ffd">{t("header")}</button>
            </div>
            <div className="cart">
              <img src={food1} alt="" style={{width:'70%', borderRadius:'7px'}}/>
              <h1 style={{margin:'10px'}}>Greys Vage</h1>
              <button  className="ffd">{t("header")}</button>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
