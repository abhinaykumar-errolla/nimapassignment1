import { React, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [query , setQuery] = useState('');
  const handleSearch =(e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <nav className='header-container'>
    <div><Link to="/" className='header-link'><p className='heading'>MovieDb</p></Link></div>
    <div className='header-content'>
    <Link className='header-link mobile-view' to="/"><p>Popular</p></Link>
    <Link className='header-link mobile-view' to="/upcoming"><p>Upcoming</p></Link>
    <Link className='header-link mobile-view' to="/toprated"><p>Toprated</p></Link>
    
    <form className="search-form" onSubmit={(handleSearch)}><input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='search movies' className="search-input"/>
    <button className='search-button' type="submit">search</button></form>
    </div>
    </nav>
  )
}

export default Navbar;