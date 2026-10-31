import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <ul id="movies">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;