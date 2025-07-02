import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
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
        console.error(error);
        toast.error("Failed to add item to cart.");
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

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if(token){
      try {
        await axios.post(backendUrl + 'api/cart/update', {itemId, size, quantity},{headers: {token}})
      } catch (error){
        console.error(error);
        toast.error("Failed to update item quantity.");
      }
    }


  };











  // get total amount of the cart
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart amount:", error);
        }
      }
    }
    return totalAmount;
  };

  // Fetch products data from the backend
  const getProductsData = async () => {
    try {
      const apiUrl = new URL("/api/product/list", backendUrl).toString();

      const response = await axios.get(apiUrl);

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error("No products found");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to load products.");
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
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
