import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { getUsersData } from "../services/Users.Login_SignUp.service";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await getUsersData();
    const users = response.data;

    const foundUser = users.find((u) => {
      return u.email === data.email && u.password === data.password;
    });

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      Swal.fire({
        icon: "success",
        title: "Login Successful 🎉",
        text: `Welcome back, ${foundUser.firstName}!`,
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/");
        window.location.reload();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        html: `
          Invalid Email or Password
        `,
      });
    }
  };

  return (
    <div className="login-container d-flex align-items-center min-vh-100 w-100">
      <div className="container d-flex justify-content-center">
        <div className="row justify-content-center responsive">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card shadow login-card">
              <div className="card-body p-4 p-md-5">
                <h1 className="text-center mb-3 login-title">
                  Log in to your account
                </h1>
                <p className="text-center text-muted mb-4">
                  Don't have an account yet?{" "}
                  <Link to="/prev-signup" className="login-link">
                    Register here
                  </Link>
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Email address or username"
                      className={`form-control form-control-lg ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      {...register("email", {
                        required: "Email or username is required",
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
                    Log in
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

export default Login;
