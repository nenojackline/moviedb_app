import React, {useState, useEffect} from "react";
import Movies from "./Movies";
function Home() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=blood&apikey=30d6f0cb`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, [])
  return (
    <div>
      <Movies movies={movies}/>
   </div>
  );
}

export default Home;