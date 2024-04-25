import React from "react";
import "./components.css";
import "./Animations.css";
import "./../fonts/Fonts.css";
import { Button } from "@mui/material";

function ProductInfo(props){
    const onclick = props["onClick"]
    
    return (<div className="ProductDetailsContainer">
            <div className="ProductDetailsFooter">
                <div className="ProductDetailsFooterContent">
                    <Button size="medium" color='secondary' style={{marginLeft:"auto"}}>$69.42</Button>
                    <Button size="medium" variant='contained' color='secondary' onClick={onclick}>Learn More</Button>
                </div>
            </div>
    </div>)
}

export default ProductInfo