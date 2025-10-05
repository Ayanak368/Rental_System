import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const { axios, currency } = useAppContext();

  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    category: '',
    name: '',
    size: '',
    pricePerDay: '0',
    colour: '',
    occasion: '',
    material: '',
    description: '',
    fullDescription: '',
    location: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (isLoading) return null
    setIsLoading(true)

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('productData', JSON.stringify(product))

      const { data } = await axios.post('/api/owner/add-product', formData)

      if (data.success) {
        toast.success(data.message);
        setImage(null);
        setProduct({
          category: '',
          name: '',
          size: '',
          pricePerDay: '0',
          colour: '',
          occasion: '',
          material: '',
          description: '',
          fullDescription: '',
          location: '',
        })
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title 
        title="Add New Product" 
        subtitle="Fill in details to list a new item for booking, including pricing, availability, and car specification" 
      />
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

        {/* Car Image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="product-image">
            <img 
              src={image ? URL.createObjectURL(image) : assets.upload_icon} 
              alt="" 
              className='h-14 rounded cursor-pointer'
            />
            <input 
              type="file" 
              id="product-image" 
              accept='image/*' 
              hidden 
              onChange={e => setImage(e.target.files[0])} 
            />
          </label>
          <p className='text-sm text-gray-500'>Upload the picture of the item</p>
        </div>

        {/* Name and Material */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Name</label>
            <input 
              type="text" 
              placeholder='e.g. Midnight Blue Lehenga...' 
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.name}  
              onChange={e => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Material</label>
            <input 
              type="text" 
              placeholder='e.g. silk, cotton...' 
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.material}  
              onChange={e => setProduct({ ...product, material: e.target.value })}
            />
          </div>
        </div>

        {/* Price, Size, Category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Size</label>
            <input 
              type="text" 
              placeholder='e.g. M, XL, XXL' 
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.size}  
              onChange={e => setProduct({ ...product, size: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Daily Price ({currency})</label>
            <input 
              type="number" 
              placeholder='0' 
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.pricePerDay}  
              onChange={e => setProduct({ ...product, pricePerDay: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select 
              onChange={e => setProduct({ ...product, category: e.target.value })}
              value={product.category} 
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
            >
              <option value="">Select a Category</option>
              <option value="Lehanga">Lehanga</option>
              <option value="Gown">Gown</option>
              <option value="Necklace">Necklace</option>
              <option value="Earrings">Earrings</option>
            </select>
          </div>
        </div>

        {/* Occasion, Color */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Color</label>
            <input 
              type="text" 
              placeholder='e.g. red, green...' 
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.colour}  
              onChange={e => setProduct({ ...product, colour: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Occasion</label>
            <input 
              type="text" 
              placeholder='e.g. wedding...' 
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={product.occasion}  
              onChange={e => setProduct({ ...product, occasion: e.target.value })}
            />
          </div>
        </div>

        {/* Location */}
        <div className='flex flex-col w-full'>
          <label>Location</label>
          <select 
            onChange={e => setProduct({ ...product, location: e.target.value })}
            value={product.location} 
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
          >
            <option value="">Select a Location</option>
            <option value="Calicut">Calicut</option>
            <option value="Kannur">Kannur</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Kollam">Kollam</option>
          </select>
        </div>

        {/* Description */}
        <div className='flex flex-col w-full'>
          <label>Description</label>
          <textarea 
            rows={5} 
            placeholder='Flowing silk gown with sequin details...' 
            required
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
            value={product.description} 
            onChange={e => setProduct({ ...product, description: e.target.value })}
          />
        </div>
        <div className='flex flex-col w-full'>
          <label>Full Description</label>
          <textarea 
            rows={5} 
            placeholder='Midnight Blue Gown Lehenga is a stunning silk gown...' 
            required
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
            value={product.fullDescription} 
            onChange={e => setProduct({ ...product, fullDescription: e.target.value })}
          />
        </div>

        <button 
          type="submit"
          className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'
        >
          <img src={assets.tick_icon} alt="" />
          {isLoading ? 'Listing....' : 'List Your Product'}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
