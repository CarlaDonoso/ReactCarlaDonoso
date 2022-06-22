
import Navbar from './components/Navbar';
import './App.css';
import { Component } from './components/ItemCount';
import Container from './components/ItemListContainer';
import { Carrito } from './components/CartWidget/CartWidget';



function App() {
  return (
    <>
<Navbar/>
<Container/>
<Component/>
<Carrito/>
</>
  );
}

export default App;
