import React, { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard/CountryCard";
import ShimmerEffectCountryList from "./ShimmerEffectCountryList";


const CountryList = ({ inputValue, filter }) => {

  const [countryDataa, setcountryData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((data) => {
      data.json().then((data) => setcountryData(data));
    });
  }, []);
  
  if(countryDataa === null){
    return <ShimmerEffectCountryList/>
  }
  
  

  const tempList = countryDataa.filter((country) => {
    return country.name.common.toLowerCase().includes(inputValue.toLowerCase());
  });
 

  const filterr = tempList.filter((e) => {
    return e.region.toLowerCase().includes(filter.toLowerCase());
  });
 
  const list = filterr.map((country) => {
    return (
      <CountryCard
        key={country.cca3}
        flag={country.flags.svg}
        countryName={country.name.common}
        countryCapital={country.capital}
        countryDATA = {country}
      />
    );
  });

  return countryDataa[0] === undefined ? (
    <ShimmerEffectCountryList/>
  ) : (
    <>
      <div className="country">{list}</div>
    </>
  );
};

export default CountryList;
