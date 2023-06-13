import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      {/* <header>
        <a href="#">
          <img
            className="logo-header"
            src="/Images/PC_Market-logos_transparent.png"
            alt="Logo"
          />
        </a>
        <h1 className="titulo_tienda">PC MARKET</h1>
      </header> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky w-100 top-0 z-3" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PC MARKET
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Promociones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Mi perfil</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar Notebook"
                aria-label="Search"
                id="busqueda"
              />
              <button className="btn btn-outline-success" type="submit" id="buscarBtn">
                Buscar
              </button>
            </form>
            <CartWidget/> 
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
