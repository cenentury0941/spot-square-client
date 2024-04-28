import './App.css';
import SpotAppbar from './components/SpotAppbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Loading from './components/Loading';
import { useState } from 'react';
import Search from './components/pages/Search';
import SearchResults from './components/pages/SearchResults';
import ProductPage from './components/pages/ProductPage';
import SellerPage from './components/pages/SellerPage';
import SellerDashboard from './components/pages/SellerDashboard';
import { getItems, searchItems } from './api/square';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [loadingState, setLoadingState] = useState("done")
  const [navigating, setNavigating] = useState(false)
  const [ items , setItems ] = useState([]) 
  const [ searchQuery , setSearchQuery ] = useState("")

  const navigate = useNavigate()

  const fetchItems = () => {
    searchItems(setItems, searchQuery)
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
        
        navigate(dest) } , 500
    )
    
    setTimeout(
      () => setLoadingState("done") , 1000
    )    

    setTimeout(
      () => setNavigating(false) , 2250
    )
  
  }


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
          <Route path="results" element={<SearchResults handleNavigation={handleNavigation} items={items}  query={searchQuery} setQuery={setSearchQuery} />} />
          <Route path="product" element={<ProductPage handleNavigation={handleNavigation}/>} />
          <Route path="seller" element={<SellerPage handleNavigation={handleNavigation}/>} />
          <Route path="sellerDashboard" element={<SellerDashboard handleNavigation={handleNavigation}/>} />
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
