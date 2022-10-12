import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <h1 className="title">Where in the world?</h1>
      <button className="toggle-mode" onClick={toggleTheme}>
        {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}{" "}
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}

export default Header;
