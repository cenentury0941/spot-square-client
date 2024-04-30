import React, { useState } from "react";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import MapComponent from "../MapComponent";
import SearchBar from "../SpotSearchBar";
import SearchItem from "../SearchItem";
import SpotSearchItemCard from "../SpotSearchItemCard";

function SearchResults(props){
    const handleNavigation = props["handleNavigation"]
    const selectedItem = props["selectedItem"]
    const query = props["query"]
    const setQuery = props["setQuery"]
    const items = props["items"]
    const [ markers , setMarkers ] = useState([])

    return (<div className="SearchResultsContainer">
        <div className="SearchResultsSubContainer">
            <MapComponent markers={items} />
        </div>
        <div className="SearchResultsSubContainer">
            <SearchBar handleNavigation={handleNavigation}  query={query} setQuery={setQuery}   width="90%"/>
            {
                items && items.map && items.map(element => {
                    return <SearchItem onClick={()=>{selectedItem(element);handleNavigation("product")}} data={element}/>
                })
            }
        </div>
    </div>)
}

export default SearchResults