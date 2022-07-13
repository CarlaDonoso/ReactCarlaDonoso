import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Contador from './ItemCount';


const ItemDetail = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}{product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.price}
                    </Typography>
                    <Contador stock={5} />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Finalizar compra
                </Button>
            </CardActions>
        </Card>
    );
}



export default ItemDetail;