import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'; 
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [movies, setMovies] = useState([]);

  // fetch data from the API to populate on the homepage
  useEffect(()=>{
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(response => setMovies(response))
  }, [])

  return (
    <div className="root">
      <Navbar />
      <Header/>
      <Home movies={movies} />
    </div>
  );
}

export default App