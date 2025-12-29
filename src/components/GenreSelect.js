import React from 'react';

function GenreSelect({ genres, selectedGenre, onSelect }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {genres.map(genre => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          style={{
            margin: '0 8px',
            padding: '10px 24px',
            backgroundColor: genre === selectedGenre ? 'blue' : 'gray',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: genre === selectedGenre ? 'bold' : 'normal',
            cursor: 'pointer',
            boxShadow: genre === selectedGenre ? '0 0 8px #333' : 'none',
            outline: genre === selectedGenre ? '2px solid #fff' : 'none',
          }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreSelect;