import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/cssShared/SearchFormStyle.css";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchQuery = encodeURIComponent(query);
    const searchCountry = encodeURIComponent(country);

    if (query && country) {
      navigate(`/find-jobs/${searchQuery}/${searchCountry}`);
    } else if (query) {
      navigate(`/find-jobs/${searchQuery}`);
    } else if (country) {
      navigate(`/find-jobs/${searchCountry}`);
    } else {
      navigate(`/find-jobs`);
    }
  };

  return (
    <div className="search-form my-5 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2">
      <input
        type="search"
        className="form-control border-1 p-3"
        placeholder="Search for jobs..."
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="form-select border-1 border-start p-3"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Not Selected</option>
        <option value="Egypt">Egypt</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="Qatar">Qatar</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Oman">Oman</option>
        <option value="Jordan">Jordan</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Iraq">Iraq</option>
        <option value="Syria">Syria</option>
        <option value="Yemen">Yemen</option>
        <option value="Libya">Libya</option>
        <option value="Sudan">Sudan</option>
        <option value="Morocco">Morocco</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Algeria">Algeria</option>
        <option value="Palestine">Palestine</option>
      </select>

      <button className="btn myBtn px-4 text-white w-50" onClick={handleSearch}>
        Find Now
      </button>
    </div>
  );
}

export default SearchForm;
