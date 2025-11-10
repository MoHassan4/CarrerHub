import "../css/signup.css";
import { setUserData } from "../services/Users.Login_SignUp.service";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import CreateNewAccount from "./CreateNewAccount";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    // Prepare phone Number
    const fullData = {
      ...data,
      phoneNumber: `${data.countryCode}${data.phoneNumber}`,
    };

    const response = await setUserData(fullData);
    const resData = response.data;

    if (resData.status) {
      Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "Your account has been created successfully",
      }).then(() => {

        localStorage.setItem(
          "user",
          JSON.stringify({ token: resData.token, role: resData.role })
        );

        reset();
        navigate("/create-new-account");
        window.location.reload();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: resData.message || "Something went wrong!",
      });
    }
  }

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
                    <label className="form-label">Phone Number *</label>
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
                          errors.phoneNumber ? "is-invalid" : ""
                        }`}
                        {...register("phoneNumber", {
                          required: "Phone Number is required",
                          pattern: {
                            value: /^[0-9]{7,15}$/,
                            message: "Invalid phone Number",
                          },
                        })}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <div className="invalid-feedback d-block">
                        {errors.phoneNumber.message}
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
}

export default Signup;
