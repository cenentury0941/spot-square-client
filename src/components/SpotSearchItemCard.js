import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alignProperty } from '@mui/material/styles/cssUtils';

export default function SpotSearchItemCard() {
  return (
    <Card sx={{ width:"90%" }} style={{flexShrink:0}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="25vh"
        image={(require("./static/crosshair_alpha.png"))}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" color='secondary' style={{marginLeft:"auto"}}>$69.42</Button>
        <Button size="medium" variant='contained' color='secondary'>Learn More</Button>
      </CardActions>
    </Card>
  );
}