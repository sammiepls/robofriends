import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <form className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        name="searchrobot"
        value={searchField}
        onChange={searchChange}
      />
    </form>
  );
};

export default SearchBox;
