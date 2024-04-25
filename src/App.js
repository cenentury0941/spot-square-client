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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [loadingState, setLoadingState] = useState("done")
  const [navigating, setNavigating] = useState(false)

  const navigate = useNavigate()

  const handleNavigation = (dest) => {

    setLoadingState("load")
    setNavigating(true)

    setTimeout(
      () => navigate(dest) , 500
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
          <Route path="search" element={<Search handleNavigation={handleNavigation}/>} />
          <Route path="results" element={<SearchResults handleNavigation={handleNavigation}/>} />
          <Route path="product" element={<ProductPage handleNavigation={handleNavigation}/>} />
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
