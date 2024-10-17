import React, { useEffect, useState } from "react";
import "./Countrydetail.css";
import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import ShimmerEffectCountryDetail from "../../ShimmerEffectCountryDetail";

const CountryDetail = () => {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { state } = useLocation();

  function updateCounryData(data) {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      area: Intl.NumberFormat("en-IN").format(data.area),
      population: new Intl.NumberFormat("en-IN").format(data.population),
      capital: data.capital,
      region: data.region,
      nativeName: Object.values(data.name.nativeName)[0].official,
      curruncy: Object.values(data.currencies)[0].name,
      curruncySymbol: Object.values(data.currencies)[0].symbol,
      languages: Object.values(data.languages),
      timezone: data.timezones,
    });
    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((borders) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${borders}`).then(
          (res) =>
            res.json().then(([border]) => {
              return border.name.common;
            })
        );
      })
    ).then((borderData) => {
      setCountryData((prev) => {
        return { ...prev, borders: borderData };
      });
    });
  }

  useEffect(() => {
    if (state) {
      updateCounryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}`).then((data) => {
      data
        .json()
        .then(([data]) => {
          updateCounryData(data);
        })
        .catch((err) => {
          setNotFound(true);
        });
    });
  }, [countryName]);

  if (notFound) {
    return (
      <div>
        <h1>Country Not Found</h1>
      </div>
    );
  }
  if (countryData === null) {
    return <ShimmerEffectCountryDetail />;
  }
  if (countryData.borders === undefined) {
    return <ShimmerEffectCountryDetail />;
  }
  return (
    
    <div className={`country`}>
      <img src={countryData.flag} alt="" />
      <div className="country-detal">
        <h1>{countryData.name}</h1>
        <p>
          <b>Capital: </b>
          {countryData.capital.join(" , ")}
        </p>
        <p>
          <b>Population: </b>
          {countryData.population}
        </p>
        <p>
          <b>Area: </b>
          {countryData.area} sq KM
        </p>
        <p>
          <b>Region: </b>
          {countryData.region}
        </p>
        <p>
          <b>Native Name: </b>
          {countryData.nativeName}
        </p>
        <p>
          <b>Curruncy Symbol and Name: </b>(<b>{countryData.curruncySymbol}</b>)
          {countryData.curruncy}
        </p>
        <p>
          <b>Languages: </b>
          {countryData.languages.join(" , ")}
        </p>
        <p>
          <b>Time Zone: </b>
          {countryData.timezone.join(" , ")}
        </p>

        <div className="links">
          <b>Borders:</b>
          {countryData.borders.map((border) => {
            return (
              <Link key={border} to={`/${border}`}>
                {border}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
    
  );
};

export default CountryDetail;
