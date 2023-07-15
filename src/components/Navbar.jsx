import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const categories = data.map((producto) => producto.marca);
const unique = [...new Set(categories)];
unique.sort();

// console.log([...unique]); //desestructuro para convertir en array y que sea iterable

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>PC Market</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="NavLink" to="/">
            Inicio
          </Link>
        </li>
        {/* <li className="NavLink">Por marca</li> */}
        <div className="NavCategories">
          {unique.map((item, id) => (
            <li key={id}>
              <Link className="NavLink" to={`/category/${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </div>
        {/* <li>
          <Link className="NavLink" to="/productos/Dell">
            Dell
          </Link>
        </li>
        <li>
          <Link className="NavLink" to="/productos/HP">
            HP
          </Link>
        </li>
        <li>
          <Link className="NavLink" to="/productos/Lenovo">
            Lenovo
          </Link>
        </li> */}
        <li>
          <Link className="NavLink" to="/Contacto">
            Contacto
          </Link>
        </li>
        {/* <form type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              id="busqueda"></form>
            <button type="submit" id="buscarBtn">Buscar</button> */}
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
