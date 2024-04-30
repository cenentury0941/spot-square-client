import React from "react";
import "./components.css";
import "./Animations.css";
import "./../fonts/Fonts.css";
import { Button, TextField, Typography } from "@mui/material";
import SellerDetailsTable from "./SellerDetailsTable";
import MapComponent from "./MapComponent";

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
                </div>
            </div>
            <div className="ProductDetailsMainContent">
                <div className="ProductDetailsTextContent" style={{gap:"1vh", height:"80vh"}}>
                    <TextField id="outlined-basic" label="QR Name" variant="outlined" fullWidth color="secondary" />
                    <TextField id="outlined-basic" label="Product ID" variant="outlined" fullWidth color="secondary" />
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div" textAlign={"left"}>
                        Location
                    </Typography>
                    <div style={{height:"25vh", width:"100%"}}>
                        <MapComponent />
                    </div>
                    <TextField id="outlined-basic" label="Latitude" variant="outlined" fullWidth color="secondary" />
                    <TextField id="outlined-basic" label="Longitude" variant="outlined" fullWidth color="secondary" />
                </div>
                <div className="ProductDetailsImageContent" style={{gap:"1vh", height:"80vh"}}>
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/qr.png")} />
                    <Button size="medium" color='secondary' variant="contained" style={{marginLeft:"auto", marginRight:"auto", marginTop:"2vh"}} fullWidth width={"90%"} onClick={()=>{handleNavigation("seller")}}>Update</Button>
                    <Button size="medium" color='secondary' variant="outlined" style={{marginLeft:"auto", marginRight:"auto", marginTop:"0vh"}} fullWidth width={"90%"} onClick={()=>{handleNavigation("seller")}}>Download</Button>
                </div>
            </div>
    </div>)
}

export default QRInfo