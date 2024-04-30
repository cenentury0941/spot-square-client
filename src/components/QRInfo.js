import React, { useEffect, useState } from "react";
import "./components.css";
import "./Animations.css";
import "./../fonts/Fonts.css";
import { Button, TextField, Typography } from "@mui/material";
import SellerDetailsTable from "./SellerDetailsTable";
import QRCode from "react-qr-code";
import MapComponent from "./MapComponent";

import { getDatabase, ref, set, onValue } from "firebase/database";

function updateQR(name,item,lat,lon) {
  const db = getDatabase();
  set(ref(db, 'spot/' + name.replaceAll(" ","")), {
    name:name,
    lat:lat,
    lon:lon,
    item:item
  });
}

function QRInfo(props){
    const onclick = props["onClick"]
    const selectedQR = props["selectedQR"]
    const handleNavigation = props["handleNavigation"]
    const [value, setValue] = useState();
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    const [lat , setLat] = useState( selectedQR ? selectedQR.lat : 0 )
    const [lng , setLng] = useState( selectedQR ? selectedQR.lon : 0 )
    const [name, setName] = useState( selectedQR ? selectedQR.name : "" )
    const [item, setItem] = useState( selectedQR ? selectedQR.item : "" )

    useEffect( () => {
        if(!selectedQR)
        {
            return
        }
        setLat(selectedQR.lat)
        setLng(selectedQR.lon)
        setName(selectedQR.name)
        setItem(selectedQR.item)
    } , [selectedQR] )

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
                    <TextField id="outlined-basic" label="QR Name" variant="outlined" fullWidth color="secondary"         
                    onChange={(event)=>{setName(event.target.value)}}
                    value={name} 
                    />
                    <TextField id="outlined-basic" label="Product ID" variant="outlined" fullWidth color="secondary"         
                    onChange={(event)=>{setItem(event.target.value)}}
                    value={item} 
                    />
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div" textAlign={"left"}>
                        Location
                    </Typography>
                    <div style={{height:"25vh", width:"100%", overflow:"hidden", borderRadius:"10px", boxSizing:"border-box", marginTop:"10px", marginBottom:"10px"}}>
                        <MapComponent setSelectedLat={setLat} setSelectedLng={setLng} />
                    </div>
                    <TextField id="outlined-basic" value={lat} onChange={{}} label="Latitude" variant="outlined" fullWidth color="secondary" />
                    <TextField id="outlined-basic" value={lng} onChange={{}} label="Longitude" variant="outlined" fullWidth color="secondary" />
                </div>
                <div className="ProductDetailsImageContent">
                    <div style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", padding:"1vh"}} >
                        <QRCode value={"https://cenentury0941.github.io/spot?item="+item+"&name="+name+"&lat="+lat+"&lon="+lng} size={"100%"} fgColor={"#000"} /> </div>
                    <Button size="medium" color='secondary' variant="contained" style={{marginLeft:"auto", marginRight:"auto", marginTop:"2vh"}} fullWidth width={"90%"} onClick={()=>{updateQR(name,item,lat,lng)}}>Update</Button>
                    <Button size="medium" color='secondary' variant="outlined" style={{marginLeft:"auto", marginRight:"auto", marginTop:"0vh"}} fullWidth width={"90%"} onClick={()=>{}}>Download</Button>
                </div>
                </div>
    </div>)
}

export default QRInfo