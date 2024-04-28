import React from "react";
import "../components/Animations.css"
import { Typography } from "@mui/material";
import "../fonts/Fonts.css"

function Loading(props){

    var animationState = props["animationState"]

    return(
        <div className={"Loading " + animationState}>
            <img className="logo_rotate" src={require("../components/static/crosshair3_alpha.png")} />
            <p className="LoadingText">SPOT</p>
        </div>
    )
}

export default Loading