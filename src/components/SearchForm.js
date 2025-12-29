import React, { useState } from 'react';

function SearchForm({ initialQuery, onSearch }) {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    onSearch(query);
    setQuery(''); // Clear the input after hitting search button
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder=" What do you want to watch? "
        style={{
          width: '500px',
          height: '40px',
          fontSize: '1.2rem',
          marginRight: '10px',
          padding: '0 10px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          height: '40px',
          fontSize: '1.1rem',
          padding: '0 20px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;