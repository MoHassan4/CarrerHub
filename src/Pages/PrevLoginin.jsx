import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/prevSignupStyle.css";
import Header from "../Components/shared/Header";

function PrevLogin() {
  return (
    <div className="selectSignup pt-5">
      <Header h1="Login To Your" inSpan="Account" p="Welcome Back!" />
      <div className="text-center d-flex flex-column flex-lg-row justify-content-center align-items-center pt-2 gap-5">
        <Link to="/company-login" className="text-decoration-none text-dark">
          <div className="myCard shadow-lg bg-light p-5 rounded-3">
            <h2>For Companies</h2>
            <FontAwesomeIcon icon={faBuilding} className="myIcon fa-5x mt-3" />
          </div>
        </Link>

        <Link to="/login" className="text-decoration-none text-dark">
          <div className="myCard shadow-lg bg-light p-5 rounded-3">
            <h2>For Job Seekers</h2>
            <FontAwesomeIcon icon={faUser} className="myIcon fa-5x mt-3" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PrevLogin;
