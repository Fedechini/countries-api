import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function CountryInfo({ theme, countries }) {
  const [country, setCountry] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const { countryName } = useParams();

  const getCountry = () => {
    const find = countries.filter((country) => {
      return (
        country.name.common === countryName || country.cca3 === countryName
      );
    });

    setCountry(find[0]);
    setIsLoaded(true);
    console.log(find[0]);
    if (!find) {
      setError(error);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getCountry();
  }, [countryName]);

  if (error) return <h1>Error: {error.message}</h1>;

  if (!isLoaded)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return (
    <div className="countries__container">
      <Link to="/" className="btn-back">
        <BiArrowBack
          style={{
            color: theme === "dark" ? "white" : "black",
            display: "inline-block",
          }}
          size={20}
        />{" "}
        <p>Back</p>
      </Link>

      <div className="country__info">
        <div
          style={{
            backgroundImage: `url(${country.flags.svg})`,
          }}
          className="country__info-img"
        ></div>
        <div className="country__info-data">
          <h2>{country.name.common}</h2>

          <div className="country__info-specific">
            <p className="country__info-text">
              Native Name:{" "}
              <span className="country__info-span">
                {Object.values(country.name.nativeName)[0].official}
              </span>
            </p>
            <p className="country__info-text">
              Population:{" "}
              <span className="country__info-span">
                {country.population.toLocaleString("en-US")}
              </span>
            </p>
            <p className="country__info-text">
              Region:{" "}
              <span className="country__info-span">{country.region}</span>
            </p>
            <p className="country__info-text">
              Sub Region:{" "}
              <span className="country__info-span">{country.subregion}</span>
            </p>
            <p className="country__info-text">
              Capital:{" "}
              <span className="country__info-span">{country.capital[0]}</span>
            </p>
            <p className="country__info-text">
              Top Level Domain:{" "}
              <span className="country__info-span">{country.tld[0]}</span>
            </p>
            <p className="country__info-text">
              Currencies:{" "}
              <span className="country__info-span">
                {Object.values(country.currencies)[0].name}
              </span>
            </p>
            <p className="country__info-text">
              Languages:{" "}
              <span className="country__info-span">
                {Object.values(country.languages).join(", ")}
              </span>
            </p>
          </div>
          <div className="border-countries">
            <p className="country__info-text">Border Countries:</p>
            <div className="border__list">
              {country.borders ? (
                country.borders.map((val) => (
                  <Link to={`/country/${val}`}>
                    <p>{val}</p>
                  </Link>
                ))
              ) : (
                <p>None</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
