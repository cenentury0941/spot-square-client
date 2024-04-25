import React from "react";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import MapComponent from "../MapComponent";
import SearchBar from "../SpotSearchBar";
import SearchItem from "../SearchItem";
import SpotSearchItemCard from "../SpotSearchItemCard";

function SearchResults(props){
    const handleNavigation = props["handleNavigation"]

    return (<div className="SearchResultsContainer">
        <div className="SearchResultsSubContainer">
            <MapComponent />
        </div>
        <div className="SearchResultsSubContainer">
            <SearchBar handleNavigation={handleNavigation} width="90%"/>
            <SearchItem onClick={()=>{handleNavigation("product")}}  position="SearchItemContainerFirst"/>
            <SearchItem onClick={()=>{handleNavigation("product")}}  position="SearchItemContainerSecond" />
            <SearchItem onClick={()=>{handleNavigation("product")}}  position="SearchItemContainerThird" />
            <SearchItem onClick={()=>{handleNavigation("product")}}  />
            <SearchItem onClick={()=>{handleNavigation("product")}}  />
            <SearchItem onClick={()=>{handleNavigation("product")}}  />
        </div>
    </div>)
}

export default SearchResults