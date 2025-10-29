import "../css/signup.css";
import {
  getUsersData,
  setUserData,
} from "../services/Users.Login_SignUp.service";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Swal from "sweetalert2";
import CreateNewAccount from "./CreateNewAccount";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const fullData = {
      ...data,
      mobileNumber: `${data.countryCode}${data.mobileNumber}`,
    };

    const usersRes = await getUsersData();
    const users = usersRes.data;

    const emailExists = users.some((user) => user.email === fullData.email);
    const phoneExists = users.some(
      (user) => user.mobileNumber === fullData.mobileNumber
    );

    if (emailExists || phoneExists) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        html: `
    Email already used!<br/>
    Or mobile number already used!
  `,
      });
      return;
    }

    await setUserData(fullData).then(() => {
      Swal.fire({
        icon: "success",
        title: "Title here",
        text: "Your Account Have Been Created",
      }).then(() => {
        const safeUser = {
          firstName: fullData.firstName,
          lastName: fullData.lastName,
          email: fullData.email,
        };
        localStorage.setItem("user", JSON.stringify(safeUser));
        reset();
        navigate("/create-new-account");
        window.location.reload();
      });
    });
  };

  const [, SetUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  return (
    <div className="signup-container d-flex align-items-center justify-content-center min-vh-100 w-100">
      <div className="container d-flex justify-content-center">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-12">
            <div className="card shadow signup-card">
              <div className="card-body p-4 p-md-5">
                <h1 className="text-center mb-3 signup-title">
                  Create account
                </h1>
                <p className="text-center text-muted mb-4">
                  Already have an account?{" "}
                  <Link to="/login" className="signup-link">
                    Sign in
                  </Link>
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First name *</label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className={`form-control ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last name *</label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className={`form-control ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address *</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password *</label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className={`form-control ${
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
                        className="form-select signup-country-select"
                        style={{ maxWidth: "120px" }}
                        {...register("countryCode", { required: true })}
                        defaultValue="+20"
                      >
                        <option value="+20">🇪🇬 +20</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                      </select>

                      <input
                        type="tel"
                        placeholder="XXX-XXXXXXX"
                        className={`form-control ${
                          errors.mobileNumber ? "is-invalid" : ""
                        }`}
                        {...register("mobileNumber", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9]{7,15}$/,
                            message: "Invalid mobile number",
                          },
                        })}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <div className="invalid-feedback d-block">
                        {errors.mobileNumber.message}
                      </div>
                    )}
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
