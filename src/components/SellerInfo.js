import React from "react";
import "./components.css";
import "./Animations.css";
import "./../fonts/Fonts.css";
import { Button, Typography } from "@mui/material";
import SellerDetailsTable from "./SellerDetailsTable";
import MapComponent from "./MapComponent";

function SellerInfo(props){
    const onclick = props["onClick"]
    const handleNavigation = props["handleNavigation"]
    const showStoreFront = props["showStoreFront"]
    
    return (<div className="ProductDetailsContainer">
            <div className="ProductDetailsHeader">
                <img style={{height:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/crosshair_alpha.png")} />
                <div style={{display:"flex",flexDirection:"column", paddingLeft:"2vw", width:"100%", height:"100%"}}>
                <Typography gutterBottom variant="h4" component="div" textAlign={"left"} margin={0}>
                Spot Demo Seller
                </Typography>            
                <Typography gutterBottom variant="h6" color="text.secondary" component="div" textAlign={"left"}>
                44 E. West Street Ashland, OH 44805
                </Typography>
                { showStoreFront && <Button size="medium" color='secondary' style={{marginLeft:"auto", marginTop:"auto"}}  width={"100%"} onClick={()=>{handleNavigation("seller")}}>Visit Store-Front</Button> }
                </div>
            </div>
            <div className="ProductDetailsMainContent">
                <div className="SellerDetailsTextContent">
                    <Typography gutterBottom variant="h5" color="text.secondary" component="div" textAlign={"left"} marginTop={"15px"}>
                        Introduction
                    </Typography>
                    <Typography variant="body2" color="text.secondary" width={"100%"} textAlign={"start"} marginTop={"5px"}>
                    Welcome to our online store, where shopping is made easy, convenient, and enjoyable! Explore our wide range of products, carefully curated to cater to your needs and desires. From trendy fashion pieces to must-have gadgets, we have everything you need to enhance your lifestyle. With secure transactions and reliable delivery services, we strive to make your shopping experience seamless and delightful. Start browsing now and discover the perfect items to elevate your everyday life!"
                    </Typography>
                    <Typography gutterBottom variant="h5" color="text.secondary" component="div" textAlign={"left"} marginTop={"15px"}>
                        Seller Details
                    </Typography>
                    <SellerDetailsTable />
                </div>
                <div className="ProductDetailsImageContent">
                    <img style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",borderColor:"white",borderStyle:"dashed"}} src={require("./static/store1.png")} />
                    <div style={{width:"100%",aspectRatio:1,borderWidth:"2px",borderRadius:"10px",overflow:"hidden"}}>
                        <MapComponent markers={[{lat:13.09389632888064,lon:80.26750625824471}]} />
                        </div>
                </div>
            </div>
    </div>)
}

export default SellerInfo