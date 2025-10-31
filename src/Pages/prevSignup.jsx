import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; 
import "../css/prevSignupStyle.css";
import Header from "../Components/shared/Header";

function PrevSignup() {
  return (
    <div className="selectSignup pt-5">
      <Header
        h1="Create"
        inSpan="Account"
        p="Your gateway to success!"
      />
      <div className="text-center d-flex flex-column flex-lg-row justify-content-center align-items-center pt-2 gap-5">
        <Link to="/company-signup" className="text-decoration-none text-dark">
          <div className="myCard shadow-lg bg-light p-5 rounded-3">
            <h2>For Companies</h2>
            <FontAwesomeIcon icon={faBuilding} className="myIcon fa-5x mt-3" />
          </div>
        </Link>

        <Link to="/signup" className="text-decoration-none text-dark">
          <div className="myCard shadow-lg bg-light p-5 rounded-3">
            <h2>For Job Seekers</h2>
            <FontAwesomeIcon icon={faUser} className="myIcon fa-5x mt-3" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PrevSignup;
