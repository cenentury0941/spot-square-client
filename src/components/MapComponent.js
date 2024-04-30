import {React, useState} from "react";
import GoogleMapReact from 'google-map-react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapComponent(props){

  const [lat , setLat] = useState(0)
  const [lng , setLng] = useState(0)

  const setSelectedLat = props["setSelectedLat"]
  const setSelectedLng = props["setSelectedLng"]

  const markers = props["markers"]
  const createPin = (event) => {
    console.log(event)   
    setLat(event.detail.latLng.lat)
    setSelectedLat && setSelectedLat(event.detail.latLng.lat)
    setLng(event.detail.latLng.lng)   
    setSelectedLng && setSelectedLng(event.detail.latLng.lng)
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <APIProvider apiKey={"AIzaSyD6AXObkZatQUV3zSK-jG6HbdieFbIBiZo"}>
        <Map
          style={{width: '100vw', height: '100vh'}}
          defaultCenter={{lat: 13.094853788701117, lng: 80.29930233939976}}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          onClick={createPin}
        >
          { markers && markers.map( (element) => { console.log(element.ItemLat); return <Marker position={{lat: parseFloat(element.ItemLat), lng: parseFloat(element.ItemLon)}} /> } ) }
          { !markers && lat!==0 && <Marker position={{lat:lat,lng:lng}}/> }
        </Map>
    </APIProvider>
    </div>
  );
}