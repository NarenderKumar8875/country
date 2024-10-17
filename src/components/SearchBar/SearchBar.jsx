import "./Searchbar.css";

const SearchBar = ({ setInputValue }) => {
  return (
    <>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => {
            setInputValue(e.target.value.toLocaleLowerCase());
          }}
          type="text"
          placeholder="Search for a Country"
        />
      </div>
    </>
  );
};

export default SearchBar;
