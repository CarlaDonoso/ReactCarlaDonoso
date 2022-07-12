import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imagenURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Mas info</Button>
      </CardActions>
    </Card>
  );
}
