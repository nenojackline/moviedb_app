import React from "react";

function Search(props) {
    
    
    return (
      <div>
        <input
          type="search"
          placeholder="Search..."
          value={props.value}
          onChange={(e) => props.setSearch(e.target.value)}
        ></input>
      </div>
    );  
}
export default Search