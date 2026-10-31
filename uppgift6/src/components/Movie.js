import React from 'react';

function Movie({ movie }) {
  const stars = [];
  for (let i = 0; i < movie.rating; i++) {
    stars.push(
      <img
        key={i}
        src="images/star.png"
        alt="Star"
      />
    );
  }

  return (
    <li>
      {movie.title}
      <img
        src="images/delete.png"
        alt="Delete movie"
        className="delete-movie-icon"
      />
      {stars}
    </li>
  );
}

export default Movie;