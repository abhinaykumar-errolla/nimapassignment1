import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api';
import { fetchMovieCast } from '../api/api';
import './details.css';


const Moviedetail = () => {
const [movie, setMovie] = useState(null);
const { id } = useParams();
const [cast, setCast] = useState([]);

  useEffect(() => {
    if(id) {
    fetchMovieDetails(id).then(response => setMovie(response.data));
    fetchMovieCast(id).then(response => setCast(response.data.cast));
    }
  }, [id]);

  if (!movie) return <div>Loading...</div>
  return (
    <div className='movie-details'>
      <div className='movie-heading'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt = {movie.title} />
        <div className='movie-info'>
          <h1 className='title'>{movie.title}</h1>
          <p className='description'>{movie.overview}</p>
          <p className='date'>Release Date: {movie.release_date}</p>
          <p className='rating'>Rating: {movie.vote_average}</p>
        </div>
      </div>
      <h2>CAST</h2>
      <div className='cast-list'>{cast.map(member => (
        <div key = {member.cast_id} className='cast-person'>
        <img src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt = {member.name} />
        <p className='name'>{member.name} as {member.character}</p>
        </div>
      ))}</div>
      </div>

  );
};

export default Moviedetail;