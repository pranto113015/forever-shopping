import React, { useState } from "react";
import { assets } from "../assets/assets";

const Add = () => {

const [image1, setImage1] = useState(false);
const [image2, setImage2] = useState(false);
const [image3, setImage3] = useState(false);
const [image4, setImage4] = useState(false);

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("Men");
const [subcategory, setSubcategory] = useState("Topwear");
const [price, setPrice] = useState("");
const [sizes, setSizes] = useState([]);
const [bestseller, setBestseller] = useState(false);  


  return (
    <form className="flex flex-col w-full items-start gap-3"> 
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img  className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="upload_area_image" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img  className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="upload_area_image" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img  className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="upload_area_image" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img  className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="upload_area_image" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>



      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required/>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="write content here" required/>
      </div>


      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
       
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)}  className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

         <div>
          <p className="mb-2">Sub Category</p>
          <select onChange={(e)=>setSubcategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>



        <div>
          <p className="mb-2">Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="25" required/>
        </div>

      </div>



      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">

          <div onClick={()=>setSizes((prev)=>prev.includes("S") ? prev.filter((item)=>item!=="S") : [...prev,"S"])}>
            <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div onClick={()=>setSizes((prev)=>prev.includes("M") ? prev.filter((item)=>item!=="M") : [...prev,"M"])}>
            <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div onClick={()=>setSizes((prev)=>prev.includes("L") ? prev.filter((item)=>item!=="L") : [...prev,"L"])}>
            <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div onClick={()=>setSizes((prev)=>prev.includes("XL") ? prev.filter((item)=>item!=="XL") : [...prev,"XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>

          <div onClick={()=>setSizes((prev)=>prev.includes("XXL") ? prev.filter((item)=>item!=="XXL") : [...prev,"XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>

        </div>
      </div>




    <div className="flex gap-2 mt-2">
      <input type="checkbox"  id="bestseller"/>
      <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
    </div>



    <button className="w-28 py-3 mt-4 bg-black text-white" type="submit">ADD</button>
    </form>
  );
};

export default Add;
