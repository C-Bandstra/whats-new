import React from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

const SearchForm = ()  => {
  return (
    <header className="main-header">
      <input className="search-input" type="search" placeholder="Search for news articles here."></input>
      <button className="search-btn">Search Now</button>
    </header>
  )
}

export default SearchForm;