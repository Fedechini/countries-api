import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function CountriesForm({ theme, setQuery, setFilterParam }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterParam(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(input);

    setInput("");
  };

  return (
    <form className="countries-form" onSubmit={handleSubmit}>
      <div className="form__left">
        <span>
          <BsSearch
            style={{
              position: "absolute",
              color: theme === "dark" ? "white" : "black",
              left: "8px",
              bottom: "17px",
            }}
            size={20}
          />
        </span>
        <input
          type="search"
          placeholder="Search for a country..."
          name="search-form"
          className="country-input"
          value={input}
          onChange={handleChange}
        />
      </div>

      <select
        onChange={handleFilterChange}
        className="filter-input"
        aria-label="Filter by Region"
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}

export default CountriesForm;
