import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProducItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-out"
          src={image[0]}
          alt="product_img"
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProducItem;
