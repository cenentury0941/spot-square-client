import React from "react";
import "./components.css";
import "./Animations.css";
import "./../fonts/Fonts.css";
import { Button, Typography } from "@mui/material";
import SellerDetailsTable from "./SellerDetailsTable";

function QRInfo(props){
    const onclick = props["onClick"]
    const handleNavigation = props["handleNavigation"]

    return (<div className="ProductDetailsContainer">
            <div className="ProductDetailsHeader">
                <img style={{height:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/qr.png")} />
                <div style={{display:"flex",flexDirection:"column", paddingLeft:"2vw", width:"100%", height:"100%"}}>
                <Typography gutterBottom variant="h4" component="div" textAlign={"left"} margin={0}>
                QR Details
                </Typography>            
                <Button size="medium" color='secondary' variant="contained" style={{marginLeft:"auto", marginTop:"auto"}}  width={"50%"} onClick={()=>{handleNavigation("seller")}}>Update</Button>
                </div>
            </div>
            <div className="ProductDetailsMainContent">
                <div className="ProductDetailsTextContent">
                </div>
                <div className="ProductDetailsImageContent">
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/qr.png")} />
                </div>
            </div>
    </div>)
}

export default QRInfo