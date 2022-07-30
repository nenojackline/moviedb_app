import React from "react";

function Search({ search, onSearch }) {
  function handleSearch(e) {
      onSearch(e.target.value);
  }
return (
  <div>
        <input
            className="search"
      type="search"
      value={search}
      placeholder="Search..."
      onChange={handleSearch}
    ></input>
  </div>
);
}
export default Search