import { Button, Typography } from "@mui/material";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import React from "react";

function Home(props){

    const handleNavigation = props["handleNavigation"]

    return(
        <div className="Background BackgroundGradient">
            <div className="MapTile float" />
            <div style={{display:"flex", flexDirection:"column", left:"5vw", top:"12vh", position:"absolute", alignItems:"start"}}>
                <p className="SubTitleText">Welcome To</p>
                <p className="TitleText">SPOT</p>
                <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"center", gap:"2vw"}}>
                    <Button variant="outlined" fullWidth color="secondary" onClick={() => handleNavigation("/")}><p className="HomeButtons">For Sellers</p></Button>
                    <Button variant="outlined" fullWidth color="secondary" onClick={() => handleNavigation("search")}><p className="HomeButtons">For Buyers</p></Button>
                </div>
            </div>
        </div>
    )
}

export default Home