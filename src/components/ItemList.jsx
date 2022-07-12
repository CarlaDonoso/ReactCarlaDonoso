import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';

const initialProducts= [
    {name: 'Andes Ipa', id:0, precio:170, description:"Cerveza amarga que le otorga su alto contenido de lúpulo", imagenURL:'https://carrefourar.vtexassets.com/arquivos/ids/191560/7792798002726_02.jpg?v=637511790086100000'},
    {name: 'Fernet', id:1, precio:1000, description:"Elaborada a partir de la maceración de varios tipos de hierbas", imagenURL:'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/298/827/branca_classic__18359.1654267850.jpg?c=2?imbypass=on'},
    {name: 'Vodka', id:2, precio:1500, description:"Bebida destilada,a través de la fermentación de granos y otras plantas ricas en almidón", imagenURL:'https://www.hiperlibertad.com.ar/arquivos/ids/170382-300-300/Vodka-Absolut-40-x-750cc-1-10567.jpg?v=637414119679130000'},
    {name: 'Baggio', id:3, precio:120, description:"Jugo de naranja", imagenURL:'https://http2.mlstatic.com/D_NQ_NP_773631-MLA50169807576_062022-V.jpg',}
]

const promesa = new Promise((res,rej) =>{
        setTimeout(()=>{
            res(initialProducts);
        },2000);
});

const ItemList = () => {

    const [ products, setProducts] = useState([]);

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
    }
}

export default ItemList;