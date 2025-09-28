import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import Loader from '../components/Loader'
const currency =import.meta.env.VITE_CURRENCY


const Productdetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [showFullDescription, setShowFullDescription] = useState(false) // <-- toggle state

  useEffect(() => {
    setProduct(dummyCarData.find((product) => product._id === id))
  }, [id])

  if (!product) return <Loader />

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'
      >
        <img src={assets.arrow_icon} alt="" className='rotate-180 opacity-65' />
        Back to all collection
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/* Left: product images & details */}
        <div className='lg:col-span-2'>
        <img
          src={product.image}
       alt={product.name}
  className='w-full max-h-[500px] object-contain rounded-xl mb-6 shadow-md'
/>


          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold'>{product.category}</h1>
              <p>{product.name}</p>
            </div>

            <hr className='border-borderColor my-6' />

            {/* Product Attributes */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { label: "Size", value: product.size },
                { label: "Material", value: product.material },
                { label: "Color", value: product.color },
                { label: "Occasion", value: product.occasion },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center px-4 py-3 bg-white shadow-md rounded-xl min-w-[100px] hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-gray-500 text-sm">{label}</span>
                  <span className="font-semibold text-gray-800">{value}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-6">
              <h1 className="text-2xl font-semibold mb-3">Description</h1>
              <p className="text-gray-600 leading-relaxed">
                {showFullDescription ? product.fullDescription : product.description}
              </p>
              <button
                className="text-blue-600 mt-2"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? "Show Less" : "Read More"}
              </button>
            </div>

            {/* Features */}
            <div className="mt-6">
              <h1 className="text-2xl font-semibold mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  `Size: ${product.size}`,
                  `Material: ${product.material}`,
                  `Color: ${product.color}`,
                  `Occasion: ${product.occasion}`,
                  `Available: ${product.isAvailable ? "Yes" : "No"}`,
                  `Price per Day: ₹${product.pricePerDay}`,
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center bg-white shadow-sm rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <img src={assets.check_icon} alt="" className="h-4 w-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Right: Booking form */}
        <form className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500'>
          <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>
            {currency}{product.pricePerDay} <span className='text-base text-gray-400 font-normal'> per day</span></p>
          
          <hr className='border-borderColor my-6' />
          
          <div className='flex flex-col gap-2'>
            <label htmlFor="pick-up-date">Pickup Date</label>
            <input type="date" className='border border-borderColor px-3 py-2 rounded-lg'
            required id='pickup-date' min={new Date().toISOString().split('T')[0]}/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="return-date">Return Date</label>
            <input type="date" className='border border-borderColor px-3 py-2 rounded-lg'
            required id='return-date' min={new Date().toISOString().split('T')[0]}/>
          </div>

          <button className='w-full bg-primary hover:bg-primary-dull 
          transition-all py-3 font-medium text-white rounded-xl
          cursor-pointer'>Book Now</button>
       <p className='text-center text-sm'>No credit card required to reserve</p>
        </form>
      </div>
    </div>
  )
}

export default Productdetails
