import React from 'react';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

function App() {
  const handleAddMovie = (movie) => {
    console.log('Movie submitted:', movie);
  };

  return (
    <div className="container mt-4">
      <h1>Min filmlista</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;