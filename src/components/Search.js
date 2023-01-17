import React from "react";

function Search({ searchListings }) {
  
  function handleSubmit(e) {
    e.preventDefault();
    searchListings(e.target["search"].value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
