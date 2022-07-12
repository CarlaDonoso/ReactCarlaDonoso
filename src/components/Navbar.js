/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";


const Navbar = () => {

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="sake" />
            <h1 style={styles.title}>Nomikai</h1>
            <nav style={styles.navStyle}>
                <li style={styles.anchors}>
                    Home
                </li>
                <li style={styles.anchors}>
                    Productos
                </li>
                <li style={styles.anchors}>
                    Envios
                </li>
                <li style={styles.anchors}>
                    Contacto
                </li>

                <CartWidget/>

            </nav>
        </header>
    );
};

export default Navbar;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        background: '#0e344c',
    },

    navStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    imagen: {
        width: '5%',
    },

    anchors: {
        margin: 30,
        textDecoration: 'none',
        color: '#ffffff',
    },
    title: {
        marginTop: 20,
        color: '#ffffff',
        fontSize: 0,
    }
};
