import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import SearchItem from "../SearchItem";
import { Typography, Button } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import SellerInfo from "../SellerInfo";
import LineGraphComponent from "../LineGraphComponent";
import QRItem from "../QRItem";

function SellerDashboard(props){
    const handleNavigation = props["handleNavigation"]
    const showStoreFront = props["showStoreFront"]
    const items = props["items"]
    const setSelectedItem = props["setSelectedItem"]
    const [QRCodes, setQRCodes] = useState([])
    const [selectedQR, setSelectedQR] = useState(null)
    const db = getDatabase();
    const QRRef = ref(db, 'spot/');

    useEffect( () => {
        onValue(QRRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            setQRCodes(data)
          });
    } , [] )
    return (<div className="ProductInfoContainer">
        <div className="ProductInfoSubContainer">
            <SellerInfo showStoreFront={showStoreFront} handleNavigation={handleNavigation}/>
        </div>
        <div className="ProductInfoSubContainer" style={{overflowY:"scroll"}}>
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"70%"}>
                Analytics
            </Typography>
            <Button size="large" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("analytics")}}>view all</Button>
            </div>
            <LineGraphComponent />
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"70%"}>
                Your Products
            </Typography>
            <Button size="large" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("seller")}}>view all</Button>
            </div>
            {
                items && items.map && items.slice(0,2).map(element => {
                    return <SearchItem onClick={()=>{setSelectedItem(element);handleNavigation("product")}} data={element}/>
                })
            }
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"70%"}>
                Your QR Codes
            </Typography>
            <Button size="large" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("qr")}}>view all</Button>
            </div>
            {
                Object.entries(QRCodes).map(([key, value]) => (<QRItem data={value} onClick={()=>{setSelectedQR(value)}} /> ))
            }
        </div>
    </div>)
}

export default SellerDashboard;