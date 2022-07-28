import React from "react";
import Quotes from "./Quotes";
import Search from "./Search";

function MovieQuotes({ quotes }) {
   const myQuotes = quotes.map((quote) => {
     return <Quotes quote={quote} />
   });
    return (
        <div>
            <Search />
         {myQuotes}
        </div>
    )
    
}
export default MovieQuotes