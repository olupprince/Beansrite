import { useState } from "react";
import Hero from "./component/Hero";
const beansData = [
  {
    name: "vegitable beans special",
    ingredients: "vegitables, onions mega belsnd ingridents",
    price: 1200,
    available: 12,
    sold: 0,
    photoName: "img/beans-img.jpg",
    soldOut: false,
  },
  {
    name: "Agoyin",
    ingredients: "super boied beans, unique agoyin flavours, pepper",
    price: 1500,
    available: 12,
    sold: 0,
    photoName: "img/beans-img1.jpg",
    soldOut: false,
  },
  {
    name: "Farm-house Beans",
    ingredients: "Tomato, fine grains of beans with a blend of perfection",
    price: 1000,
    available: 12,
    sold: 0,
    photoName: "img/beans-img8.jpg",
    soldOut: false,
  },
  {
    name: "Kidney Beans hugo",
    ingredients: "Large chuks of the finest beans and blablabla",
    price: 1600,
    available: 12,
    sold: 0,
    photoName: "img/beans-img3.jpg",
    soldOut: false,
  },
  {
    name: "Odudu Vegitable",
    ingredients: "drink and eat the healthy beans made with love",
    price: 600,
    available: 12,
    sold: 0,
    photoName: "img/beans-img9.jpg",
    soldOut: true,
  },
  {
    name: "Beans pepper-soup",
    ingredients: "small grains of beans with a unique taste from bullseye",
    price: 500,
    available: 12,
    sold: 0,
    photoName: "img/beans-img10.jpg",
    soldOut: false,
  },
  {
    name: "Black Beans sensation",
    ingredients: "Large chuks of the finest beans and blablabla",
    price: 1600,
    available: 12,
    sold: 0,
    photoName: "img/beans-img6.jpg",
    soldOut: false,
  },
  {
    name: "Agoyin vegitabel",
    ingredients: "drink and eat the healthy beans made with love",
    price: 600,
    available: 12,
    sold: 0,
    photoName: "img/beans-img7.jpg",
    soldOut: true,
  },
  {
    name: "plain beans and stew",
    ingredients: "small grains of beans with a unique taste from bullseye",
    price: 500,
    available: 12,
    sold: 0,
    photoName: "img/beans-img.jpg",
    soldOut: false,
  },
  {
    name: "Black sead beans",
    ingredients: "vegitables, onions mega belsnd ingridents",
    price: 1200,
    available: 12,
    sold: 0,
    photoName: "img/beans-img1.jpg",
    soldOut: false,
  },
  {
    name: "Fiofio",
    ingredients: "super boied beans, unique agoyin flavours, pepper",
    price: 1500,
    available: 12,
    sold: 0,
    photoName: "img/beans-img4.jpg",
    soldOut: false,
  },
  {
    name: "white beans",
    ingredients: "drink and eat the healthy beans made with love",
    price: 600,
    available: 12,
    sold: 0,
    photoName: "img/beans-img5.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="App">
      <Hero />
      <SectionMenuAndMenuContainer />
    </div>
  );
}

function MenuContainer() {
  return (
    <div className="menu-container">
      {beansData.map((Beans) => (
        <BensCard beansObj={Beans} key={Beans.name} />
      ))}
    </div>
  );
}

function BensCard({ beansObj }) {
  const [quantityOrdered, setQuantityOrdered] = useState(0);
  function handleCountUp() {
    setQuantityOrdered(() => quantityOrdered + 1);
  }
  function handleCountDown() {
    if (quantityOrdered >= 1) setQuantityOrdered(() => quantityOrdered - 1);
  }

  return (
    <div className="overall">
      <div className="content-box">
        <img className="img" src={beansObj.photoName} alt="beans img" />
        <div className="description">
          <strong className="dish-name">{beansObj.name}</strong>
          <p className="dish-description"> {beansObj.ingredients}</p>
          <div>
            <span>Available </span>
            <span> &bull;</span>
            <span> sold</span>
          </div>
        </div>
      </div>
      <div className="click-order">
        <span className="price">
          {" "}
          <sup className="naira">&#8358;</sup>
          {beansObj.price}
        </span>
        <button className="btn" onClick={handleCountDown}>
          -
        </button>
        <span className="quantity-ordered">{quantityOrdered}</span>
        <button className="btn" onClick={handleCountUp}>
          +
        </button>
      </div>
    </div>
  );
}
function SectionMenuAndMenuContainer() {
  return (
    <section className="section-menu">
      <div className="menu-cart-flexbox">
        <div className="menu-box">
          <div className="menu-header-box">
            <h2 className="heading-secondary">Our menu 🔥</h2>
            <p className="menu-paragraph">30 items showing &darr;</p>
          </div>
          <MenuContainer />
        </div>
        <div className="side-cart-box">
          <div className="side-cart"></div>
        </div>
      </div>
    </section>
  );
}
export default App;
