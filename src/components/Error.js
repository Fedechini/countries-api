import React from "react";
import Header from "./Header";

function Error({ message }) {
  return (
    <>
      <Header />
      <div className="error-container">
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default Error;
