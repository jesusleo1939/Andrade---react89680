import ReactLogo from "../assets/logo.png";
import CartWidget from "./Cartwidget";
import { NavLink } from "react-router-dom";

const NavbarBoo = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img
            src={ReactLogo}
            alt="Logo"
            width="50"
            height="50"
          />
        </NavLink>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/category/nuevos"
              >
                Nuevos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/category/descuento"
              >
                Ofertas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/category/mas vendidos"
              >
                Más Vendidos
              </NavLink>
            </li>

          </ul>

          {/* Carrito */}
          <div className="d-flex">
            <CartWidget />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavbarBoo;