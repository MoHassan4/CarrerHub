import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100 top-0 z-3">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fw-bold pe-2" to="/">
            CareerHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center justify-content-between flex-column flex-lg-row"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Find Jobs
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className="dropdown-menu text-center text-lg-start">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      About
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="li-su-btns d-flex flex-column flex-lg-row gap-3 justify-content-center">
              <Link
                className="li-btn text-decoration-none bg-transparent border-0 p-2 rounded-3"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="su-btn text-decoration-none bg-transparent border-0 p-2 rounded-3"
                to="/signup"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
