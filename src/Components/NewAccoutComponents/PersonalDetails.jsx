import { useState } from "react";
import { setStep2 } from "../../services/Users.Login_SignUp.service";

function PersonalDetails({ next, back, userID }) {
  const [birthDate, setBirthDate] = useState("");
  const [resCountry, setResCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!birthDate || !resCountry || !nationality || !gender) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    const data = {
      userId: userID,
      birthDate,
      country: resCountry,
      nationality,
      gender,
    };

    // Send to API
    await setStep2(data);

    next();
  };

  return (
    <div className="container">
      <form className="form-control p-4" onSubmit={handleSubmit}>
        <h3>Personal Details</h3>
        <p>Tell us a bit about you to get started</p>
        <hr />

        <div className="form-body d-flex flex-column gap-3 pb-5">
          <img
            src="https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg"
            alt="profile pic"
            className="rounded-circle align-self-center"
            style={{ width: "120px" }}
          />

          <div className="bd-inputs d-flex flex-column">
            <label htmlFor="bd" className="form-label">
              Birth date *
            </label>
            <input
              type="date"
              id="bd"
              className="p-2 rounded form-control"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>

          <div className="res-country-input d-flex flex-column">
            <label htmlFor="res-country" className="form-label">
              Residence country *
            </label>
            <select
              id="res-country"
              className="p-2 rounded form-control"
              value={resCountry}
              onChange={(e) => setResCountry(e.target.value)}
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

          <div className="nationality d-flex flex-column">
            <label htmlFor="na" className="form-label">
              Nationality *
            </label>
            <select
              id="na"
              className="p-2 rounded form-control"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
            >
              <option value="" disabled>
                Select nationality
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

          <div className="gender-input">
            <p className="form-label">Gender *</p>
            <div className="m-or-f d-flex gap-3">
              <input
                type="radio"
                name="gender"
                className="form-check-input"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="male" className="user-select-none">
                Male
              </label>

              <input
                type="radio"
                name="gender"
                className="form-check-input"
                id="female"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="female" className="user-select-none">
                Female
              </label>
            </div>
          </div>

          {error && <p className="text-danger">{error}</p>}
        </div>

        <div className="form-btns d-flex justify-content-between">
          <button
            type="button"
            className="back-btn btn btn-outline-primary py-2 px-3 w-25"
            onClick={back}
          >
            Back
          </button>
          <button
            type="submit"
            className="ca-form-btn btn btn-primary py-2 px-3 w-25"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
