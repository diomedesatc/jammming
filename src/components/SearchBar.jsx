import React, { useState } from 'react'
import Search from './Search';
import SearchResult from './SearchResult';

const SearchBar = () => {
  const [name, setName] = useState('');

  function handleOnClick(e){
    setName(e.target.value);

  }
  return (
    <div>
      <ul>
        <li>
          <input 
          type='text' 
          id='musicName' 
          name='musicName' 
          placeholder='Search...'
          onChange={handleOnClick}
          />
        </li>
        <li>
          <Search />
        </li>
      </ul>
      <SearchResult songName={name} />      
    </div>
  )
}

export default SearchBar
