import React from "react";
import "./Spineer.css";

const Spineer = () => {
  return (
    <div className="spineer-container">
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spineer;
