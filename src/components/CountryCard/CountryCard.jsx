import React from "react";
import "./Countrycard.css";
import { Link } from "react-router-dom";

const CountryCard = ({ countryName, countryCapital, flag , countryDATA}) => {
  
  return countryCapital === undefined?"":(
    <div className="card">
      <Link to={`/${countryName}`} state={countryDATA}>
        <img src={flag} />
        <div className="card-detail">
          <h3>{countryName}</h3>
          <p>{countryCapital.join(" , ")}</p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
