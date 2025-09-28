import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import ProductCards from '../components/ProductCards'
import { Link } from 'react-router-dom'

const Product = () => {

  const [input,setInput] = useState('')

  return (
    <div>
      
      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
      <Title
  title='Rent Your Perfect Outfit' 
  subtitle='From weddings to parties – find the perfect outfit and accessories to rent today.' 
        />
        
        <div className='flex items-center bg-white px-4 mt-6 max-w-140
        w-full h-12 rounded-full shadow'>
          <img src={assets.search_icon} alt="" className='w-4.5 h-4.5 h-4.5 mr-2' />
          <input onClick={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='search by type' className='w-full outline-none text-gray-500'/>
        <img src={assets.filter_icon} alt="" className='w-4.5 h-4.5 h-4.5 ml-2' />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>Showing {dummyCarData.length} products</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto' >
          {dummyCarData.map((product, index) => (
          <Link key={index} to={`/product-details/${product._id}`}>
           <ProductCards product={product}/>

          </Link>
        ))}

        </div>

      </div>


    </div>
  )
}

export default Product
