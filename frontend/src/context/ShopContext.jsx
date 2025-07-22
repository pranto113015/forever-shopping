import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "৳ ";
  const delivery_fee = 10;

  // backendUrl is imported from the admin app
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // for searching state
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // for products state
  const [cartItems, setCartItems] = useState({});

  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItems);
    // check if the item already exists in the cart
    // if it does, increment the quantity
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }

  };

  // add to card counter
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return totalCount;
  };




  // update quantity of the cart item
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {
      try {
          await axios.post(backendUrl + '/api/cart/update' , { itemId, size, quantity},{ headers: { token }});
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
};

  





const getCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => product._id === itemId);
    if (!itemInfo) continue; // ⚠️ যদি itemInfo না পাওয়া যায়, তাহলে skip
    for (const size in cartItems[itemId]) {
      try {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return totalAmount;
};









  // Fetch products data from the backend
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.nessage);
    }
  };





  
  // Fetch user cart data from the backend
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  
  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
  };

  ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validates that 'children' is a React node and required
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
