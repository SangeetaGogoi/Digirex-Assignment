import React from 'react';

export default function Search({ handleSearch }) {
  return (
    <input
      className='search-input'
      placeholder='Search for names'
      onChange={(event) =>
        handleSearch(event.target.value)
      }
    />
  );
}
