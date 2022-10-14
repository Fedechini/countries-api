import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryInfo from "./components/CountryInfo";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        url: "https://restcountries.com/v3.1/all",
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

  if (error) return <Error message={error.message} />;

  if (!isLoaded) return <Loading />;

  return (
    <main className="app-container" id={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setFilterParam={setFilterParam}
              setQuery={setQuery}
              countries={countries}
              theme={theme}
              searchCountry={searchCountry}
              filterCountries={filterCountries}
            />
          }
        ></Route>

        <Route
          path="/country/:countryName"
          element={<CountryInfo theme={theme} countries={countries} />}
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
