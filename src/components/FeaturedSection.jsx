import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import ProductCards from './ProductCards'
import { useNavigate } from 'react-router-dom'
import Product from '../pages/Product'

const FeaturedSection = () => {

 const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      
      <div> 
         <Title title='Featured Collection' subtitle='Handpicked Styles for Every Occasion – Rent, Shine, Repeat!' />
      </div>

     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
     
      {
         dummyCarData.slice(0,6).map((product)=> (
            <div key={Product._id}>
            <ProductCards product={product}/>
            </div>
         ))
      }
     </div>
     <button onClick={() => {
        navigate('/product'); window.scrollTo(0,0)
     }}
      className='flex items-center justify-center gap-2 px-6 py-2 border
            border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
        Explore our Collection <img src={assets.arrow_icon} alt='arrow'></img>
    </button>

    </div>
  )
}

export default FeaturedSection
