import React from "react";
import animated_logo from "../images/loading.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={animated_logo} alt="loading..." />
    </div>
  );
}

export default Loader;
