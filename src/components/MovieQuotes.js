import React, {useState} from "react";
import Quotes from "./Quotes";
import Search from "./Search";

function MovieQuotes({ quotes, NewQuotesForm, onAddQuote, handleFavorites }) {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  function toggleForm() {
    setShowForm((showForm) => !showForm);
  }

  const myQuotes = quotes.map((quote) => {
    return <Quotes quote={quote} handleFavorites={handleFavorites} />;
  });

  return (
    <div>
      <div>
        <button onClick={toggleForm} className="showForm">
          {showForm ? "Hide Form" : "Show Form"}
        </button>
        {showForm ? <NewQuotesForm onAddQuote={onAddQuote} /> : !showForm}
        <Search onSearch={setSearch} search={search} />
        {myQuotes}
      </div>
    </div>
  );
}
export default MovieQuotes