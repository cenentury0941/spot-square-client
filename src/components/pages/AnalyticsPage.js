import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import "../components.css";
import "../Animations.css";
import "../../fonts/Fonts.css";
import MapComponent from "../MapComponent";
import SearchBar from "../SpotSearchBar";
import SearchItem from "../SearchItem";
import SpotSearchItemCard from "../SpotSearchItemCard";
import { Button, Typography } from "@mui/material";
import LineGraphComponent from "../LineGraphComponent";
import CategoryIcon from '@mui/icons-material/Category';
import { BarChart } from '@mui/x-charts/BarChart';
import QRItem from "../QRItem";
import GoogleMapReact from 'google-map-react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { ChartContainer, BarPlot } from '@mui/x-charts';

function AnalyticsPage(props){
    const handleNavigation = props["handleNavigation"]
    const selectedItem = props["selectedItem"]
    const query = props["query"]
    const setQuery = props["setQuery"]
    const [QRCodes, setQRCodes] = useState([])
    const [selectedQR, setSelectedQR] = useState(null)
    const db = getDatabase();
    const QRRef = ref(db, 'spotLog/');
    const [ items , setItems ] = useState([])
    const [ labels , setLabels ] = useState(["fgdfg"])
    const [ values , setValues ] = useState([0])
    const [ forceUpdate , setForceUpdate ] = useState(false)
    const [ markers , setMarkers ] = useState([])
    var temp = []

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const xLabels = [
      'Page A',
      'Page B',
      'Page C',
      'Page D',
      'Page E',
      'Page F',
      'Page G',
    ];


    useEffect( () => {
        onValue(QRRef, (snapshot) => {
            const data = snapshot.val();
            setQRCodes(data)
            Object.entries(QRCodes).map(([key, value]) => ( temp.push( { lat : value.lat, lon : value.lon } ) ))
            const itemCounts = {};

            for (const key in data) {
            const item = data[key].item;
            itemCounts[item] = (itemCounts[item] || 0) + 1;
            }

            var tempLabels = []
            var tempValues = []

            for (const key in itemCounts) {
                const item = itemCounts[key];
                tempLabels.push(key)
                tempValues.push(item)
            }

            setLabels(tempLabels)
            setValues(tempValues)

          });
    } , [] )

    return (<div className="SearchResultsContainer">
        <div className="SearchResultsSubContainer">
        <div style={{ height: '100%', width: '100%' }}>
      <APIProvider apiKey={"AIzaSyD6AXObkZatQUV3zSK-jG6HbdieFbIBiZo"}>
        <Map
          style={{width: '100vw', height: '100vh'}}
          defaultCenter={{lat: 13.094853788701117, lng: 80.29930233939976}}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
            {
                Object.entries(QRCodes).map(([key, value]) => { return <Marker
                position={{
                  lat: parseFloat(value.lat) + (Math.random() * 0.0002 - 0.00005),
                  lng: parseFloat(value.lon) + (Math.random() * 0.0002 - 0.00005)
                }}
              />} )
            }
        </Map>
    </APIProvider>
    </div>  
        </div>
        <div className="SearchResultsSubContainer">
        <div style={{display:"flex",width:"90%",flexDirection:"row", alignItems:"center", gap:"10px", marginTop:50, marginBottom:10, paddingBottom:20, borderWidth:0, borderStyle:"solid", borderBottomWidth:2, borderColor:"#403243"}}>
            <CategoryIcon  sx={{ fontSize: 50 }} /><Typography variant="h3" component="div" textAlign={"left"} margin={0} width={"70%"}>
                Analytics {""+forceUpdate}
            </Typography>
            </div>
            <div style={{display:"flex", height:"39vh", width:"90%", flexShrink:0}}>
            <ChartContainer
            width={500}
            height={300}
            series={[{ data: values, label: 'uv', type: 'bar' }]}
            xAxis={[{ scaleType: 'band', data: labels }]}
            >
            <BarPlot />
            </ChartContainer>
            </div>
            <Typography gutterBottom variant="h5" component="div" textAlign={"left"} margin={0}>
                QR Codes scan log
            </Typography> 
            {
                Object.entries(QRCodes).map(([key, value]) => (<QRItem data={value} onClick={()=>{setSelectedQR(value)}} /> ))
            }
            </div>
            </div>)
}

export default AnalyticsPage