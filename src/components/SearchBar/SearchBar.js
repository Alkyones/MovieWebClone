import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


export const SearchBar = (promps) => {
  return (
    <div className='search'>
      <input placeholder='Search for movies...' value={promps.searchValue} onChange={(e) => {promps.setSearch(e.target.value)}}></input>
      <FontAwesomeIcon icon={faSearch} className='img-button' onClick={()=>{promps.setNew(promps.searchValue)}}></FontAwesomeIcon>
    </div>
  )
}
