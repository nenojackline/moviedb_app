import React from "react";

function Navbar(){
    return(
        <nav className="navbar">
            <h1>MOVIEDB APP</h1>
            <ul className="navbar-list">
                <li>
                    <form >
                        <input type="text" id="search-input" placeholder="search item.."></input>
                        <button type="submit" id="btn-search">Search</button>
                    </form>
                </li>
                <li>Home</li>
                <li>Movies</li>
                <li className="dropbtn">Categories</li>
            </ul>
        </nav>
    )

}
export default Navbar;