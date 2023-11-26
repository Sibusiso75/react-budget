import React from "react";
import Navbar from "./Ecommerce/Navbar/CartNavbar";
import CartContainer from "./Ecommerce/CartPage/CartContainer";
import { useGlobalContext } from "./Ecommerce/ContextAndReducer/cartContext";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import ReactLoading from "react-loading"
import Home from "./Ecommerce/HomePage/Home";
import "./Ecommerce/cart.css";
import Item from "./Ecommerce/SinglePage/Item";
import "./Ecommerce/cart.css"
import NotFound from "./Ecommerce/NotFound";
function App() {
  
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<CartContainer/>}></Route>
      <Route path="/item/:id" element={<Item/>}></Route>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;