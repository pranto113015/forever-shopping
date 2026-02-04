# Forever Shopping - Admin Dashboard

A comprehensive admin management dashboard built with React, Vite, and Tailwind CSS. Allows administrators to manage products, view orders, and control the entire e-commerce platform.

## 📋 Project Overview

The admin dashboard provides administrators with:

- Secure login and authentication
- Product management (Add, Delete)

- Image upload functionality
- Order management and tracking
- Order status updates

- User-friendly admin interface

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4.1.8 with PostCSS
- **Routing**: React Router DOM v7.6.1
- **HTTP Client**: Axios v1.9.0
- **Notifications**: React Toastify v11.0.5
- **Icons**: React Icons v5.5.0
- **Linting**: ESLint with React support

## 📁 Project Structure

```
admin/
├── src/
│   ├── assets/              # Images, logos, and static assets
│   ├── components/          # Reusable UI components
│   │   ├── Login.jsx       # Admin login page
│   │   ├── Navbar.jsx      # Top navigation bar
│   │   └── Sidebar.jsx     # Side navigation menu
│   ├── pages/              # Admin page components
│   │   ├── Add.jsx         # Add new product page
│   │   ├── List.jsx        # Product list page
│   │   └── Orders.jsx      # Orders management page
│   ├── App.jsx             # Main app component & routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## 🎯 Key Features

### Product Management

- **Add Products**
  - Product name, description, and pricing
  - Multiple size options
  - Stock quantity per size
  - Product category and tags
  - Image upload to Cloudinary
  - Real-time form validation

- **Product List**
  - View all products with pagination
  - Edit existing products
  - Delete products
  - Quick product information display
  - Search and filter capabilities

### Order Management

- **View Orders**
  - Complete order list with details
  - Customer information
  - Order items and quantities
  - Delivery address
  - Order status tracking
  - Payment method display

- **Order Status Updates**
  - Mark orders as pending, shipped, or delivered
  - Real-time status changes
  - Order fulfillment tracking
  - Payment confirmation status

### Admin Authentication

- Secure login page
- JWT token-based authentication
- Session persistence
- Logout functionality
- Protected admin routes

### Dashboard Design

- Clean, intuitive interface
- Responsive layout for different screens
- Sidebar navigation for easy access
- Top navbar with admin info
- Toast notifications for user feedback

## 🔌 API Integration

The admin dashboard communicates with the backend API:

### Authentication

- `POST /api/admin/login` - Admin login
- Uses JWT token for all subsequent requests

### Product Endpoints

- `GET /api/product/list` - Fetch all products
- `POST /api/product/add` - Add new product
- `PUT /api/product/:id` - Update product
- `DELETE /api/product/:id` - Delete product

### Order Endpoints

- `GET /api/order/allorders` - Fetch all orders
- `PUT /api/order/:orderId/status` - Update order status
- `POST /api/order/verifyStripe` - Verify Stripe payments
- `POST /api/order/verifyRazorpay` - Verify Razorpay payments

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running

### Installation Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**
   Create `.env` file in admin root:

   ```env
   VITE_BACKEND_URL='http://localhost:4000'
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Admin panel runs at `http://localhost:5174`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔐 Security & Authentication

### Admin Login

- Secure credential validation against backend
- JWT token generation on successful login
- Token stored in localStorage for persistence
- All API requests include token in headers

### Protected Routes

- Routes automatically protected with token check
- Redirects to login if token is missing or invalid
- Token validation on every admin action

### Password Security

- Passwords are never stored locally
- Backend handles password hashing
- Secure token transmission over HTTPS (in production)

## 📊 Component Details

### Login.jsx

- Admin email and password input
- Form validation
- Error handling with toast notifications
- Automatic redirect on successful login
- Token management

### Navbar.jsx

- Admin information display
- Logout button
- Brand/logo display
- Quick access links
- Responsive design

### Sidebar.jsx

- Navigation menu with routes
  - Add Product
  - Product List
  - Orders
- Active route highlighting
- Mobile-responsive menu toggle

### Add.jsx (Add Product Page)

- Product form with fields:
  - Product name
  - Description
  - Price
  - Sizes and quantities
  - Category/Tags
  - Product image
- Image preview before upload
- Form submission to backend
- Success/error notifications

### List.jsx (Product List Page)

- Table display of all products
- Product details:
  - Image thumbnail
  - Name and price
  - Category
  - Stock information
- Actions:
  - Edit button (routes to edit form)
  - Delete button with confirmation
- Pagination for large product lists
- Search functionality

### Orders.jsx (Orders Management)

- Complete order information display
- Order status management
- Customer details
- Delivery address
- Payment information
- Items ordered with quantities
- Status update dropdown:
  - Order Placed
  - Packing
  - Shipped
  - Delivered
- Real-time updates

## 🌍 Global Configuration

### App.jsx Configuration

- `backendUrl` - Backend API base URL
- `currency` - Display currency (৳)
- Authentication state management
- Route configuration
- Token persistence

## 📱 Responsive Design

- **Mobile First** approach with Tailwind CSS
- Sidebar collapses on mobile
- Table responsiveness for order/product lists
- Touch-friendly buttons and inputs
- Optimized form layouts for all screen sizes

## 🎨 UI/UX Features

- Clean, professional design
- Consistent color scheme
- Toast notifications for feedback
- Loading states during API calls
- Confirmation dialogs for destructive actions
- Form validation with helpful error messages
- Responsive grid layouts

## 📦 Dependencies

- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing
- **axios**: HTTP client for API calls
- **react-toastify**: Toast notifications
- **react-icons**: Icon library
- **tailwindcss**: Utility-first CSS framework

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` directory.

### Vercel Deployment

- Configured with `vercel.json`
- Environment variables set in Vercel dashboard
- Automatic deployments from GitHub

## 🔄 Workflow

1. **Login**: Admin enters credentials on login page
2. **Navigation**: Use sidebar to navigate to different sections
3. **Product Management**:
   - Add new products via Add page
   - View/Edit/Delete products via List page
   - Upload images to Cloudinary
4. **Order Management**:
   - View all customer orders
   - Update order status as fulfilled
   - Track payment status

## 🧪 Testing Admin Features

### Test Admin Credentials

Use the credentials defined in backend `.env`:

- Email: `admin1@example.com`
- Password: `admin123`

### Test Product Operations

1. Add a test product
2. View it in the product list
3. Edit the product
4. Delete the product

### Test Order Management

1. Place an order from frontend
2. View order in admin panel
3. Update order status
4. Verify status updates in customer orders

## ✨ Future Enhancements

- Dashboard with sales statistics
- Advanced product filtering
- Bulk product import/export
- Inventory alerts
- Customer management
- Revenue reports and analytics
- Email notifications for orders
- Refund management
- Staff/User role management
- Audit logs for actions

## 🔗 Integration with Other Parts

### Frontend Integration

- Admin panel URL: `https://forever-admin-omega-liard.vercel.app/`
- Linked from frontend navbar
- Separate authentication system

### Backend Integration

- Communicates with `http://localhost:4000` backend
- Uses same JWT authentication
- Accesses all admin endpoints
- Handles file uploads through backend

## 📞 Support & Documentation

For detailed API documentation, refer to the [backend README](../backend/README.md).

For frontend information, refer to the [frontend README](../frontend/README.md).

## 📄 License

Part of the Forever Shopping project suite.

**Note**: This is the admin dashboard application.

### 🚀 Forever Shopping – Full Stack E-commerce Website: Short Guide to Creating the Admin Folder

#### Admin Part

- step-1 :
  ```sh
  npm create vite@latest
  ```
- step-2 : created project name `admin`
- step-3 : selected framwork `react`
- step-4 : seleted variant `JavaScript`
- step-5 :

  ```sh
  cd frontend
  ```

  ```sh
  npm install
  ```

  ```sh
  npm install axios react-router-dom react-toastify

  ```

  ```sh
  npm run dev
  ```

- step-6 : Install Tailwindcss Using PostCSS (v4.1)
  - Install Tailwind CSS

    ```sh
    npm install tailwindcss @tailwindcss/postcss postcss
    ```

  - Add Tailwind to your PostCSS configuration make the file (postcss.config.js) and copy the code .
    ```sh
    export default {
    plugins: {
        "@tailwindcss/postcss": {},
      }
    }
    ```
  - Import Tailwind CSS Copy the code and paste the index.css file.

    ```sh
    @import "tailwindcss";
    ```

  - Add Tailwind to your PostCSS another configuration make the file (tailwind.config.js) and copy the code.
    ```sh
        /** @type {import('tailwindcss').Config} */
    export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```
  - Start your build process

    ```sh
    npm run dev
    ```

- step-7 : Add Toastify header file in the `App.jsx` file
  ```sh
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  ```

### For Deployment in Vercel the follow some step

create `vercel.json` file insite the `admin` root folder and paste the bellow code.
Vercel json config to support React Router in frontend

```bash
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/"
      }
    ]
  }
```
