import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 



    useEffect(() => {
        const URL = itemId ? `www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail${itemId}`
        : "www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        const getProducts = async () => {
            try {
                const response = await fetch(URL)
                const data = await response.json();
                setProduct(data);
            }
            catch (err) {
                console.log(err);
                
            }
            finally {
                setLoading(false);
            }

        }
        getProducts();
    }, [itemId]);



    return (
        <>

            {loading ? <CircularProgress style={styles.spinner} /> :

                <div style={styles.container}> {product.map((product) => (<ItemDetail key={product.id} product={product} />))}</div>}


        </>
    );
};


const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    },
    spinner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    }

}

export default ItemDetailsContainer;

/*
        useEffect(() => {
            fetch(`https://fakestoreapi.com/products?limit=1`)
                .then(res => res.json())
                .then(data => setProduct(data))
                .catch(err => console.log(err))
                
    
        }, []);*/