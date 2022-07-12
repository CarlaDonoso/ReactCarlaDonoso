//import { formControlClasses } from "@mui/material";

import React from "react";
import Contador from './ItemCount';
import ItemList from "./ItemList";

const ItemListContainer = () => {


    return (
        <div>
            <ItemList />
            <Contador stock={5} />
            
        </div>
    );
};

export default ItemListContainer;

/*const styles = {
    producto: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto',
        gap: 20,
        justifyItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
        background: '#2d8065'
    },

    anchors: {
        margin: 30,
        textDecoration: 'none',
        color: '#000000',
    },
    title: {
        background: '#ffffff',
        borderRadius: '20%'
    },
    carrito: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};
*/