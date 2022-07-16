import React from 'react'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaName" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        { }
      </BrowserRouter>
<Footer/>
</>
  );
}

export default App;
