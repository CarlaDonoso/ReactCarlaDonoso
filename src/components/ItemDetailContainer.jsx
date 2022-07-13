import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';


const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=1`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))

    }, []);

    return (

        <div style={styles.container}>
            {product.map((product) => (<ItemDetail key={product.id} product={product} />
            ))}
        </div>

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

}

export default ItemDetailsContainer;