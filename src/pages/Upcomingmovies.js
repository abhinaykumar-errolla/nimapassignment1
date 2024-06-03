import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api/api';
import Moviecard from '../components/Moviecard';
import Pagination from '../components/Pagination';

const Upcomingmovies = () => {
  const [movies, setMovies] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchUpcomingMovies().then(response => setMovies(response.data.results));
  }, []);
  const {
    currentItems : currentmovies,
    PaginationButtons
  }= Pagination(movies, itemsPerPage);

  return (
    <div className="home">
      <h1 className='title'>Upcoming Movies</h1>
      <div className="movie-grid">
        {currentmovies.map(movie => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationButtons />
    </div>
  );
};

export default Upcomingmovies;