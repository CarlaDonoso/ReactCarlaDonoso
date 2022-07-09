
import Navbar from './components/Navbar';
import Container from './components/ItemListContainer';
import { Carrito } from './components/CartWidget/CartWidget';
import { Product, Productfernet, ProductVodka } from './components/ItemList';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <>
<Navbar/>
<Routes>
<Route path='/'>
<Product/><Carrito/>
</Route>
<Container/>
<ProductVodka/>
<Carrito/>
<Productfernet/>
<Carrito/>
</Routes>
</>
</BrowserRouter>
  );
}

export default App;
