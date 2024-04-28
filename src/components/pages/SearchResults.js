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
    const query = props["query"]
    const setQuery = props["setQuery"]
    const items = props["items"]
    return (<div className="SearchResultsContainer">
        <div className="SearchResultsSubContainer">
            <MapComponent />
        </div>
        <div className="SearchResultsSubContainer">
            <SearchBar handleNavigation={handleNavigation}  query={query} setQuery={setQuery}   width="90%"/>
            {
                items && items.map && items.map(element => {
                    return <SearchItem onClick={()=>{handleNavigation("product")}} data={element}/>
                })
            }
        </div>
    </div>)
}

export default SearchResults