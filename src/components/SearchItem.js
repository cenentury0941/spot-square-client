import React from "react";
import "./components.css";
import "./Animations.css";
import "../fonts/Fonts.css";
import { Button, Typography } from "@mui/material";

function SearchItem(props){

    const position = props["position"]
    const onclick = props["onClick"]
    const data = props["data"]
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (<div className={"SearchItemContainer " + position}>
        <div style={{display:"flex",flexDirection:"row",height:"100%",width:"100%",alignItems:"center",justifyContent:"space-between",padding:"15px",boxSizing:"border-box"}}>
            <img style={{height:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/crosshair_alpha.png")} />
            <div style={{display:"flex", height:"100%", width:"100%", flexDirection:"column", boxSizing:"border-box", padding:"10px 10px 10px 25px"}}>
            <Typography gutterBottom variant="h5" component="div" textAlign={"left"} margin={0}>
                { data ? data["ItemName"] : "Product Name Here" }
            </Typography>            
            <Typography gutterBottom variant="h6" color="text.secondary" component="div" textAlign={"left"}>
                { data ? data["ItemSeller"] : "Seller Name Here" }
            </Typography>
            <div style={{display:"flex",width:"100%", height:"30%", overflowY:"scroll"}}>
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                { data ? data["ItemDesc"] : text }
            </Typography>
            </div>
            <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"end", marginTop:"auto", gap:"1vw"}}>  
                <Button size="medium" color='secondary' style={{marginLeft:"auto"}}>${ data ? data["ItemPrice"] : "69.42" }</Button>
                <Button size="medium" variant='contained' color='secondary' onClick={onclick}>Learn More</Button>
            </div>
            </div>
        </div>
    </div>)
}

export default SearchItem