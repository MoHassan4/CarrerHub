import { Link } from "react-router";
import "../../css/cssShared/Footer.css";

function Footer() {
  return (
    <>
      <footer className="pt-5 px-5 bg-light">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Main Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Find Jobs</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Egypt
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Saudi Arabia
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  United Arab Emirates
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Qatar
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Kuwait
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Job Titles</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Web Developer
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Graphic Designer
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Digital Marketing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Content Writer
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Data Analyst
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button
                  className="sub-btn btn btn-primary border-0"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
          <p>
            © 2025 <span className="brand fw-medium">CareerHub</span>, Inc. All
            rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link
                className="link-body-emphasis"
                to="#"
                aria-label="Instagram"
              >
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#" aria-label="Facebook">
                <svg className="bi" width="24" height="24" aria-hidden="true">
                  <use xlink:href="#facebook"></use>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
