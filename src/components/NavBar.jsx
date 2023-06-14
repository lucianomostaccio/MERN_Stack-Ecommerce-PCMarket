import { CartWidget } from "./CartWidget";
import { Button } from "react-bootstrap/Button";
import { Container } from "react-bootstrap/Container";
import { Form } from "react-bootstrap/Form";
import { Nav } from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap/Navbar";

function NavBar() {
  return (
    /* head antes del nav con logo de la tienda 
      <header>
        <a href="#">
          <img
            className="logo-header"
            src="/Images/PC_Market-logos_transparent.png"
            alt="Logo"
          />
        </a>
        <h1 className="titulo_tienda">PC MARKET</h1>
      </header> */
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="../public/index.html">PC MARKET</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="../public/index.html">Home</Nav.Link>
            <Nav.Link href="../public/promociones.html">Promociones</Nav.Link>
            <Nav.Link href="../public/contacto.html">Contacto</Nav.Link>
            <Nav.Link href="../public/miperfil.html">Mi Perfil</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              id="busqueda"
            />
            <Button variant="outline-success" type="submit" id="buscarBtn">
              Buscar
            </Button>
          </Form>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
