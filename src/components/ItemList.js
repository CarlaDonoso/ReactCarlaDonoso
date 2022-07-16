import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';
import productos from './data';


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(productos);
    }, 1000);
});

const ItemList = () => {

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        promesa.then((data) => {
            setProducts(data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (

        
        <div style={styles.container}>

            {products.map((product) => (<Item key={product.id} product={product} />
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

export default ItemList;


