# Forever Shopping - Backend API

A robust Node.js/Express backend server for the Forever Shopping e-commerce platform. Handles user authentication, product management, shopping cart operations, and payment processing with multiple payment gateways.

## 📋 Project Overview

The backend provides RESTful APIs for:

- User registration, login, and authentication
- Product catalog management
- Shopping cart operations
- Order placement and tracking
- Payment processing (COD, Stripe, Razorpay)
- Admin authentication and management
- Image upload to Cloudinary

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt & bcryptjs
- **Image Upload**: Cloudinary
- **Payment Gateways**:
  - Stripe v18.3.0
  - Razorpay v2.9.6
- **File Upload**: Multer
- **Utilities**: CORS, dotenv, Validator
- **Development**: Nodemon

## 📁 Project Structure

```
backend/
├── config/
│   ├── mongodb.js         # MongoDB connection setup
│   └── cloudinary.js      # Cloudinary configuration
├── controllers/           # Business logic handlers
│   ├── userController.js  # User auth & profile management
│   ├── productController.js # Product CRUD operations
│   ├── cartController.js  # Shopping cart operations
│   └── orderController.js # Order processing & payments
├── middleware/            # Custom middleware functions
│   ├── auth.js           # User authentication middleware
│   ├── adminAuth.js      # Admin authentication middleware
│   └── multer.js         # File upload middleware
├── models/               # Database schemas
│   ├── userModel.js      # User schema
│   ├── productModel.js   # Product schema
│   └── orderModel.js     # Order schema
├── routes/               # API endpoint definitions
│   ├── userRoute.js      # User routes
│   ├── productRoute.js   # Product routes
│   ├── cartRoute.js      # Cart routes
│   └── orderRoute.js     # Order routes
├── server.js             # Main application entry point
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
└── vercel.json          # Vercel deployment config
```

## 🗄️ Database Models

### User Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  cartData: Object (default: {})
}
```

### Product Model

- Product name, description, price
- Category and tags
- Multiple sizes available
- Product image (stored in Cloudinary)
- Stock/availability status

### Order Model

- User reference
- Order items with quantities and sizes
- Delivery address
- Total amount
- Payment method (COD, Stripe, Razorpay)
- Payment status
- Order date and status tracking

## 🔌 API Endpoints

### User Routes (`/api/user`)

| Method | Endpoint    | Description       | Auth |
| ------ | ----------- | ----------------- | ---- |
| POST   | `/register` | Register new user | No   |
| POST   | `/login`    | User login        | No   |
| POST   | `/logout`   | User logout       | Yes  |
| GET    | `/profile`  | Get user profile  | Yes  |

### Product Routes (`/api/product`)

| Method | Endpoint | Description      | Auth  |
| ------ | -------- | ---------------- | ----- |
| GET    | `/list`  | Get all products | No    |
| POST   | `/add`   | Add new product  | Admin |
| PUT    | `/:id`   | Update product   | Admin |
| DELETE | `/:id`   | Delete product   | Admin |

### Cart Routes (`/api/cart`)

| Method | Endpoint  | Description          | Auth |
| ------ | --------- | -------------------- | ---- |
| POST   | `/add`    | Add item to cart     | Yes  |
| POST   | `/update` | Update cart quantity | Yes  |
| POST   | `/get`    | Get user's cart      | Yes  |

### Order Routes (`/api/order`)

| Method | Endpoint          | Description             | Auth  |
| ------ | ----------------- | ----------------------- | ----- |
| POST   | `/place`          | Place COD order         | Yes   |
| POST   | `/stripe`         | Stripe checkout         | Yes   |
| POST   | `/razorpay`       | Razorpay payment        | Yes   |
| POST   | `/verifyStripe`   | Verify Stripe payment   | Yes   |
| POST   | `/verifyRazorpay` | Verify Razorpay payment | Yes   |
| GET    | `/userorders`     | Get user's orders       | Yes   |
| GET    | `/allorders`      | Get all orders          | Admin |
| PUT    | `/:id/status`     | Update order status     | Admin |

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Cloudinary account (for image uploads)
- Stripe account (optional, for payments)
- Razorpay account (optional, for payments)

### Installation Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**
   Create `.env` file in backend root:

   ```env
   PORT=4000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

   # Cloudinary
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

   # Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key

   # Razorpay
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret

   # Admin
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin_password
   ```

3. **Start the server**
   ```bash
   npm run start        # Production mode
   npm run server       # Development mode (with nodemon)
   ```
   Server runs at `http://localhost:4000`

## 📝 Available Scripts

- `npm run start` - Start server in production mode
- `npm run server` - Start server with hot reload (development)

## 🔐 Authentication & Security

### JWT Authentication

- User registration generates hashed password using bcrypt
- Login returns JWT token stored in localStorage (frontend)
- Protected routes verify token in request headers
- Token includes user ID for subsequent API calls

### Admin Authentication

- Separate admin credentials
- Admin routes require additional authentication middleware
- Separate auth endpoints for admin panel

### Password Security

- Passwords hashed using bcrypt before storage
- Never store plain text passwords
- Password validation on login

## 💳 Payment Gateway Integration

### Razorpay Integration

- Order creation with amount in paise (BDT)
- Payment verification using order ID
- Automatic order status update on successful payment
- Webhook support for payment notifications

### Stripe Integration

- Session-based checkout
- Secure payment processing
- Success/failure redirect URLs
- Webhook verification for payment confirmation

### Cash on Delivery (COD)

- Direct order placement
- Manual payment collection
- Order tracking for admin

## 📤 File Upload (Cloudinary)

- Product images uploaded to Cloudinary
- Automatic image optimization
- URL-based image delivery
- Supports multiple image formats

## 🚀 Deployment

### Vercel Deployment

- Configured with `vercel.json`
- Environment variables set in Vercel dashboard
- Automatic deployments from GitHub

### MongoDB Atlas

- Cloud-based MongoDB hosting
- Connection string in environment variables
- Automatic backups included

## 📊 Key Controllers

### userController.js

- User registration with validation
- Login with JWT generation
- Password hashing and verification
- User profile management

### productController.js

- CRUD operations for products
- Product filtering and search
- Image upload to Cloudinary
- Stock management

### cartController.js

- Add items to cart
- Update cart quantities
- Retrieve user cart
- Cart persistence (database + localStorage)

### orderController.js

- Order creation and management
- Integration with payment gateways
- Payment verification
- Order status tracking
- Order retrieval (user & admin views)

## 🛡️ Middleware

### auth.js - User Authentication

- Verifies JWT token from headers
- Extracts user ID from token
- Protects user-specific routes

### adminAuth.js - Admin Authentication

- Verifies admin credentials
- Protects admin-only routes
- Prevents unauthorized access

### multer.js - File Upload

- Handles multipart/form-data requests
- File size limiting
- Temporary file storage
- Integration with Cloudinary

## 🌍 Environment Configuration

The backend requires proper environment setup:

- Database connection string
- JWT secret for token generation
- Third-party service API keys (Cloudinary, Stripe, Razorpay)
- Admin credentials
- Server port configuration

## 📡 API Response Format

All API responses follow consistent JSON format:

**Success Response:**

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    /* response data */
  }
}
```

**Error Response:**

```json
{
  "success": false,
  "message": "Error description"
}
```

## 🔄 Request Headers

Protected routes require:

```
Authorization: Bearer {token}
Content-Type: application/json
```

## 📦 Dependencies Overview

| Package         | Purpose                 |
| --------------- | ----------------------- |
| express         | Web framework           |
| mongoose        | MongoDB ODM             |
| jsonwebtoken    | JWT authentication      |
| bcrypt/bcryptjs | Password hashing        |
| cloudinary      | Image hosting           |
| stripe          | Payment processing      |
| razorpay        | Indian payment gateway  |
| multer          | File upload handling    |
| cors            | Cross-origin requests   |
| dotenv          | Environment variables   |
| validator       | Input validation        |
| nodemon         | Development auto-reload |

## 🧪 Best Practices

- RESTful API design patterns
- Proper error handling and validation
- Security with JWT and bcrypt
- Database indexing for performance
- Middleware for cross-cutting concerns
- Environment-based configuration
- Code organization by feature

## 🔗 Integration with Frontend

The frontend communicates with this backend API:

- Frontend URL: `http://localhost:3000` (or Vercel deployed)
- Backend URL: `http://localhost:4000` (or Vercel deployed)
- CORS enabled for cross-origin requests
- JWT tokens passed in request headers

## ✨ Future Enhancements

- Email notifications (order confirmations, shipping updates)
- Webhook handlers for payment confirmations
- Advanced order filtering and analytics
- Product reviews and ratings
- Inventory management
- Admin dashboard with statistics
- Order tracking with real-time updates
- Multiple currency support

## 📄 License

Part of the Forever Shopping project suite.

**Note**: This is the backend API server.

---

### 🚀 Forever Shopping – Full Stack E-commerce Website: Short Guide to Creating the Backend Folder

#### Backend Part

- step-1 :
  Close all the frontend file and folder then create backend folder. After create backend folder look like `backend` now select the folder and right click and select the menu option `Open in Integrated Terminal` now the the another terminal for backend.

- step-2 : Now create the another file `server.js` inside the backend folder.

- step-3 : Now go to the backend terminal and follow the code.
  ```sh
  npm init
  ```
- step-4 : Then created the `package.json` file now open this file and remove the `"test": "echo \"Error: no test specified\" && exit 1",` line from the `Script` tag value and save change.

- step-5 : Now we will install some dependencise for backend so follow the code.

  ```sh
  npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay strip validator cloudinary bcrypt
  ```

  **Explanation of Dependencise Packages:**
  - `cors` - Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.
  - `dotenv` - Loads environment variables from a .env file.
  - `express` - Web framework for Node.js.

  - `jsonwebtoken` - For generating and verifying JWT (JSON Web Tokens) for authentication.

  - `mongoose` - MongoDB ODM (Object Data Modeling) for Node.js.

  - `multer` - Middleware for handling file uploads.

  - `nodemon` - Utility to automatically restart the Node.js server during development (usually installed as a dev dependency).

  - `razorpay` - Official Node.js SDK for Razorpay payment gateway.

  - `stripe` - Official Stripe API library for payments.

  - `validator` - Library for string validation and sanitization.

  - `cloudinary` - SDK for Cloudinary (image/video upload and management).

  - `bcryptjs` - Library for hashing passwords securely.

- step-6: Then we will create some folder inside the backend folder.

  `config`, `controllers`, `middleware`, `models`, `routes` etc.

- step-7: If we run the server then follow the code

  ```sh
  npm run server
  ```

- step-8: Use the [Cloudinarry](https://cloudinary.com/) API .

### For Deployment in Vercel the follow some step

create `vercel.json` file insite the `backend` root folder and paste the bellow code. Vercel json config for express backend

```bash
  {
    "version": 2,
    "builds": [
        {
            "src": "server.js",
            "use": "@vercel/node",
            "config": {
                "includeFiles": [
                    "dist/**"
                ]
            }
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "server.js"
        }
    ]
}
```
