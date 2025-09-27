import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCards = ({product}) => {

    const currency =import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

  return (
    <div onClick={()=> {navigate(`product-details/${product._id}`); scrollTo(0,0)}} ///////////////////////////////////////////
    className='group rounded-xl overflow-hidden shadow-lg hover:translate-y-1 transition-all duration-500 cursor-pointer'>
      
      <div className='relative h-64 overflow-hidden'>
        <img src={product.image}  alt="product image" className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'/>

        {product.isAvailable && <p className='absolute top-4 left-4 bg-primary/90
         text-white text-xs px-2.5 py-1 rounded-full'>Available now</p>}

      <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
         <span className='font-semibold'> {currency}{product.pricePerDay} </span>
         <span className='text-sm text-white/80'> / day </span>
      </div>
      </div>
      <div className='flex justify-between items-start mb-2'>
        <div>
            <h3 className='text-lg font-medium'>{product.name}</h3>
            <p className='text-muted-foreground text-sm'>{product.description}</p>
        </div>
      </div>
      
    </div>
  ) 
}

export default ProductCards
