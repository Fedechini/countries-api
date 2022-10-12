import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import CountrieForm from "./components/CountriesForm";
import { useEffect, useState } from "react";
import axios from "axios";

let allURL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [query, setQuery] = useState("");
  const [filterParam, setFilterParam] = useState("All");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const getAll = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: allURL,
      });

      setCountries(res.data);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  const searchCountry = (countries) => {
    // eslint-disable-next-line array-callback-return
    return countries.filter((country) => {
      if (query === "") return true;

      if (country.name.common.toLowerCase().includes(query.toLowerCase())) {
        return country;
      }
    });
  };

  const filterCountries = (countries) => {
    // eslint-disable-next-line array-callback-return
    return countries.filter((country) => {
      if (filterParam === "All") return true;

      if (country.region === filterParam) return country;
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  if (error) return <h1>Error: {error.message}</h1>;

  if (!isLoaded)
    return (
      <>
        <Header />
        <h1>Loading...</h1>
      </>
    );

  return (
    <main className="app-container" id={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <CountrieForm
        theme={theme}
        setQuery={setQuery}
        setFilterParam={setFilterParam}
      />
      <Countries
        countries={countries}
        searchCountry={searchCountry}
        filterCountries={filterCountries}
      />
    </main>
  );
}

export default App;
