import "../css/Home.css";
import Tag from "./HomeParts/tag";
import RealStories from "./HomeParts/RealStories";
import mobApp from "../assets/Gemini_Generated_Image_f3kui3f3kui3f3ku.png";
import FutuersCard from "./HomeParts/FutuersCard";
import JopByCountry from "./HomeParts/JopByCountry";

import EgyptImg from "../assets/countriesImages/egypt.avif";
import UAEImg from "../assets/countriesImages/UAE.jpg";
import SaudiArabiaImg from "../assets/countriesImages/SaudiArabia.jpeg";
import OmanImg from "../assets/countriesImages/Oman.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMagnifyingGlass,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home container">
      <div className=" header welcome">
        <h1 className="text-center">
          Welcome to <span>CareerHub</span>
        </h1>
        <p className="text-center">Your gateway to a successful career!</p>
      </div>

      <div className="search-form my-5 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2">
        <input
          type="search"
          className="form-control border-1 p-3"
          placeholder="Search for jobs..."
          aria-label="Search"
        />

        <select
          className="form-select border-1 border-start p-3"
          defaultValue="Egypt"
        >
          <option value="Egypt">Egypt</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="Qatar">Qatar</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Oman">Oman</option>
          <option value="Jordan">Jordan</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Iraq">Iraq</option>
          <option value="Syria">Syria</option>
          <option value="Yemen">Yemen</option>
          <option value="Libya">Libya</option>
          <option value="Sudan">Sudan</option>
          <option value="Morocco">Morocco</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Algeria">Algeria</option>
          <option value="Palestine">Palestine</option>
        </select>

        <button className="btn myBtn px-4 text-white w-50">Find Now</button>
      </div>

      <div className="popular-searches my-5">
        <h3 className="mt-5">Popular Searches</h3>
        <div className="row mt-3 g-2 tags">
          <div className="col-6 col-md-auto">
            <Tag job={"Web Developer"} />
          </div>
          <div className="col-6 col-md-auto">
            <Tag job={"Graphic Designer"} />
          </div>
          <div className="col-6 col-md-auto">
            <Tag job={"Digital Marketing"} />
          </div>
          <div className="col-6 col-md-auto">
            <Tag job={"Content Writer"} />
          </div>
          <div className="col-6 col-md-auto">
            <Tag job={"Data Analyst"} />
          </div>
          <div className="col-6 col-md-auto">
            <Tag job={"Project Manager"} />
          </div>
        </div>
      </div>

      <div className="image-section d-flex justify-content-center align-items-center my-5">
        <div className="text">
          <h2 className="fw-bold mb-3">Your Dream Job is Just a Click Away!</h2>
          <p className="text-muted mb-4">
            Explore thousands of job opportunities tailored to your skills and
            preferences. Start your journey with CareerHub today!
          </p>
          <button className="btn myBtn px-4 text-white">Get Started</button>
        </div>
        <img
          src={mobApp}
          alt="Career Hub Hero"
          className="img-fluid w-50 d-none d-lg-block"
        />
      </div>

      <div className="real-stories py-lg-3">
        <RealStories />
      </div>

      <div className="feature-section p-5">
        <div className="header">
          <h2 className="text-center">
            Why Choose <span>CareerHub</span>
          </h2>
          <p className="text-center">Your gateway to a successful career!</p>
        </div>
        <p></p>
        <div className="features d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-stretch gap-4 w-100">
          <FutuersCard
            title="Thousands of Job Offers"
            description="Browse a wide range of job opportunities across industries and experience levels."
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          />
          <FutuersCard
            title="Smart Job Matching"
            description="We match you with the most relevant jobs based on your skills and career goals."
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
          <FutuersCard
            title="Verified Employers"
            description="Work only with trusted and verified companies to ensure safe and reliable opportunities."
            icon={<FontAwesomeIcon icon={faShieldHalved} />}
          />
        </div>
      </div>

      <div className="find-jop-by-country my-5">
        <div className="header">
          <h2 className="text-center">
            Find Jobs by <span>Country</span>
          </h2>
          <p className="text-center">
            Explore job opportunities in various countries across the globe.
          </p>
        </div>
        <div className="row justify-content-center g-3 my-4">
          <div className="col-10 col-sm-6 col-md-4 col-lg-3">
            <JopByCountry country="Egypt" number="4,230" image={EgyptImg} />
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3">
            <JopByCountry country="UAE" number="5,120" image={UAEImg} />
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3">
            <JopByCountry
              country="Saudi Arabia"
              number="3,852"
              image={SaudiArabiaImg}
            />
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3">
            <JopByCountry country="Oman" number="1,120" image={OmanImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
