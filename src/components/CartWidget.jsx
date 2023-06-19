import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget({ quantity }) {

  return (
    <li className="carritoNav">
      <a span id="cart-icon" href="#sectionCarrito">
        CARRITO
        <FontAwesomeIcon icon={faShoppingCart} />
        <i className="fa-solid" id="cantidadCarrito">
          {(quantity = 1)}
        </i>
      </a>
    </li>
  );
}

export default CartWidget;
