import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddProduct = () => {

  const currency=import.meta.env.VITE_CURRENCY

  const [image, setImage] = useState(null)
  const [product, setProduct] = useState({
    category: '',
    name: '',
    size: '',
    pricePerDay: '',
    color: '',
    occasion: '',
    material: '',
    description: '',
    location:'',

  })

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

    
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Add New Product" subtitle="Fill in details to list a new item for booking, including pricing,availability, and car specification" />
      <form onSubmit={onSubmitHandler} className=' flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

        {/* car image*/}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="product-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
            <input type="file" id="product-image" accept='image/*' hidden onChange={e =>
              setImage(e.target.files[0])}/>
          </label>
          <p className='text-sm text-gray-500'>Upload the picture of the item</p>
        </div>
        { /* name and category*/}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Name</label>
            <input type="text" placeholder='e.g. MidNight blue lehanga....' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.name}  onChange={e=> setProduct({...product,name : e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Material</label>
            <input type="text" placeholder='e.g.silk,cotton....' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.material}  onChange={e=> setProduct({...product,material : e.target.value})}/>
          </div>
        </div>

        { /*price,size,category*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='flex flex-col w-full'>
            <label>Size</label>
            <input type="text" placeholder='e.g.M,XL,XXL' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.size}  onChange={e=> setProduct({...product,size : e.target.value})}/>
          </div>
        <div className='flex flex-col w-full'>
            <label>Daily Price ({currency})</label>
            <input type="number" placeholder='0' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.pricePerDay}  onChange={e=> setProduct({...product,pricePerDay : e.target.value})}/>
          </div>
        <div className='flex flex-col w-full'>
            <label>Category</label>
            <select onChange={e => setProduct({ ...product, category: e.target.value })}
              value={product.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md
            outline-none'>
              <option value="">Select a Category</option>
              <option value="Lehanga">Lehanga</option>
              <option value="Gown">Gown</option>
              <option value="Necklace">Necklace</option>
              <option value="Earrings">Earrings</option>
            </select>
          </div>
        </div>

        { /*occasion,color*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='flex flex-col w-full'>
            <label>Color</label>
            <input type="text" placeholder='e.g.red,green.....' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.color}  onChange={e=> setProduct({...product,color : e.target.value})}/>
          </div>
        <div className='flex flex-col w-full'>
            <label>Occasion</label>
            <input type="text" placeholder='e.g.wedding....' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.occasion}  onChange={e=> setProduct({...product,occasion : e.target.value})}/>
          </div>
        </div>
        { /*Location*/}
        <div className='flex flex-col w-full'>
        <label>Location</label>
            <select onChange={e => setProduct({ ...product, location: e.target.value })}
              value={product.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md
            outline-none'>
              <option value="">Select a Location</option>
              <option value="Calicut">Calicut</option>
              <option value="kannur">kannur</option>
              <option value="Trivandrum">Trivandrum</option>
              <option value="Kollam">Kollam</option>
            </select>
        </div>
        {/*Description*/}
        <div className='flex flex-col w-full'>
            <label>Description</label>
            <textarea rows={5} type="text" placeholder='Flowing silk gown with sequin details. Ideal for evening parties and receptions.' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
            value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })}>
            </textarea>
          </div>
        <div className='flex flex-col w-full'>
            <label>Full Description</label>
            <textarea rows={5} type="text" placeholder='Midnight Blue Gown Lehenga is a stunning silk gown perfect for .......' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
            value={product.fullDescription} onChange={e => setProduct({ ...product,fullDescription: e.target.value })}>
            </textarea>
          </div>
        <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium 
         w-max cursor-pointer'>
          <img src={assets.tick_icon} alt="" />
          List Your Colloctions
         </button>
      </form>
    </div>
  )
}

export default AddProduct
