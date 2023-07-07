import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

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
        <li>
          <Link className="NavLink" to="/productos/Asus">
            Asus
          </Link>
        </li>
        <li>
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
        </li>
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

// function NavBar() {
//   return (
//     <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="../public/index.html">PC MARKET</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             id="nav"
//             navbarScroll
//           >
//             <Nav.Link href="../public/index.html">Home</Nav.Link>
//             <Nav.Link href="../public/promociones.html">Promociones</Nav.Link>
//             <Nav.Link href="../public/contacto.html">Contacto</Nav.Link>
//             <Nav.Link href="../public/miperfil.html">Mi Perfil</Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Buscar"
//               className="me-2"
//               aria-label="Search"
//               id="busqueda"
//             />
//             <Button variant="outline-success" type="submit" id="buscarBtn">
//               Buscar
//             </Button>
//           </Form>
//           <CartWidget />
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
