# Full Stack E-comerce Website Using MERN 


This is a complete **Full Stack E-commerce Web Application** built using the MERN stack (MongoDB, Express.js, React, Node.js) with secure Stripe payment integration. It includes all the core features of a modern e-commerce platform such as product listing, shopping cart, user authentication, order management, and payment processing. Whether you're learning MERN or building a real-world e-commerce solution, this project provides a solid foundation for scalable and production-ready applications.



## 🎯 Project Objectives

- **🔧 Build a complete MERN stack application** that follows modern development practices and architecture.
- **🎨 Develop a responsive and user-friendly UI** using React JS for seamless user experience across all devices.
- **🛡️ Implement user authentication and authorization** using JSON Web Tokens (JWT) for secure login and route protection.
- **🛒 Design a dynamic cart and checkout system** that supports both Cash on Delivery (COD) and Stripe payment processing.
- **🗃️ Manage product and order data** efficiently using MongoDB and Mongoose for database operations.
- **🧑‍💼 Include an Admin Dashboard** for managing products, users, and orders with real-time updates.
- **💳 Integrate Stripe API** to securely handle online payments and transaction management.
- **📦 Enable order tracking, history, and user account management** for a full-fledged e-commerce experience.
- **📁 Maintain clean, modular, and reusable code structure** to facilitate scalability and collaboration.



## 🚀 Core Features

-  **User Registration & Login** (JWT Authentication)
-  **Admin Panel** for Product & Order Management
-  **Add to Cart** and Full Checkout Flow
-  **Cash on Delivery (COD)** & **Stripe Payment** Integration
-  **Responsive UI** (Mobile-friendly Design)
-  **Protected Routes** for Users and Admins
-  **Order History** and Detailed Order View
-  **Clean and Scalable Folder Structure**



## 🖥️  Tech Stack

- **Frontend:** React JS, React Router, Axios, Bootstrap/Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB (with Mongoose)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Payment Integration:** Stripe API  
- **State Management:** Context API (or Redux, optional)  
- **Deployment Ready:** Environment variables (`.env`), modular folder structure

## ⚙️ Local Installation & Setup Guide (Windows)

A step-by-step guide to install and run the Forever-Shopping MERN stack project locally on your Windows PC.


### ✅ Prerequisites

Before starting, make sure the following tools are installed:

| Tool        | Purpose               | Download Link                         |
|-------------|------------------------|----------------------------------------|
| Node.js     | Backend & frontend runtime | [https://nodejs.org/](https://nodejs.org/) |
| Git         | Clone GitHub repo     | [https://git-scm.com/](https://git-scm.com/) |
| MongoDB Atlas| Cloud database       | [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register) |
| Code Editor | VS Code recommended   | [https://code.visualstudio.com/](https://code.visualstudio.com/) |

### 📥 Step 1: Clone the Project

```bash
git clone https://github.com/pranto113015/forever-shopping.git
cd forever-shopping
```

### 📦 Step 2: Setup Backend

```bash
cd backend
npm install
```
Create a .env file in the /backend directory:

```bash
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
```

Run the backend server:

```bash
npm run dev
```
Now Backend will run on like http://localhost:5000






## 🔐 Credentials for authentication (for testing)

| Role       | Email                 | Password  |
| ---------- | --------------------- | ----------|
| Admin      | admin@example.com     | admin123  |
| User       | user@gmail.com        | user@123  |






## 🔑 Credentials for payment (for testing)

| Role         | Email                 | Card No             | Date  | CVC | Phone     |
| -------------| --------------------- | --------------------|-------|-----|-----------|
| Stripe       | demo@gmail.com        | 4242 4242 4242 4242 | 12/34 | 567 |           |
| Razorpay     | demo@gmail.com        | 4386 2894 0766 0153 | 15/35 | 234 |9876543210 |



## 🔗 Live link

[Click here](https://forever-frontend-gamma-eight.vercel.app/)



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- Developed as part of the **own learning**.
- Inspired by MERN project like Full Stack E-comerce site.



**⭐ If you found this project helpful, please give it a star!**

This project demonstrates professional full-stack development with modern technologies, proper database integration and production-ready architecture. Perfect for showcasing your skills to potential employers!