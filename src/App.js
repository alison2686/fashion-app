import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import SingleProduct from './Pages/SingleProduct'
import Sales from './Pages/Sales'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/single-product' element={<SingleProduct />} />
          <Route path='/sale' element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
