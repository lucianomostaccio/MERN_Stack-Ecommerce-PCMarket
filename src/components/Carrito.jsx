import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container" id="carritoDiv">
      <h1 className="main-title">Carrito</h1>
      {carrito.map((prod) => (
        <div key={prod.id} id="divItemCart">
          <br />
          <img src={prod.imagen} alt={prod.titulo} id="fotoCarrito" />
          <h3>{prod.titulo}</h3>
          <p>Cant: {prod.cantidad}</p>
          <p>Precio unit: ${prod.precio.toLocaleString("es-AR")}</p>
          <p>Precio total: ${prod.precio * prod.cantidad}</p>
          <br />
        </div>
      ))}

      {carrito.length > 0 ? (
        <div id="bottomCartDiv">
          <div id="precioDiv">
            <h2>Precio total: ${precioTotal().toLocaleString("es-AR")}</h2>{" "}
          </div>
          <br />
          <div id="vaciarComprarDiv">
            <button id="vaciarCarrito" onClick={handleVaciar}>
              Vaciar
            </button>
            <Link to="" id="finalizarCompra">
              Finalizar compra
            </Link>
          </div>
        </div>
      ) : (
        <h2 id="cartVacio">El carrito está vacío</h2>
      )}
    </div>
  );
};

export default Carrito;
