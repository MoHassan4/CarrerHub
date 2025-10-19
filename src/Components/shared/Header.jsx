import React from "react";
import "../../css/cssShared/HeaderStyle.css";


function Header({h1, inSpan, p}) {
  return (
    <div className="header welcome">
      <h1 className="text-center">
        {h1} <span>{inSpan}</span>
      </h1>
      <p className="text-center">{p}</p>
    </div>
  );
}

export default Header;
