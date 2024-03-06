
import './App.css';

import "../src/all.min.css";

import Home from "./Pages/Home"
import Footer from "./components/Footer";
import { Route ,Routes} from "react-router-dom";

import About from "./Pages/About"
import Favorites from './Pages/Favorites';
import  Account from './Pages/Account';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Checkout  from './Pages/Checkout';
import SingleProduct from './Pages/SingleProduct';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path={"/"} element={<><Home/></>}/>
      <Route path={"/about"} element={<><About/></>} />
      <Route path={"/contact"} element={<><Contact/></>} />
      <Route path={"/account"} element={<><Account/></>} />
      <Route path={"/cart"} element={<><Cart/></>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/checkout' element={<Checkout/>} />

      <Route path={"/products"} element={<><Shop/></>} >
        <Route path='products/:id' element={<SingleProduct/>} />
      </Route>

    </Routes>
    <Footer />

    </div>
  );
}

export default App;
