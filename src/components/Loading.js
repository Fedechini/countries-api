import React from "react";
import Header from "./Header";
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <>
      <Header />
      <div className="loading">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </>
  );
}

export default Loading;
