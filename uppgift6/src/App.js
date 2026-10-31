import React, { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1>Min filmlista</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <hr />
      <h2>Inlagda filmer</h2>
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;