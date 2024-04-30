import React, { useEffect, useState } from "react";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import SearchItem from "../SearchItem";
import { Typography, Button } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import ProductInfo from "../ProductInfo";

function ProductPage(props){
    const handleNavigation = props["handleNavigation"]
    const items = props["items"]
    const selectedItem = props["selectedItem"]
    const setSelectedItem = props["setSelectedItem"]
    const targetId = props["targetId"]

    useEffect(()=>{
        if(targetId)
        {   
            console.log(items)
            for (let i = 0; i < items.length; i++) {
                    if( items[i].ItemID === targetId )
                    {
                      setSelectedItem(items[i])
                      handleNavigation("product")
                    }
              }
        }
    } , [items])

    return (<div className="ProductInfoContainer">
        <div className="ProductInfoSubContainer">
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"90%"}>
                Products
            </Typography>
            </div>
            {
                items && items.map && items.map(element => {
                    return <SearchItem onClick={()=>{setSelectedItem(element);handleNavigation("product")}} data={element}/>
                })
            }

        </div>
        <div className="ProductInfoSubContainer" style={{overflowY:"hidden"}}>
            <ProductInfo selectedItem={selectedItem} handleNavigation={handleNavigation}/>
            <div className="ProductDetailsFooter">
                <div className="ProductDetailsFooterContent">
                    <Button size="medium" color='secondary' style={{marginLeft:"auto"}}>${ selectedItem ? selectedItem["ItemPrice"] : "69.42" }</Button>
                    <Button size="medium" variant='contained' color='secondary' onClick={()=>{}}>Learn More</Button>
                </div>
            </div>
        </div>
    </div>)
}

export default ProductPage;