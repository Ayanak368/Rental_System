import React from 'react'
import Title from './Title'
import ProductCards from './ProductCards'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { easeOut, motion } from 'motion/react'

const FeaturedSection = () => {

   const navigate = useNavigate()
   
   const{products} = useAppContext()

  return (
     <motion.div
     initial={{ y: 40, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration:1,ease:"easeOut"}}
        className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      
        <motion.div
         initial={{ y: 20, opacity: 0 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{duration:1,delay:0.5}}> 
         <Title title='Featured Collection' subtitle='Handpicked Styles for Every Occasion – Rent, Shine, Repeat!' />
      </motion.div>

        <motion.div
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{duration:1,delay:0.5}}
           className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
     
      {
         products.slice(0,6).map((product)=> (
            <motion.div key={product._id}
            initial={{ scale:0.95, opacity: 0 }}
           whileInView={{ opacity: 1, y: 1 }}
           transition={{duration:0.4,ease:'easeOut'}}>
            <ProductCards product={product}/>
            </motion.div>
         ))
      }
     </motion.div>
        <motion.button
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{duration:0.4,delay:0.6}}
           onClick={() => {
        navigate('/products'); window.scrollTo(0,0)
     }}
      className='flex items-center justify-center gap-2 px-6 py-2 border
            border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
        Explore our Collection <img src={assets.arrow_icon} alt='arrow'></img>
    </motion.button>

    </motion.div>
  )
}

export default FeaturedSection