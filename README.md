# 🚀 Full Stack E-comerce Website Using MERN 


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
MONGODB_URL = your_mongodb_atlas_connection_string
CLOUDINARY_API_KEY = your_cloudinary_api_key
CLOUDINARY_SECRET_KEY = your_cloudinary_secret_key
CLOUDINARY_NAME = your_cloudinary_name
JWT_SECRET = your_jwt_secret
ADMIN_EMAIL = "admin@example.com"
ADMIN_PASSWORD = "admin123"
STRIPE_SECRET_KEY = your_stripe_secret_key
RAZORPAY_KEY_SECRET = your_rasorpay_key_secret
RAZORPAY_KEY_ID = your_rasorpay_key_id
PORT=5000
```
Run the backend server:

```bash
npm run dev
```
Now Backend will run on like http://localhost:5000


### 💻 Step 3: Setup Frontend
```bash
cd frontend
npm install
```
Create a .env file in the /frontend directory:

```bash
VITE_BACKEND_URL= your_backend_url_port 
VITE_RAZORPAY_KEY_ID = your_razorpay_key_id
```
Now Frontend will run on like http://localhost:3000



### ☁️ Step 4: MongoDB Atlas Setup (Free Cloud DB)

1. Visit: https://www.mongodb.com/cloud/atlas/register
2. Create a Free Shared Cluster
3. Create a DB user (e.g., e-commerce)
4. Whitelist IP Address → Allow Access from Anywhere (0.0.0.0/0)
5. Click Connect → Connect your application
6. Copy your Mongo URI Like :
    ```bash
    mongodb+srv://e-commerce:e-commerce12345@cluster0.abcd.mongodb.net/forever-shopping?retryWrites=true&w=majority
    ```
7. Paste it into your .env file as MONGO_URI


### 🔐 Step 5: Admin Setup
Option 1: Use Predefined Admin Credentials
| Role  | Email                                         | Password |
| ----- | --------------------------------------------- | -------- |
| Admin | [admin@example.com](mailto:admin@example.com) | admin123 |

Option 2: Promote Your Own Account 
1. Register a new user on the frontend

2. Go to MongoDB Atlas → Cluster → Collections → users

3. Find your user and update the role like:
    ```json
    {
    "role": "admin"
    }
    ```

4. Save and re-login — you now have admin access

**🎯 Done! Your full-stack e-commerce site is now running locally 🚀**


## 🧱 Project Structure
```bash
forever-shopping/
│
├── backend/                  # Express backend + Mongoose schemas
│   ├── controllers/          # Request handlers
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API routes
│   └── .env                  # Environment config
│
├── frontend/                 # React frontend
│   ├── components/           # Reusable UI components
│   ├── pages/                # User-facing pages
│   ├── context/              # Auth & state management
│   └── App.js                # Main app file
│
├── admin/                    # Admin dashboard
│   ├── components/           # Admin UI components (e.g., Sidebar, Navbar)
│   ├── pages/                # Admin pages (UserList, ProductList, Orders)
│   ├── services/             # API calls related to admin
│   ├── utils/                # Helper functions
│   └── App.js                # Admin app entry point
│
└── README.md                 # Project guide
```







## 🔗 Live link

[Click here](https://forever-frontend-gamma-eight.vercel.app/)



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- Developed as part of the **own learning**.
- Inspired by MERN project like Full Stack E-comerce site.



**⭐ If you found this project helpful, please give it a star!**

This project demonstrates professional full-stack development with modern technologies, proper database integration and production-ready architecture. Perfect for showcasing your skills to potential employers!