import React from "react";
import logo from "../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="sake" width={40} />
            <h1 style={styles.title}>Nomikai</h1>
            <nav style={styles.navStyle}>
                <a style={styles.anchors} href="">
                    Home
                </a>
                <a style={styles.anchors} href="">
                    Productos
                </a>
                <a style={styles.anchors} href="">
                    Envios
                </a>
                <a style={styles.anchors} href="">
                    Contacto
                </a>
            </nav>
            <ShoppingCartIcon sx={{ fontSize: 40 }} style={styles.carrito} />
        </header>
    );
};

export default Navbar;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        background: '#6be8a5',
    },

    navStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    imagen: {
        width: '10%',
    },

    anchors: {
        margin: 30,
        textDecoration: 'none',
        color: '#000000',
    },
    title:{
        background: '#ffffff',
        borderRadius: '20%'
    },
    carrito: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};
