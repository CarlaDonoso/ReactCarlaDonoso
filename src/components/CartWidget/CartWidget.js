import React, { useState } from "react"

export const Carrito = ({ miContador }) => {
    const [counter, setCounter] = useState(0);
    const handlerClick = () => {
        setCounter(counter + 1);
    }

    const restar = () => {
        setCounter(counter -1)
    }

    const resetear = () => {
        setCounter(0)
    }

    return (
        <>
            <div style={styles.container}>Producto
            <div style={styles.botones}>Cantidad {counter}</div>
            <button onClick={resetear} style={styles.botones}>Reset</button>
            <button onClick={handlerClick} style={styles.botones}>Comprar</button>
            <button onClick={restar}style={styles.botones}>Quitar</button>
            </div>

        </>
    );
};

export default Carrito;

const styles = {
    botones: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyItems: 'start',
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
        paddingLeft: 20,
        
    },
    container:{
        margin: 20,
        padding: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
    },
}