
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import Stripe from 'stripe';



// global variables
const currency ="bdt"; // currency for the application
const deliveryCharges = 10; 


// gateway initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);




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


// placing order using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;


       



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
 try {
    const { userId, items, amount, address } = req.body;
    const {origin} = req.headers;

     const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: formatDateTime(Date.now()) 
        };
        const newOrder = new orderModel(orderData)
        await newOrder.save();


        const line_items = items.map((item)=>({
            price_data: {
                currency:currency,
                product_data: {
                    name: item.name
               
                },
                unit_amount: item.price * 100, // Convert to cents
            },
            quantity: item.quantity
        }))
        line_items.push({
                 price_data: {
                currency:currency,
                product_data: {
                    name: 'Delivery Charges'
               
                },
                unit_amount: deliveryCharges * 100, // Convert to cents
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',


        })

        res.json({ success: true, session_url: session.url });




 } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
 }
}



// placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {

}


// all orders data for admin panel
const allOrders = async (req, res) => {
 try {
   const orders = await orderModel.find({});
   res.json({success:true,orders})

 } catch (error){
    console.log(error);
    res.json({success:false, message:error.message});
 }
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
try {
    const {orderId, status} = req.body;
    await orderModel.findByIdAndUpdate(orderId, {status});
    res.json({success:true, message:"Status Updated Successfully"});
} catch (error){
    console.log(error);
    res.json({success:false, message:error.message});
}
}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, formatDateTime };


