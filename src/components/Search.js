import React, { useState } from "react";

function Search({allPlants}) {

  const [query , setQuery] = useState("")
  
  function handleChange(e){
     setQuery(e.target.value)
  }

  return (

    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={query}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
