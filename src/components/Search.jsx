import React, { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim().toLowerCase()) {
      onSearch(city);
    }
  };

  return (
    <div className="row justify-content-center mb-5">
      <div className="col-md-8">
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center gap-2">
            <i className="fas fa-search text-white me-2"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
