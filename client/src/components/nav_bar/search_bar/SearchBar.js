import React, { Component } from 'react'
import SearchIcon from '../icons/SearchIcon';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className='search'>
        <input placeholder='Search' className='search-bar' type="text"/>
        <button className='search-button'><SearchIcon /></button>
      </div>
    )
  }
}
export default SearchBar;