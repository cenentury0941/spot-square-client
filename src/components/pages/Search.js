import React from "react";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import SearchBar from "../SpotSearchBar";

function Search(props){

    const handleNavigation = props["handleNavigation"]
    const query = props["query"]
    const setQuery = props["setQuery"]

    return( <div className="SearchBackground SearchContainer">
        <SearchBar handleNavigation={handleNavigation}  query={query} setQuery={setQuery}  width="50%"/>
    </div> )
}

export default Search