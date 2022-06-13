import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './react-app-env';

export const App: React.FC = () => {
  const [movies, setMovies] = useState([...moviesFromServer]);

  const addMovie = (movie: Movie) => {
    setMovies([...movies, movie]);

    return movies;
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie
          addMovie={addMovie}
        />
      </div>
    </div>
  );
};
