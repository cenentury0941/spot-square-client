import React from "react";
import "./components.css";
import "./Animations.css";
import "./../fonts/Fonts.css";
import { Button, Typography } from "@mui/material";
import SellerDetailsTable from "./SellerDetailsTable";

function ProductInfo(props){
    const onclick = props["onClick"]
    const handleNavigation = props["handleNavigation"]
    const selectedItem = props["selectedItem"]

    return (<div className="ProductDetailsContainer">
            <div className="ProductDetailsHeader">
                <img style={{height:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/crosshair_alpha.png")} />
                <div style={{display:"flex",flexDirection:"column", paddingLeft:"2vw", width:"100%", height:"100%"}}>
                <Typography gutterBottom variant="h4" component="div" textAlign={"left"} margin={0}>
                {selectedItem ? selectedItem["ItemName"] : "Product Name Here" } 
                </Typography>            
                <Typography gutterBottom variant="h6" color="text.secondary" component="div" textAlign={"left"}>
                {selectedItem ? selectedItem["ItemSeller"] : "Seller Name" } 
                </Typography>
                <Button size="medium" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("seller")}}>About Seller</Button>
                </div>
            </div>
            <div className="ProductDetailsMainContent">
                <div className="ProductDetailsTextContent">
                    <Typography gutterBottom variant="h5" color="text.secondary" component="div" textAlign={"left"} marginTop={"15px"}>
                        Product Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary" width={"100%"} textAlign={"start"} marginTop={"5px"}>
                    {selectedItem ? selectedItem["ItemDesc"] : "No Product Info Available" } 
                    </Typography>
                    <Typography gutterBottom variant="h5" color="text.secondary" component="div" textAlign={"left"} marginTop={"15px"}>
                        Other Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary" width={"100%"} textAlign={"start"} marginTop={"5px"}>
                    The images of products on our website are for illustrative purposes only. The actual product you receive may vary slightly from the image displayed due to factors such as product enhancement, lighting, and monitor settings.</Typography>
                    <Typography gutterBottom variant="h5" color="text.secondary" component="div" textAlign={"left"} marginTop={"15px"}>
                        Seller Details
                    </Typography>
                    <SellerDetailsTable />
                </div>
                <div className="ProductDetailsImageContent">
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/placeholder1.png")} />
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/store1.png")} />
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/placeholder2.png")} />
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/crosshair_alpha.png")} />
                </div>
            </div>
    </div>)
}

export default ProductInfo