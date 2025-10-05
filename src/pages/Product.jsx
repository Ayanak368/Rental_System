import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import ProductCards from '../components/ProductCards';
import { Link, useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import{motion} from 'motion/react'


const Product = () => {
  // Get URL search params
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get('pickupLocation');
  const pickupDate = searchParams.get('pickupDate');
  const returnDate = searchParams.get('returnDate');

  const { products, axios } = useAppContext();

  const [input, setInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const isSearchData = pickupLocation && pickupDate && returnDate ;

  // Filter products based on search input
  const applyFilter = (sourceProducts) => {
    if (!sourceProducts || sourceProducts.length === 0) return [];

    if (!input) return sourceProducts;

    return sourceProducts.filter((product) => {
      return (
        (product.category || '').toLowerCase().includes(input.toLowerCase()) ||
        (product.name || '').toLowerCase().includes(input.toLowerCase()) ||
        (product.occasion || '').toLowerCase().includes(input.toLowerCase())
      );
    });
  };

  // Fetch availability based on URL search params
  const searchProductAvailability = async () => {
    try {
      const { data } = await axios.post('/api/bookings/check-availability', {
        location: pickupLocation,
        pickupDate,
        returnDate,
      });

      if (data.success) {
        if (data.availableProducts.length === 0) {
          toast('No product available');
        }
        setFilteredProducts(applyFilter(data.availableProducts));
      } else {
        toast('No product available');
        setFilteredProducts([]);
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Failed to fetch products');
    }
  };

  // On component mount: fetch available products if URL params exist
  useEffect(() => {
    if (isSearchData) {
      searchProductAvailability();
    } else {
      // If no URL search params, show all products
      setFilteredProducts(applyFilter(products));
    }
  }, [products, isSearchData]);

  // Whenever input changes, reapply filter
  useEffect(() => {
    if (!isSearchData) {
      setFilteredProducts(applyFilter(products));
    } else {
      setFilteredProducts(applyFilter(filteredProducts));
    }
  }, [input]);

  return (
    <div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Rent Your Perfect Outfit"
          subtitle="From weddings to parties – find the perfect outfit and accessories to rent today."
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{duration:0.5,delay:0.3}}
          className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} alt="" className="w-4.5 h-4.5 mr-2" />
          <input
            type="text"
            placeholder="search by type"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full outline-none text-gray-500"
          />
          <img src={assets.filter_icon} alt="" className="w-4.5 h-4.5 ml-2" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration:0.5,delay:0.6}}
        className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? 's' : ''}
        </p>
        <motion.div
          initial={{ y:20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{duration:0.4}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <Link key={index} to={`/product-details/${product._id}`}>
              <ProductCards product={product} />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Product;
