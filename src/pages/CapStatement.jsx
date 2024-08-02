import React from "react";
import cap from "../images/cap_statement.pdf";

const CapStatement = () => {
  return (
    <div className="cap-statement">
      <iframe className="pdf" src={cap}></iframe>
    </div>
  );
};

export default CapStatement;
