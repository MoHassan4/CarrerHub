import Header from "../Components/shared/Header";
import heroImg from "../assets/HeroCompanyImage.png";
import RealStories from "../Components/HomeParts/RealStories";
import FutuersCard from "../Components/shared/FutuersCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMagnifyingGlass,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import "../css/companyHomeStyle.css";

function CompanyHome() {
  return (
    <div className="company-home container pb-5">
      <div className="hero d-flex flex-column flex-lg-row justify-content-between align-items-center px-4">
        <div className="hero-content d-flex flex-column gap-3 text-center text-lg-start">
          <h1 className="fw-bold display-5">Find Your Next Great Hire</h1>
          <p className="careerHub-p careerHub-p fs-5">
            CareerHub for Employers
          </p>
          <p className="text-muted mb-4">
            Post jobs, discover top talent, and manage applications all in one
            place. Simplify your hiring process and connect with qualified
            candidates today.
          </p>
          <button className="btn btn-dark btn-lg align-self-center align-self-lg-start">
            Post a Job Now
          </button>
        </div>

        <div className="hero-image mt-4 mt-lg-0">
          <img
            src={heroImg}
            alt="CareerHub Employer Dashboard"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="feature-section py-5 d-flex flex-column justify-content-center align-items-center">
        <div className="header text-center mb-5">
          <h2 className="fw-bold">
            Why Choose <span className="text-primary">CareerHub</span>
          </h2>
          <p className="text-muted">
            Empowering companies to hire smarter and faster.
          </p>
        </div>

        <div className="features d-flex flex-column flex-lg-row justify-content-center align-items-stretch gap-4">
          <FutuersCard
            title="Access to Top Talent"
            description="Reach thousands of skilled candidates across various industries and experience levels."
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          />
          <FutuersCard
            title="Smart Candidate Matching"
            description="Leverage intelligent matching tools to find the best-fit candidates quickly and efficiently."
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
          <FutuersCard
            title="Verified Professionals"
            description="Connect with vetted and trusted job seekers to ensure reliable hiring decisions."
            icon={<FontAwesomeIcon icon={faShieldHalved} />}
          />
        </div>
      </div>

      <div className="real-stories pt-5">
        <RealStories />
      </div>
    </div>
  );
}

export default CompanyHome;
