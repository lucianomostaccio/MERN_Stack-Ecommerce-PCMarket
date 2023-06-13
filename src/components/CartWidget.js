import React from "react";

function CartWidget({ quantity }) {
  return (
    <li className="carritoNav">
      <a span id="cart-icon" href="#sectionCarrito">
        CARRITO<i className="fa-solid fa-shopping-cart"></i>
        <i className="fa-solid" id="cantidadCarrito">{quantity=0}</i>
      </a>
    </li>
  );
}

export default CartWidget;
