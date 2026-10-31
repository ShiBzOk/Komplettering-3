import React from 'react';
import Movie from './Movie';

function MovieList({ movies, onDeleteMovie }) {
  return (
    <ul id="movies">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;