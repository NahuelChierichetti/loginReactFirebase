import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} className="search-input" />
      <HiOutlineSearch className="search-icon" />
    </div>
  );
}

export default SearchBar;