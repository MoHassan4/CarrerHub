import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/login.css";

const CompanyLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      icon: "success",
      title: "Login Successful 🎉",
      text: `Welcome back, ${data.email}`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="login-container d-flex align-items-center min-vh-100 w-100">
      <div className="container d-flex justify-content-center">
        <div className="row justify-content-center responsive">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card shadow login-card">
              <div className="card-body p-4 p-md-5">
                <h1 className="text-center mb-3 login-title">
                  Company Login Portal
                </h1>
                <p className="text-center text-muted mb-4">
                  Don’t have a company account?{" "}
                  <Link to="/company-signup" className="login-link">
                    Register here
                  </Link>
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Company Email"
                      className={`form-control form-control-lg ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className={`form-control form-control-lg ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn btn-link position-absolute top-50 end-0 translate-middle-y text-muted login-toggle-btn"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="stayLoggedIn"
                        {...register("stayLoggedIn")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="stayLoggedIn"
                      >
                        Stay logged in
                      </label>
                    </div>
                    <a href="#" className="login-link">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-100 login-button"
                  >
                    Log in as Company
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

export default CompanyLogin;
