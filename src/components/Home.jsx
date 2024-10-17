import React, { useState } from "react";

import "./Header/Header.css";
import SearchBar from "./SearchBar/SearchBar";
import Sort from "./Sorting/Sort";
import CountryList from "../CountryList";
import { themeContext } from "../contexts/ThemeContext";

const Home = () => {
  const [inputValue, setInputValue] = useState(""); //Country Searching value
  const [filter, setFilter] = useState(""); // Country filter value
  
  return (
    <themeContext.Provider value="Narender">
      <div className={`search-and-filter-container`}>
        <SearchBar setInputValue={setInputValue} inputValue={inputValue} />
        <Sort setFilter={setFilter} />
      </div>
      <CountryList inputValue={inputValue} filter={filter} />
    </themeContext.Provider>
  );
};

export default Home;
