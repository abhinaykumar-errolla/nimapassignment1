
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Moviecard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () =>{
      navigate(`/movie/${movie.id}`);
  }
  return (
    <div className='movies-container'>
    <div className='movie-card' onClick={handleClick}>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <h1 className='title'>{movie.title}</h1>
    <p className='rating'>Rating: {movie.vote_average}</p></div></div>
  )
}

export default Moviecard
 
     