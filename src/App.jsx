import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Productdetails from './pages/Productdetails'
import Product from './pages/Product'

const App = () => {

const[ShowLogin,setShowLogin] = useState(false)
const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product-details' element={<Productdetails/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/my-booking' element={<MyBookings/>}/>
  
      

    </Routes>

    </>
  )
}

export default App
