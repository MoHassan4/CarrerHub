import "../css/about.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faRocket,
  faHandshakeAngle,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div id="up">
        <div id="top-content">
          <h1>Building Futures, Connecting Talent. </h1>
          <a href="#">
            Discover the passion, purpose, and people behind CareerHub.
          </a>
        </div>

        <div id="under-content">
          <h2>Our Story & Values</h2>
          <div id="boxes">
            <div id="first-row">
              <div id="box">
                <FontAwesomeIcon icon={faCrosshairs} className="my-icon" />
                <h4>Our Mission</h4>
                <p>
                  Helping people build their future through skills and
                  opportunity.
                </p>
              </div>
              <div id="box">
                <FontAwesomeIcon icon={faLightbulb} className="my-icon" />
                <h4>Innovation</h4>
                <p>We create modern ideas that move careers forward.</p>
              </div>
              <div id="box">
                <FontAwesomeIcon icon={faUsers} className="my-icon" />
                <h4>Community</h4>
                <p>Together, we grow, learn, and achieve more</p>
              </div>
              <div id="box">
                <FontAwesomeIcon icon={faLock} className="my-icon" />
                <h4>Trust & Security</h4>
                <p>Your privacy and safety always come first.</p>
              </div>
            </div>

            <div id="second-row">
              <div id="box">
                <FontAwesomeIcon icon={faGraduationCap} className="my-icon" />
                <h4>Lifelong Learning</h4>
                <p>Learning never stops—it is part of who we are.</p>
              </div>
              <div id="box">
                <FontAwesomeIcon icon={faRocket} className="my-icon" />
                <h4>Growth Driven</h4>
                <p>We focus on progress that drives real success.</p>
              </div>
              <div id="box">
                <FontAwesomeIcon icon={faHandshakeAngle} className="my-icon" />
                <h4>Accessibility</h4>
                <p>Knowledge and tools for everyone, everywhere</p>
              </div>
              <div id="box">
                <FontAwesomeIcon icon={faGlobe} className="my-icon" />
                <h4>Making Connections</h4>
                <p>Connecting people, ideas, and opportunities globally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
