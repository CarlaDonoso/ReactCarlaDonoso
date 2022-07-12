import React, { useState, useEffect } from "react";

export const Contador = ({ stock }) => {
    const [counter, setCounter] = useState(0);
    const sumar = () => {
        counter < stock && setCounter(counter + 1);
        counter >= stock && alert("No se puede agregar mas");
    };

    const restar = () => {
        setCounter(Math.max(counter - 1, 0));
    };

    const onAdd = () => {
        alert("Gracias por tu compra!");
    };

    return (
        <>
            <div className="flex gap-6 py-6 px-10 bg-slate-500">
                <button onClick={sumar} style={styles.botones}>
                    +
                </button>
                <button onClick={onAdd}>Comprar {counter}</button>
                <button onClick={restar} style={styles.botones}>
                    -
                </button>
            </div>
        </>
    );
};

export default Contador;

const styles = {
    botones: {
        display: "flex",
        background: "#bddaeb",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    container: {
        display: "flex",
        alignContent: "center",
        textAlign: "center",
        background: "#1c6998",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
};
