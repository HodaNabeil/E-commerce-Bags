import './App.css';
import "../src/all.min.css";


import {  Route, Routes } from "react-router-dom";
import About from "./Pages/About"



import Home from "./Pages/Home/Home"

import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Checkout from './Pages/Checkout';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import Favorites from './Pages/Favorites/Favorites';
import Account from './Pages/Auth/Account';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Nested routes for products */}
        <Route path="/products" element={<Shop />}>
        </Route>

        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>


    </div>
  );
}

export default App;
