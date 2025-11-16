import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  updateCompanyInfo,
  getCompanyInfo,
} from "../../services/editCompayInfo.service";

function EditCompanyInfoForm() {
  const [industry, setIndustry] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getCompanyInfo();
        console.log("Fetched company info:", data);

        // Update state based on actual keys from API
        setIndustry(data.companyIndustry || "");
        setFoundedYear(data.foundedYear ? String(data.foundedYear) : "");
        setDescription(data.companyDescription || "");
        setCountry(data.companyCountry || "");
      } catch (err) {
        console.error("Error fetching company info:", err);
        setError("Failed to load company information.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!industry || !foundedYear || !description || !country) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const data = {
        companyIndustry: industry,
        foundedYear: foundedYear,
        companyDescription: description,
        companyCountry: country,
      };

      console.log("Sending data:", data);

      await updateCompanyInfo(data);
      navigate("/company-home");
    } catch (err) {
      console.error(err);
      setError("Failed to update company info.");
    }
  };

  if (loading) return <p>Loading company info...</p>;

  return (
    <div className="container">
      <form className="form-control p-4" onSubmit={handleSubmit}>
        <h3>Edit Company Information</h3>
        <p>Provide your company details to help job seekers know you better.</p>
        <hr />

        <div className="form-body d-flex flex-column gap-3">
          <div>
            <label className="form-label">Company Industry *</label>
            <select
              className="p-2 rounded form-control"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
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
            <label className="form-label">Founded Year *</label>
            <input
              type="number"
              className="p-2 rounded form-control"
              min="1800"
              max={new Date().getFullYear()}
              value={foundedYear}
              onChange={(e) => setFoundedYear(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="form-label">Company Description *</label>
            <textarea
              className="p-2 rounded form-control"
              rows="4"
              placeholder="Briefly describe your company..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="form-label">Headquarters Country *</label>
            <select
              className="p-2 rounded form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
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

          {error && <p className="text-danger">{error}</p>}

          <button type="submit" className="btn btn-primary w-25 mt-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCompanyInfoForm;
