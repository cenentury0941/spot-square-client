import React, { useState } from "react";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import SearchItem from "../SearchItem";
import { Typography, Button } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import SellerInfo from "../SellerInfo";
import LineGraphComponent from "../LineGraphComponent";

function SellerDashboard(props){
    const handleNavigation = props["handleNavigation"]

    return (<div className="ProductInfoContainer">
        <div className="ProductInfoSubContainer">
            <SellerInfo handleNavigation={handleNavigation}/>
        </div>
        <div className="ProductInfoSubContainer" style={{overflowY:"scroll"}}>
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"70%"}>
                Analytics
            </Typography>
            <Button size="large" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("seller")}}>view all</Button>
            </div>
            <LineGraphComponent />
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"70%"}>
                Your Products
            </Typography>
            <Button size="large" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("seller")}}>view all</Button>
            </div>
            <SearchItem onClick={()=>{handleNavigation("product")}} position="SearchItemContainerFirst"/>
            <SearchItem onClick={()=>{handleNavigation("product")}} position="SearchItemContainerSecond" />
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"70%"}>
                Your QR Codes
            </Typography>
            <Button size="large" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("qr")}}>view all</Button>
            </div>
            <SearchItem onClick={()=>{handleNavigation("product")}} position="SearchItemContainerFirst"/>
            <SearchItem onClick={()=>{handleNavigation("product")}} position="SearchItemContainerSecond" />
        </div>
    </div>)
}

export default SellerDashboard;