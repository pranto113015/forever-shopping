import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';



// placing order using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;


        // for formatting date like "24-Jul-2025 07:45 PM"
        const formatDateTime = (date) => {
            const d = new Date(date);

            // Date part
            const day = String(d.getDate()).padStart(2, '0');
            const month = d.toLocaleString('en-US', { month: 'short' });
            const year = d.getFullYear();

            // Time part
            let hours = d.getHours();
            const minutes = String(d.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // Convert to 12-hour format
            const time = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

            return `${day}-${month}-${year} ${time}`;
        };



        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: formatDateTime(Date.now()) // Example: "24-Jul-2025 07:45 PM"
        };





        
        const newOrder = new orderModel(orderData)
        await newOrder.save();


        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed Successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


// placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {

}



// placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {

}


// all orders data for admin panel
const allOrders = async (req, res) => {

}





// user order data for frontend
const userOrders = async (req, res) => {
 try {
  const {userId} = req.body;

  const orders = await orderModel.find({userId})

  res.json({success:true, orders})
 } catch (error){
    console.log(error);
    res.json({success:false, message:error.message});
 }

}






// update order status from admin panel
const updateStatus = async (req, res) => {

}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus };


