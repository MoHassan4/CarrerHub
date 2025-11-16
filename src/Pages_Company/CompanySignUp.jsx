import "../css/signup.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setCompaniesData } from "../services/Company.SignUp.service";
import Swal from "sweetalert2";

const CompanySignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await setCompaniesData(data);
    const resData = response.data;

    if (resData.status) {
      localStorage.setItem(
        "company",
        JSON.stringify({
          token: resData.token,
          role: resData.role,
        })
      );

      Swal.fire({
        icon: "success",
        title: "Almost there!",
        text: "Your company account has been created successfully. You’ll now be redirected to complete the last step in the Company Info Form.",
        timer: 2500,
        showConfirmButton: false,
      }).then(() => {
        reset();
        navigate("/company-info-form");
      });
    } else {
      // Error alert
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: resData.message || "Failed to create company account",
      });
    }
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center min-vh-100 w-100">
      <div className="container d-flex justify-content-center">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-12">
            <div className="card shadow signup-card">
              <div className="card-body p-4 p-md-5">
                <h1 className="text-center mb-3 signup-title">
                  Create Company Account
                </h1>
                <p className="text-center text-muted mb-4">
                  Already have a company account?{" "}
                  <Link to="/company-login" className="signup-link">
                    Sign in
                  </Link>
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Company name *</label>
                      <input
                        type="text"
                        placeholder="Enter company name"
                        className={`form-control ${
                          errors.companyName ? "is-invalid" : ""
                        }`}
                        {...register("companyName", {
                          required: "Company name is required",
                        })}
                      />
                      {errors.companyName && (
                        <div className="invalid-feedback">
                          {errors.companyName.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Company representative *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter representative name"
                        className={`form-control ${
                          errors.companyRepresentative ? "is-invalid" : ""
                        }`}
                        {...register("companyRepresentative", {
                          required: "Representative name is required",
                        })}
                      />
                      {errors.companyRepresentative && (
                        <div className="invalid-feedback">
                          {errors.companyRepresentative.message}
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
                    <label className="form-label">Company phone number *</label>
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
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9]{7,15}$/,
                            message: "Invalid mobile number",
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
                    Create Company Account
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

export default CompanySignup;
