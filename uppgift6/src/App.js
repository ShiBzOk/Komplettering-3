import React, { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import OrderByAlphaButton from './components/OrderByAlphaButton';
import OrderByGradeButton from './components/OrderByGradeButton';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleSortAlpha = () => {
    const sorted = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMovies(sorted);
  };

  const handleSortGrade = () => {
    const sorted = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sorted);
  };

  return (
    <div className="container mt-4">
      <h1>Min filmlista</h1>

      <AddMovieForm onAddMovie={handleAddMovie} />

      <hr />

      <h2>Inlagda filmer</h2>
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />

      <OrderByAlphaButton onSortAlpha={handleSortAlpha} />
      <OrderByGradeButton onSortGrade={handleSortGrade} />
    </div>
  );
}

export default App;