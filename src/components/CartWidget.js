import React from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

const CartWidget = () => {
  return (
    <button style={styles.button}>
<AddShoppingCart sx={{ fontSize: 40 }} style={styles.carrito} />
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