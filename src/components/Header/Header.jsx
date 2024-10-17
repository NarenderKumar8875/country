import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));

  if (mode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <div className="header">
      <Link to={`/`}>
        <h3>Where in the world?</h3>
      </Link>
      <div
        className="dark-logo"
        onClick={() => {
          setMode(!mode);
          localStorage.setItem("mode", !mode);
        }}
      >
        <i className={`fa-solid fa-${mode ? "moon" : "sun"}`}></i>

        <p>{mode ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default Header;
