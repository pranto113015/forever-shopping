import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
  <div>

  </div>
  );
};

export default LatestCollection;
