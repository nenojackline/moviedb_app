import React, { useState } from "react";
import "../App.css";
function NewQuotesForm({onAddQuote}) {
    const [formData, setFormData] = useState({
        movie: "",
        star: "",
        url:""
    })
    function handleChanges(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:8004/quotes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            movie: formData.movie,
            star: formData.star,
            url: formData.url,
          }),
        })
          .then((res) => res.json())
          .then((quotes) => {
            onAddQuote(quotes);
            setFormData({ ...formData, movie: "", star: "", url: "" });
          });

    }
    return (
      <form onSubmit={handleSubmit} className="quoteForm">
        <p>
          {" "}
          Movie Title:
          <input
            type="text"
            name="movie"
            placeholder="Movie Title"
            onChange={handleChanges}
            value={formData.movie}
            required
            minlength="4"
            autoComplete="none"
          ></input>
        </p>
        <p>
          {" "}
          Quote By:
          <input
            type="text"
            name="star"
            placeholder="Movie Star"
            onChange={handleChanges}
            value={formData.star}
            minlength="4"
            autoComplete="none"
            required
          ></input>
        </p>
        <p>
          Quote Url:
          <input
            type="text"
            name="url"
            placeholder="Quote Url"
            onChange={handleChanges}
            value={formData.url}
            minlength="4"
            autoComplete="none"
            required
          ></input>
        </p>
        <input
          type="submit"
          value="Post Quote"
          className="submitButton"
        ></input>
         </form>
    ); 
}
export default NewQuotesForm