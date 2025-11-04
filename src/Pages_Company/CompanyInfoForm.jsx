import { useState } from "react";
import { useNavigate } from "react-router";


function CompanyInfoForm() {
  const [industry, setIndustry] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!industry || !foundedYear || !description || !country || !logo) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    navigate("/company-home");
  };

  return (
    <div className="container">
      
      <form className="form-control p-4" onSubmit={handleSubmit}>
        <h3>Tell Us About Your Company</h3>
        <p>Provide your company details to help job seekers know you better.</p>
        <hr />

        <div className="form-body d-flex flex-column gap-3">
          <div>
            <label htmlFor="industry" className="form-label">
              Company Industry *
            </label>
            <select
              id="industry"
              className="p-2 rounded form-control"
              required
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="" disabled>
                Select industry
              </option>
              <option value="it">Information Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="construction">Construction</option>
              <option value="marketing">Marketing</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="telecom">Telecommunications</option>
              <option value="transport">Transportation</option>
            </select>
          </div>

          <div>
            <label htmlFor="founded-year" className="form-label">
              Founded Year *
            </label>
            <input
              id="founded-year"
              type="number"
              min="1800"
              max={new Date().getFullYear()}
              className="p-2 rounded form-control"
              required
              value={foundedYear}
              onChange={(e) => setFoundedYear(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description" className="form-label">
              Company Description *
            </label>
            <textarea
              id="description"
              className="p-2 rounded form-control"
              rows="4"
              required
              placeholder="Briefly describe your company..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="country" className="form-label">
              Headquarters Country *
            </label>
            <select
              id="country"
              className="p-2 rounded form-control"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="" disabled>
                Select country
              </option>
              <option value="egypt">Egypt</option>
              <option value="uae">UAE</option>
              <option value="saudi">Saudi Arabia</option>
              <option value="kuwait">Kuwait</option>
              <option value="qatar">Qatar</option>
              <option value="bahrain">Bahrain</option>
              <option value="morocco">Morocco</option>
              <option value="tunisia">Tunisia</option>
              <option value="algeria">Algeria</option>
              <option value="libya">Libya</option>
              <option value="sudan">Sudan</option>
              <option value="jordan">Jordan</option>
              <option value="lebanon">Lebanon</option>
              <option value="oman">Oman</option>
              <option value="iraq">Iraq</option>
              <option value="palestine">Palestine</option>
            </select>
          </div>

          <div>
            <label htmlFor="logo" className="form-label">
              Company Logo Upload *
            </label>
            <input
              id="logo"
              type="file"
              accept="image/*"
              className="p-2 rounded form-control"
              required
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button
            type="submit"
            className="ca-form-btn btn btn-primary py-2 px-3 my-4 align-self-end w-25"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default CompanyInfoForm;
