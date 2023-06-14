import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget({ quantity }) {
  const cartStyle = {
    listStyle: "none", // Elimina el estilo de la lista
    marginLeft: "2rem",
  };

  const quantityStyle = {
    marginLeft: "3px",
    fontStyle: "normal",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <li className="carritoNav" style={cartStyle}>
      <a span id="cart-icon" style={linkStyle} href="#sectionCarrito">
        CARRITO
        <FontAwesomeIcon icon={faShoppingCart} />
        <i className="fa-solid" id="cantidadCarrito" style={quantityStyle}>
          {(quantity = 1)}
        </i>
      </a>
    </li>
  );
}

export default CartWidget;
