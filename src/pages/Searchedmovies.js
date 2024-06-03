import React, { useEffect, useState } from 'react';
import { fetchSearchedMovies } from '../api/api';
import Moviecard from '../components/Moviecard';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';



const Searchedmovies= () => {
  const [movies, setMovies] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('query')
  const itemsPerPage = 6;


  useEffect(() => {
    if (query) {
      fetchSearchedMovies(query).then(response => setMovies(response.data.results));
    }
  }, [query]);

  const {
    currentItems : currentmovies,
    PaginationButtons
  } = Pagination(movies, itemsPerPage);


  return (
    <div className="home">
      <h1 className='title'>Searched Movies</h1>
      <div className="movie-grid">
        {currentmovies.map(movie => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationButtons />
    </div>
  );
};

export default Searchedmovies;