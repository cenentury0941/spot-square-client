import React, { useState } from "react";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import SearchItem from "../SearchItem";
import { Typography, Button } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import SellerInfo from "../SellerInfo";

function SellerPage(props){
    const handleNavigation = props["handleNavigation"]

    return (<div className="ProductInfoContainer">
        <div className="ProductInfoSubContainer">
            <SellerInfo />
        </div>
        <div className="ProductInfoSubContainer" style={{overflowY:"scroll"}}>
        <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"90%"}>
                Products Available
            </Typography>
            </div>
            <SearchItem onClick={()=>{handleNavigation("product")}} position="SearchItemContainerFirst"/>
            <SearchItem onClick={()=>{handleNavigation("product")}} position="SearchItemContainerSecond" />
            <SearchItem onClick={()=>{handleNavigation("product")}} position="SearchItemContainerThird" />
            <SearchItem onClick={()=>{handleNavigation("product")}} />
            <SearchItem onClick={()=>{handleNavigation("product")}} />
            <SearchItem onClick={()=>{handleNavigation("product")}} />
        </div>
    </div>)
}

export default SellerPage;