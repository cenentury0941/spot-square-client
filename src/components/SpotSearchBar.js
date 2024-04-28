import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic'; 
import DirectionsIcon from '@mui/icons-material/Directions';
import { useNavigate } from 'react-router-dom';

export default function SearchBar(props) {

    const handleNavigation = props["handleNavigation"]
    const width = props["width"] ? props["width"] : "100%"
    const query = props["query"]
    const setQuery = props["setQuery"]
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: width, m: "5vh 0px 2vh 0px" }}
    >
      <Divider sx={{ height: 28, m: 1, opacity: 0 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What's on your mind?"
        inputProps={{ 'aria-label': "What's on your mind?" }}
        onChange={(event)=>{setQuery(event.target.value)}}
        value={query} 
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={()=>handleNavigation("results")}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.1, opacity: 1 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <MicIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.2, opacity: 0 }} orientation="vertical" />
    </Paper>
  );
}