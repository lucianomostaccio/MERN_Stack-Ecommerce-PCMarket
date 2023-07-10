import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <li className="carritoNav">
        <Link span id="cart-icon" to="/cart">
          CARRITO
          <FontAwesomeIcon icon={faShoppingCart} />
          <i className="fa-solid" id="cantidadCarrito">
            {cantidadEnCarrito()}
          </i>
        </Link>
      </li>
    </div>
  );
}

export default CartWidget;