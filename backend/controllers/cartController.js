
// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        const userData = await uderModel.findById(userId);
        let cartData = await userData.cartData;

        if (!cartData) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData: cartData });
        res.json({ success: true, message: "Item added to cart successfully" });
    
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}









// update user cart
const updateCart = async (req, res) => {

}




// get user cart
const getUserCart = async (req, res) => {

}



export { addToCart, updateCart, getUserCart };