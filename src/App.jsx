import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/marketplace/ProductDetails';
import Footer from './components/util/Footer';
import Nav from './components/util/Nav';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';

// https://www.figma.com/file/18hZ5n19imr8RxmzwXUtKK/ARTSY?node-id=433%3A143&t=ZUsH6UNnF8nMF9Vw-0

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/marketplace/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
