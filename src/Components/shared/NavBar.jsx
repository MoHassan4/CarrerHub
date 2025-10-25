import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100 top-0 z-3 shadow-sm">
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

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Find Jobs
                </Link>
                <ul className="dropdown-menu text-center text-lg-start">
                  <li>
                    <Link className="dropdown-item" to="/jopSearch">
                      Job Search
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/jobs-by-location">
                      Jobs by Location
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className="dropdown-menu text-center text-lg-start">
                  <li>
                    <Link className="dropdown-item" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faqs">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="li-su-btns d-flex flex-column flex-lg-row gap-3 justify-content-center">
              {user ? (
                <div className="d-flex flex-row align-items-center justify-content-center gap-2 my-3 my-lg-0">
                  {/* User icon */}
                  <Link className="profile-link" to="/profile">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    size="2x"
                    className="text-warning"
                  />
                  </Link>

                  {/* User name */}
                  <span
                    className="d-none d-lg-block fw-bold text-truncate"
                    style={{ maxWidth: "120px" }}
                  >
                    {user.firstName} {user.lastName}
                  </span>

                  {/* Logout button */}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
