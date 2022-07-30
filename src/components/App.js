import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import "../App.css";
import Home from "./Home";
import About from "./About";
import MovieQuotes from "./MovieQuotes";
import NewQuotesForm from "./NewQuotesForm";

function App() {
  const [app, setApp] = useState("/");
  const [quote, setQuote] = useState([])

  function getCurrentPage() {

  }
function onAddQuote(newQuote) {
        setQuote([...quote, newQuote]);
}

    useEffect(() => {
        fetch("http://localhost:8004/quotes")
          .then((res) => res.json())
          .then((quotes) => setQuote(quotes));
    }, [])

  return (
    <div>
      <h1>MOVIE HUB</h1>
      <Home />
      <NavBar onChangePage={setApp} />
      {getCurrentPage()}

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/moviequotes"
          element={
            <MovieQuotes
              quotes={quote}
              NewQuotesForm={NewQuotesForm}
              onAddQuote={onAddQuote}

            />
          }
        ></Route>

        <Route exact path="/about" element={<About />}></Route>
        <Route path="*" element={<h1>Unexpected Error Occurred</h1>}></Route>
      </Routes>
    </div>
  );
}