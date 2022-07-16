/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const categorias = [
        { name: "Home", id: 0, route: "/categoria/Home" },
        { name: "BebidasSinAlcohol", id: 1, route: "/categoria/BebidasSinAlcohol" },
        { name: "BebidasConAlcohol", id: 2, route: "/categoria/BebidasConAlcohol" },
        { name: "Contacto", id: 3, route: "/categoria/Contacto" },
    ]

    return (
        <header style={styles.container}>

            <Link to="/">
                <img style={styles.imagen} src={logo} alt="sake" />
            </Link>
            <h1 style={styles.title}>Nomikai</h1>
            <nav style={styles.navStyle}>

                {categorias.map((categoria) => <NavLink key={categoria.id} style={styles.anchors} to={categoria.route}>
                    {categoria.name}
                </NavLink>)}

                <Link to="/cart">
                    <CartWidget />
                </Link>
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
        width: '20%',
    },

    anchors: {
        margin: 30,
        textDecoration: 'none',
        color: '#ffffff',
    },
    title: {
        marginTop: 10,
        color: '#ffffff',
        fontSize: 50,
    }
};
