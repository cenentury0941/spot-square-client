import './App.css';
import SpotAppbar from './components/SpotAppbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';
import Search from './components/pages/Search';
import SearchResults from './components/pages/SearchResults';
import ProductPage from './components/pages/ProductPage';
import SellerPage from './components/pages/SellerPage';
import SellerDashboard from './components/pages/SellerDashboard';
import { getItems, searchItems } from './api/square';
import QRPage from './components/pages/QRPage';
import AnalyticsPage from './components/pages/AnalyticsPage.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNFPbEh-IGXcu-ei2z4G_Tt3Q_OR2qJSg",
  authDomain: "combined-hackathon-services.firebaseapp.com",
  databaseURL: "https://combined-hackathon-services-default-rtdb.firebaseio.com",
  projectId: "combined-hackathon-services",
  storageBucket: "combined-hackathon-services.appspot.com",
  messagingSenderId: "151604687446",
  appId: "1:151604687446:web:ef22919571302190e801f7",
  measurementId: "G-NP9FLZ40GH"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function updateQRLog(name,item,lat,lon) {
  const db = getDatabase();
  set(ref(db, 'spotLog/' + Date.now()), {
    name:name,
    lat:lat,
    lon:lon,
    item:item
  });
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const itemID = urlParams.get('item');
  const itemName = urlParams.get('name');
  const itemLat = urlParams.get('lat');
  const itemLon = urlParams.get('lon');
  const [loadingState, setLoadingState] = useState("done")
  const [navigating, setNavigating] = useState(false)
  const [ items , setItems ] = useState([]) 
  const [ searchQuery , setSearchQuery ] = useState("")
  const [ selectedItem , setSelectedItem ] = useState(null)
  const [ targetId , setTargetId ] = useState(null)

  const navigate = useNavigate()

  const fetchItems = (arg) => {
    searchItems(setItems, arg?arg:searchQuery)
  }  
  
  const fetchAllItems = () => {
    getItems(setItems)
  }

  const handleNavigation = (dest) => {

    setLoadingState("load")
    setNavigating(true)
    setTimeout(
      () => { 
        
        if(dest === "results")
        {
          setItems([])
          fetchItems()
        }   

        if(dest === "seller" || dest === "sellerDashboard")
        {
          setItems([])
          fetchItems("")
        }

        if(dest === "product")
        {
            fetchItems("")
            setTargetId(itemID)
            if(itemID)
            {
              updateQRLog(itemName, itemID, itemLat, itemLon)
            }
        }
        
        navigate(dest) } , 500
    )
    
    setTimeout(
      () => setLoadingState("done") , 1000
    )    

    setTimeout(
      () => setNavigating(false) , 2250
    )
  
  }

  useEffect( () => {
  if(itemID)
    {
      handleNavigation("product")
    }
  } , [] )

  return (
    <div className="App" style={{width:"100vw", height:"100vh", position:"absolute", overflow:"hidden"}}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        { navigating && <Loading animationState={loadingState}/> }
        <SpotAppbar handleNavigation={handleNavigation}/>
      <Routes>
          <Route index element={<Home handleNavigation={handleNavigation}/>} />
          <Route path="about" element={<About handleNavigation={handleNavigation}/>} />
          <Route path="search" element={<Search handleNavigation={handleNavigation} query={searchQuery} setQuery={setSearchQuery} />} />
          <Route path="results" element={<SearchResults selectedItem={setSelectedItem} handleNavigation={handleNavigation} items={items}  query={searchQuery} setQuery={setSearchQuery} />} />
          <Route path="product" element={<ProductPage targetId={targetId} items={items} setSelectedItem={setSelectedItem} selectedItem={selectedItem} handleNavigation={handleNavigation}  />} />
          <Route path="seller" element={<SellerPage selectedItem={setSelectedItem}  items={items}  handleNavigation={handleNavigation}/>} />
          <Route path="sellerDashboard" element={<SellerDashboard setSelectedItem={setSelectedItem} items={items} showStoreFront={true} handleNavigation={handleNavigation}/>} />
          <Route path="qr" element={<QRPage handleNavigation={handleNavigation}/>} />
          <Route path="analytics" element={<AnalyticsPage handleNavigation={handleNavigation}/>} />
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
