import { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+20");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", {
      firstName,
      lastName,
      email,
      password,
      countryCode,
      mobileNumber,
    });
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center min-vh-100 w-100">
      <div className="container d-flex justify-content-center pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-12">
            <div className="card shadow signup-card">
              <div className="card-body p-4 p-md-5">
                <h1 className="text-center mb-3 signup-title">
                  Create account
                </h1>
                <p className="text-center text-muted mb-4">
                  Already have an account?{" "}
                  <a href="#" className="signup-link">
                    Sign in
                  </a>
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First name *</label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last name *</label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address *</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password *</label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="btn btn-link position-absolute bottom-0 end-0 translate-middle-y text-muted signup-toggle-btn"
                      >
                        <i
                          className={
                            showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                          }
                        ></i>
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mobile number *</label>
                    <div className="input-group">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="form-select signup-country-select"
                        style={{ maxWidth: "120px" }}
                      >
                        <option value="+20">🇪🇬 +20</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="XXX-XXXXXXX"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-100 signup-button"
                  >
                    Create my account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

