import React, {useState} from "react";
function Quotes({ quote }) {
    const { id, movie, star, url } = quote
    const [isLike, setLike] = useState(false)
    const [countLikes, setCountLikes]=useState(0)
    function toggleLike() {
        setLike(isLike => !isLike)
        setCountLikes(countLikes + 1)
    }
    return (
      <div id="quoteContainer">
        <div className="card">
          <div key={id} className="quoteCard">
            <img height="400px" width='100%' src={url} />
            <span>
              <p>Movie: {movie}</p>
              <p>By: {star}</p>
            </span>
                </div>
                <button onClick={toggleLike}>{isLike ? "Liked" : "Unlike"} {countLikes}</button>   
        </div>
      </div>
    );
}
export default Quotes