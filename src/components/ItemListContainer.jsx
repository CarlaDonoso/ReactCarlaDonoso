import React from "react";

const Container = () => {

    return (
        <>
            <div style={styles.producto}>
                <h2>Bebidas</h2>
                <h2>Aperitivos</h2>
                <h2>Bebidas sin alcohol</h2>
            </div>
        </>
    );
};

export default Container;

const styles = {
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
