import React from "react";

interface SearchBoxProps {
  searchField: string;
  searchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

const SearchBox:React.FC<SearchBoxProps> = ({ searchField, searchChange }) => {
  return (
    <form className="pa2">
      <label>
        <h4>Search Robots</h4>
        <input
        aria-label='Search Robots'
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          name="searchrobot"
          value={searchField}
          onChange={searchChange}
        />
      </label>
    </form>
  );
};

export default SearchBox;
