import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Product from './pages/Product'
import Footer from './components/Footer'
import Productdetails from './pages/Productdetails'

const App = () => {

const[ShowLogin,setShowLogin] = useState(false)
const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product-details/:id' element={<Productdetails/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/my-booking' element={<MyBookings/>}/>
  

    </Routes>
    {!isOwnerPath && <Footer />}


    </>
  )
}

export default App
