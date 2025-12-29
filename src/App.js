import React, { useState } from 'react';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

function App() {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('ALL'); // default genre
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  return (
    // Applying background color
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '40px' }}>
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center' }}>Counter</h2>
        <Counter initialValue={0} />
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center' }}>Search Form</h2>
        <SearchForm
          initialQuery=""
          onSearch={q => {
            setSearch(q);
            console.log('Search for:', q); // Log the search query
          }}
        />
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center' }}>Genre Select</h2>
        <GenreSelect
         genres={genres}
         selectedGenre={selectedGenre}
         onSelect={genre => {
         setSelectedGenre(genre);
         console.log('Genre selected:', genre); // Log the selected genre
  }}
/>
      </div>
    </div>
  );
}

export default App;