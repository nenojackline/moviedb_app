import React from "react";
import "../App.css";

function MovieList(props) {
    
    return (
      <div id="cardContainer">
        <div id="movieContainer">
          {props.movies.map((movie) => (
            <div className="movieCard">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>Movie Description</h3>
              <h5>Title: {movie.Title}</h5>
              <h5>Type: {movie.Type}</h5>
              <h5>Year: {movie.Year}</h5>
              <span>
                <button
                  styles={{
                    marginLeft: "0rem",
                    color: "red",
                    background: "black",
                    border: "none",
                    fontSize: "1.1rem",
                    width: "8rem",
                    height: "3rem",
                    cursor: "progress",
                    borderRadius: "1.5rem",
                  }}
                >
                  Add Favorites
                </button>
                <button
                  styles={{
                    marginLeft: "0.5rem",
                    color: "red",
                    background: "black",
                    border: "none",
                    fontSize: "1.2rem",
                    width: "8rem",
                    height: "3rem",
                    cursor: "progress",
                    borderRadius: "1.5rem",
                  }}
                >
                  Watch
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    );  
}
export default MovieList;