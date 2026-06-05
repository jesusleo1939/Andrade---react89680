import ReactLogo from "../assets/logo.png";
import CartWidget from "./Cartwidget";

const NavbarBoo = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={ReactLogo}
            alt="Logo"
            width="50"
            height="50"
            className="me-2"
          />
          
        </a>

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

        {/* Menú */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Nuevo
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Ofertas
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Contacto
              </a>
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