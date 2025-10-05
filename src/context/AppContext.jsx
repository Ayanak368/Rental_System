import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loader

  // Load token and fetch data
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
      (async () => {
        await fetchUser();
        await fetchProducts();
        setLoading(false);
      })();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/user/data');
      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === 'owner');
      } else {
        setUser(null);
        setIsOwner(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      setUser(null);
      setIsOwner(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('/api/user/products');
      if (data.success) setProducts(data.products);
      else toast.error(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsOwner(false);
    delete axios.defaults.headers.common['Authorization'];
    toast.success('You have been logged out');
    navigate('/');
  };

  const value = {
    navigate,
    currency,
    axios,
    user,
    setUser,
    token,
    setToken,
    isOwner,
    setIsOwner,
    ShowLogin,
    setShowLogin,
    logout,
    fetchUser,
    fetchProducts,
    products,
    setProducts,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    loading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
