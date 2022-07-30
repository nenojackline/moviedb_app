import React, {useState} from "react";
function Quotes({ quote }) {
  const { id, movie, star, url } = quote;
  const [countLikes, setCountLikes] = useState(0);

  function toggleLike() {
    setCountLikes(countLikes + 1);
  }

  return (
    <div id="quoteContainer">
      <div className="card">
        <div key={id} className="quoteCard">
          <img height="400px" width="100%" src={url} alt={movie} />
          <p>Movie: {movie}</p>
          <p>By: {star}</p>
        </div>
        <span>
          <button onClick={toggleLike} className="like">
            Likes {countLikes}
          </button>

        </span>
      </div>
      </div>
    );
}
export default Quotes