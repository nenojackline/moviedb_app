import React from "react"
import Movie from "./Movie";

function Movies({movie}){
    return (
        <div className="card-movie">
            <img src={movie.image} alt="image"></img>
            <p>{movie.className}</p>
            <p id="category">{item.category}</p>
            <h2>{movie.rating}</h2>
           
        </div>
    )
    
}

export default Movies;