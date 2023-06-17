import React from 'react';
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue
}) {
  return(
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value)
      }}
    />
  )
}

export { TodoSearch };