import React from "react";

import ItemListContainer from "./components/ItemListContainer";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import "../src/App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
// import SearchContainer from "./components/SearchContainer"

function App() {
  return (
    <div id="mainDiv">
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            {/* <Route path="/search" element={< SearchContainer />} /> */}
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:marca" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
