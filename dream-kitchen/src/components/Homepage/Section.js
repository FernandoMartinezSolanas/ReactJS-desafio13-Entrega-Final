import React from "react";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="test">
      <h1>DREAM KITCHEN</h1>
      <Link to={"/shop"}>
        <h2 className="Shop">Shop now</h2>
      </Link>
    </div>
  );
}

export default Section;
