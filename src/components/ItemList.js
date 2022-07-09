import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function Product() {
    return (
        <div style={styles.card}>
        <Card sx={{ maxWidth: 345 }} style={styles.card}>
            <CardMedia
                component="img"
                height="200"
                image="https://gobar.vteximg.com.br/arquivos/ids/157473-1000-1000/Andes-Origen-IPA.jpg?v=637218864324070000"
                alt="andes"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Ipa Andes 160
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Como seguramente usted sabe, este estilo de cerveza se caracteriza por el amargor que le otorga su alto contenido de lúpulo. Lo que seguramente no sabe es que la IPA Andina contiene uva mendocina. Este ingrediente es clave para que en el paladar perciba una especie de dulzor, que a su vez hace el amargor más amigable.
                </Typography>
            </CardContent>
            <CardActions>
                <AddShoppingCartIcon size="small">Share</AddShoppingCartIcon>
            </CardActions>
        </Card>
        </div>
    );
}

export function ProductVodka() {
    return (
        <div style={styles.card}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image="https://www.espaciovino.com.ar/media/default/0001/58/thumb_57264_default_big.jpeg"
                alt="vodka"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Smirnoff 1000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                es un vodka de origen ruso, de 37,5% alc./vol., obtenido por triple destilación del alcohol de grano, y filtrado por carbón.
                </Typography>
            </CardContent>
            <CardActions>
                <AddShoppingCartIcon size="small">Share</AddShoppingCartIcon>
            </CardActions>
        </Card>
        </div>
    );
}

export function Productfernet() {
    return (
        <div style={styles.card}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image="https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/298/827/branca_classic__18359.1654267850.jpg?c=2?imbypass=on"
                alt="fernet"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Fernet 900
                </Typography>
                <Typography variant="body2" color="text.secondary">
                es una bebida alcohólica de la familia de los amaros italianos elaborada a partir de la maceración de varios tipos de hierbas (mirra, ruibarbo, manzanilla, cardamomo, orégano y azafrán, entre otras)1​ en alcohol obtenido de la fermentación de la vid. Dependiendo del productor, la maceración es posteriormente filtrada y reposada en toneles de roble durante un período variable. Posee un color oscuro, un aroma intenso y su graduación alcohólica está comprendida entre 39 y 45 grados, según la marca.
                </Typography>
            </CardContent>
            <CardActions>
                <AddShoppingCartIcon size="small">Share</AddShoppingCartIcon>
            </CardActions>
        </Card>
        </div>
    );
}


const styles = {
    card: {
        justifyContent: 'center',
    },
};
