import React from "react";

function Countries({ countries, searchCountry, filterCountries }) {
  return (
    <div className="countries__container">
      <ul className="countries-list">
        {filterCountries(searchCountry(countries)).map((country, i) => {
          return (
            <li className="country" key={i}>
              <div
                style={{
                  backgroundImage: `url(${country.flags.svg})`,
                }}
                className="country-img"
              ></div>
              <div className="country__data">
                <h2 className="country__name">{country.name.common}</h2>
                <p className="country__data-text">
                  Population:{" "}
                  <span className="country__data-span">
                    {country.population}
                  </span>
                </p>
                <p className="country__data-text">
                  Region:{" "}
                  <span className="country__data-span">{country.region}</span>
                </p>
                <p className="country__data-text">
                  Capital:{" "}
                  <span className="country__data-span">{country.capital}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Countries;
