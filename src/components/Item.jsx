import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Contador from './ItemCount';


export default function MediaCard({ product }) {
    return (
        
        <Card sx={{ maxWidth: 345 }} style={styles.producto}>
            <CardMedia
                component="img"
                height="140"
                image={product.imagenURL}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={styles.producto}>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.precio}
                </Typography>
                <Contador stock={5} />
            </CardContent>
            <CardActions>
                <Button size="small">Mas info</Button>
            </CardActions>
        </Card>
        
    );
}

const styles = {

    producto: {
        background: '#d3e6f2'
    },

};
