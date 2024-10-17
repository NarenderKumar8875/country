import React from "react";
import "./Sort.css";

const Sort = ({ setFilter }) => {
  return (
    <div className="sorting">
      <select
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="">None</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
};

export default Sort;
