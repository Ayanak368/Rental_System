import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'

const Productdetails = () => {

 const {id} = useParams()
 const navigate =useNavigate()
 const [product, setProduct] = useState(null)
 useEffect(() => {
   setProduct(dummyCarData.find((product) =>product._id === id))
 },[id])


  return product ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
    <button onClick={()=> navigate(-1)} className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'>

    <img src={assets.arrow_icon} alt="" className='rotate-180 opacity-65' />
    Back to all collection</button>

    </div>
  ) : <p>Loading.....</p>
}

export default Productdetails

