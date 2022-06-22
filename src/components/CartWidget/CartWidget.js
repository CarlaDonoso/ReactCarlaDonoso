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
            <div>Producto</div>
            <div>Cantidad {counter}</div>
            <button onClick={resetear}>Reset</button>
            <button onClick={handlerClick}>Comprar</button>
            <button onClick={restar}>Quitar</button>
        </>
    );
};