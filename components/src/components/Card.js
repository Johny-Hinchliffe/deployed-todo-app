import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard({image, title, body, alt}) {
  return (
    <Card sx={{maxWidth: "80%", width: "80%", height: {xs: "525px", md:"450px"}, maxHeight: "600px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{typography: {xs:'subtitle1', md:"h6"}}}color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}