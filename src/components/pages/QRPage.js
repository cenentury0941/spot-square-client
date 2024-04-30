import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import SearchItem from "../SearchItem";
import { Typography, Button } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import ProductInfo from "../ProductInfo";
import QRInfo from "../QRInfo";
import QRItem from "../QRItem";

function QRPage(props){
    const handleNavigation = props["handleNavigation"]
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
            <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} />
            <Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"90%"}>
                Your QR Codes
            </Typography>
            </div>
            {
                Object.entries(QRCodes).map(([key, value]) => (<QRItem data={value} onClick={()=>{setSelectedQR(value)}} /> ))
            }

        </div>
        <div className="ProductInfoSubContainer" style={{overflowY:"hidden"}}>
            <QRInfo selectedQR={selectedQR} handleNavigation={handleNavigation}/>
        </div>
    </div>)
}

export default QRPage;