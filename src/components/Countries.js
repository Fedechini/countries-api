import React from "react";

function Countries({ countries }) {
  return (
    <div className="countries__container">
      <ul className="countries-list">
        {countries.map((countrie, i) => {
          return (
            <li className="countrie" key={i}>
              <div
                style={{
                  backgroundImage: `url(${countrie.flags.svg})`,
                }}
                className="countrie-img"
              ></div>
              <div className="countrie__data">
                <h2 className="countrie__name">{countrie.name.common}</h2>
                <p className="countrie__data-text">
                  Population:{" "}
                  <span className="countrie__data-span">
                    {countrie.population}
                  </span>
                </p>
                <p className="countrie__data-text">
                  Region:{" "}
                  <span className="countrie__data-span">{countrie.region}</span>
                </p>
                <p className="countrie__data-text">
                  Capital:{" "}
                  <span className="countrie__data-span">
                    {countrie.capital}
                  </span>
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
