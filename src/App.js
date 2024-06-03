import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar"
import Topratedpage from "./pages/Topratedpage"
import Upcomingmovies from "./pages/Upcomingmovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Searchedmovies from "./pages/Searchedmovies";
import Moviedetail from "./pages/Moviedetail";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/toprated" element={<Topratedpage/>} />
    <Route path="/upcoming" element={<Upcomingmovies/>} />
    <Route path="/search" element={<Searchedmovies />} />
    <Route path="/movie/:id" element={<Moviedetail />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
