function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100 top-0 z-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold pe-2" href="#">
            CareerHub
          </a>
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
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Find Jobs
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu text-center text-lg-start">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="li-su-btns d-flex flex-column flex-lg-row gap-3 justify-content-center">
              <button className="bg-transparent border-0 p-2">
                <a className="li-btn text-decoration-none" href="#">
                  Login
                </a>
              </button>
              <button className="bg-transparent border-0 p-2">
                <a className="su-btn text-decoration-none" href="#">
                  SignUp
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
