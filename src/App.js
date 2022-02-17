import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NoFound from './components/NoFound';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>} />  
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
              <Route path="*" element={<NoFound/>} />
              <Route path="/cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
    );
}

export default App;
