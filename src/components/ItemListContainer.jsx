//import { formControlClasses } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";

const ItemListContainer = () => {


    const { categoriaName } = useParams;
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);


    useEffect(() => {
        const route = categoriaName ?
            `www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail${categoriaName}`
            : 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
        const getProducts = async () => {
            try {
                const res = await fetch(route);
                const data = await res.json();
                setProducts(data);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoaded(false);
            }
        }
        getProducts();
    }, [categoriaName]);
    return (
        <div>
            {loaded ? <CircularProgress /> : <ItemList products={products} />}

        </div>
    );
};

export default ItemListContainer;

