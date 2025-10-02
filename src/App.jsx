import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Product from './pages/Product'
import Footer from './components/Footer'
import Productdetails from './pages/Productdetails'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddProduct from './pages/owner/AddProduct'
import ManageProduct from './pages/owner/ManageProduct'
import ManageBooking from './pages/owner/ManageBooking'

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
    
         <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct/>}/> 
          <Route path="manage-Product" element={<ManageProduct/>}/> 
          <Route path="manage-Booking" element={<ManageBooking/>}/> 

        </Route>
    </Routes>
    {!isOwnerPath && <Footer />}


    </>
  )
}

export default App
