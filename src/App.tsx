import React from 'react'
import Home from './page/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link, Routes, Route } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import ProductDetail from './page/ProductDetail'
import Cart from './page/Cart'
import NotFout from './page/NotFout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productDetail' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
