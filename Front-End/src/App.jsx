import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar/navbar' 
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'


const App=()=> {
  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens'  element={<ShopCategory/>} />
      <Route path='/womens'  element={<ShopCategory/>} />
      <Route path='/kids'  element={<ShopCategory/>} />
    </Routes>
    </BrowserRouter>
      
       
    </>
  )
}

export default App
