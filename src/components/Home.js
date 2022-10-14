import React from "react";
import CountriesForm from "./CountriesForm";
import Countries from "./Countries";

function Home({
  searchCountry,
  filterCountries,
  theme,
  countries,
  setQuery,
  setFilterParam,
}) {
  return (
    <>
      <CountriesForm
        theme={theme}
        setQuery={setQuery}
        setFilterParam={setFilterParam}
      />
      <Countries
        countries={countries}
        searchCountry={searchCountry}
        filterCountries={filterCountries}
      />
    </>
  );
}

export default Home;
