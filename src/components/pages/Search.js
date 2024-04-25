import React from "react";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import SearchBar from "../SpotSearchBar";

function Search(props){

    const handleNavigation = props["handleNavigation"]

    return( <div className="SearchBackground SearchContainer">
        <SearchBar handleNavigation={handleNavigation} width="50%"/>
    </div> )
}

export default Search