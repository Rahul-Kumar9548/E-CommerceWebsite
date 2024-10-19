import express from 'express';
import { placeOrder, placeOrderStripe,placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe} from '../controllers/orderController.js';
import adminAuth from '../middlewares/adminAuth.js'
import authUser from '../middlewares/Auth.js';
const orderRouter = express.Router()
// Admin Feature
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

// Payment Featrure
orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);


// user feature
orderRouter.post('/userorders',authUser,userOrders);

// Verify Stripe
orderRouter.post('/verifyStripe', authUser, verifyStripe);

export default orderRouter