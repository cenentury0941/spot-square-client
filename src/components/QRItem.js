import React from "react";
import "./components.css";
import "./Animations.css";
import "../fonts/Fonts.css";
import { Button, Typography } from "@mui/material";

function QRItem(props){

    const position = props["position"]
    const onclick = props["onClick"]
    const data = props["data"]

    console.log(props)  
    return (<div className={"QRItemContainer " + position}>
        <div style={{display:"flex",flexDirection:"row",height:"100%",width:"100%",alignItems:"center",justifyContent:"space-between",padding:"15px",boxSizing:"border-box"}}>
            <img style={{height:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/qr.png")} />
            <div style={{display:"flex", height:"100%", width:"100%", flexDirection:"column", boxSizing:"border-box", padding:"10px 10px 10px 25px"}}>
            <Typography gutterBottom variant="h5" component="div" textAlign={"left"} margin={0}>
                { data ? data["ItemName"] : "QR Name here" }
            </Typography>            
            <Typography gutterBottom variant="h6" color="text.secondary" component="div" textAlign={"left"}>
                Latitude , Longitude
            </Typography>
            <div style={{display:"flex",width:"100%", height:"30%", overflowY:"scroll"}}>
            </div>
            <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"end", marginTop:"auto", gap:"1vw"}}>  
                <Button size="medium" variant='contained' color='secondary' onClick={onclick}>Details</Button>
            </div>
            </div>
        </div>
    </div>)
}

export default QRItem