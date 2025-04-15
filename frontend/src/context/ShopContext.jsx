import { createContext, useState } from "react";
import { products } from "../assets/assets";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  // for searching state
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);


  // for products state
  const [cartItems, setCartItems] = useState({});





 
  const addToCart = async (itemId, size) => {
    if(!size){
      toast.error("Please select a size");
      return
     }

  let cartData =structuredClone(cartItems);
  // check if the item already exists in the cart
  // if it does, increment the quantity
  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    }
    else {
      cartData[itemId][size] = 1;
    } 
  } 
  else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
   }
   setCartItems(cartData);
  }






// add to card counter
const getCartCount = () => {
  let totalCount = 0;
  for (const items in cartItems){
    for (const item in cartItems[items]){
      try {
        if (cartItems[items][item] > 0){
          totalCount += cartItems[items][item];
        }
        
      } catch (error) {
        console.error("Error calculating cart count:", error);
      }
    }
  }
  return totalCount;
}


const updateQuantity = (itemId, size, quantity) => {
  let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;
           setCartItems(cartData);
}






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
  };
  
  ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validates that 'children' is a React node and required
};


  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
  
};
export default ShopContextProvider;
