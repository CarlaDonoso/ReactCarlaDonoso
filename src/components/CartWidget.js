import React from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { cartContext } from './cartContext';


const CartWidget = () => {

  const { qtyProducts } = (cartContext);

  return (
    <button style={styles.button}>
<AddShoppingCart sx={{ fontSize: 40 }} style={styles.carrito} />
<p>{qtyProducts}</p>
    </button>
  )
}

const styles = {
    button: {
        display: 'flex',
        background: '#0e344c',
    },

    carrito:{
      alingItems: 'center',
      marginTop: 20,
      color: '#ffffff',
    }
};

export default CartWidget;