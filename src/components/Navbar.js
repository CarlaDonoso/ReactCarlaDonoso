/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const Navbar = () => {

    /*const products = {
        { name: 'cerveza', id: 0 },
        { name: 'vodka', id: 1},
        { name: 'coca cola', id: 2},
    }*/

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="sake" width={40} />
            <h1>Nomikai</h1>
            <nav style={styles.navStyle}>
                <a style={styles.anchors} href=""><Link to={'/'}>
                    Home
                </Link></a>
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
        width: '12%',
    },

    anchors: {
        margin: 30,
        textDecoration: 'none',
        color: '#000000',
    },
    carrito: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};
