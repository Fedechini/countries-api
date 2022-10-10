import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import { useEffect, useState } from "react";
import axios from "axios";

const allURL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState(null);
  const [theme, setTheme] = useState("dark");

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
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  if (!countries) return null;

  return (
    <main className="app-container" id={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Countries countries={countries} />
    </main>
  );
}

export default App;
