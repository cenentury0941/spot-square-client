import React from "react";
import "./components.css";
import "./Animations.css";
import "./../fonts/Fonts.css";
import { Button, Typography } from "@mui/material";
import SellerDetailsTable from "./SellerDetailsTable";
import MapComponent from "./MapComponent";

function SellerInfo(props){
    const onclick = props["onClick"]
    const handleNavigation = props["handleNavigation"]
    
    return (<div className="ProductDetailsContainer">
            <div className="ProductDetailsHeader">
                <img style={{height:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/crosshair_alpha.png")} />
                <div style={{display:"flex",flexDirection:"column", paddingLeft:"2vw", width:"100%", height:"100%"}}>
                <Typography gutterBottom variant="h4" component="div" textAlign={"left"} margin={0}>
                Seller Name Here
                </Typography>            
                <Typography gutterBottom variant="h6" color="text.secondary" component="div" textAlign={"left"}>
                    Seller Address Here
                </Typography>
                <Button size="medium" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("seller")}}>Visit Store-Front</Button>
                </div>
            </div>
            <div className="ProductDetailsMainContent">
                <div className="SellerDetailsTextContent">
                    <Typography gutterBottom variant="h5" color="text.secondary" component="div" textAlign={"left"} marginTop={"15px"}>
                        Introduction
                    </Typography>
                    <Typography variant="body2" color="text.secondary" width={"100%"} textAlign={"start"} marginTop={"5px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography gutterBottom variant="h5" color="text.secondary" component="div" textAlign={"left"} marginTop={"15px"}>
                        Seller Details
                    </Typography>
                    <SellerDetailsTable />
                </div>
                <div className="ProductDetailsImageContent">
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/crosshair_alpha.png")} />
                    <div style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",overflow:"hidden"}}>
                        <MapComponent />
                        </div>
                </div>
            </div>
    </div>)
}

export default SellerInfo