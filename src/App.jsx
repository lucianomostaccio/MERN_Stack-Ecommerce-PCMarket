import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import '../src/App.css';
import Footer from "./components/Footer";

function App() {

  return (
    <div id="mainDiv">
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:marca" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/contacto" element={<Contacto />}/>
          </Routes>

          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
