# Forever Shopping - Frontend

A modern, responsive e-commerce frontend built with React, Vite, and Tailwind CSS. This is a full-featured shopping application with product browsing, cart management, and multiple payment gateway integrations.

## 📋 Project Overview

Forever Shopping is a complete e-commerce platform frontend that allows users to:

- Browse and search products
- Add items to cart with size selection
- Place orders with multiple payment options (COD, Stripe, Razorpay)
- Manage user accounts and view order history
- Responsive design for desktop and mobile devices

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Routing**: React Router DOM v6.26.2
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Icons**: React Icons
- **Linting**: ESLint with React support

## 📁 Project Structure

```
src/
├── assets/              # Images, logos, and static assets
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with cart & profile
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero banner
│   ├── LatestCollection.jsx  # Latest products showcase
│   ├── BestSeller.jsx  # Best-selling products
│   ├── CartTotal.jsx   # Cart summary
│   ├── NewsletterBox.jsx # Newsletter subscription
│   ├── OurPolicy.jsx   # Company policies
│   ├── ProducItem.jsx  # Product card component
│   ├── RelatedProducts.jsx # Related products display
│   ├── SearchBar.jsx   # Search functionality
│   └── Title.jsx       # Reusable title component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Collection.jsx  # Products collection/listing
│   ├── Product.jsx     # Product detail page
│   ├── Cart.jsx        # Shopping cart page
│   ├── PlaceOrder.jsx  # Order placement with payment
│   ├── Orders.jsx      # User order history
│   ├── Verify.jsx      # Payment verification
│   ├── Login.jsx       # User authentication
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── context/
│   └── ShopContext.jsx # Global state management (products, cart, auth)
├── App.jsx             # Main app component & routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Features

### Product Management

- Browse all products with filtering and search
- View detailed product information
- See related products on product detail page
- Product images and descriptions

### Shopping Cart

- Add items with size selection
- Adjust quantities
- View cart total
- Persistent cart storage (localStorage + backend)

### Payment Integration

- **Cash on Delivery (COD)** - Simple order placement
- **Stripe** - Credit card payments with secure checkout
- **Razorpay** - Indian payment gateway integration

### User Features

- User registration and login
- JWT-based authentication
- View order history
- Track order status
- User profile management

### Design & UX

- Fully responsive layout (mobile, tablet, desktop)
- Smooth navigation with React Router
- Toast notifications for user feedback
- Search bar for product discovery
- Newsletter subscription

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**
   Create `.env` file in frontend root:

   ```env
   VITE_BACKEND_URL='http://localhost:4000'
   VITE_RAZORPAY_KEY_ID='your_razorpay_key_id'
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Server runs at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔌 API Integration

The frontend communicates with the backend API at `VITE_BACKEND_URL`:

### User Endpoints

- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout

### Product Endpoints

- `GET /api/product/list` - Fetch all products

### Cart Endpoints

- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart quantities
- `POST /api/cart/get` - Fetch user's cart

### Order Endpoints

- `POST /api/order/place` - Place COD order
- `POST /api/order/stripe` - Stripe checkout
- `POST /api/order/razorpay` - Razorpay payment
- `POST /api/order/verifyStripe` - Verify Stripe payment
- `POST /api/order/verifyRazorpay` - Verify Razorpay payment
- `GET /api/order/userorders` - Get user's orders

## 🌍 Global State Management

The `ShopContext` provides global state for:

- `products` - All available products
- `cartItems` - Current cart contents
- `token` - User authentication token
- `search` - Search query state
- `currency` - Display currency (৳)
- `delivery_fee` - Shipping charges

### Context Methods

- `addToCart(itemId, size)` - Add item to cart
- `updateQuantity(itemId, size, quantity)` - Update item quantity
- `getCartAmount()` - Calculate total cart value
- `getCartCount()` - Get total items in cart
- `setToken(token)` - Set authentication token

## 📱 Responsive Design

- **Mobile First** approach with Tailwind CSS
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Touch-friendly interface elements

## 🔐 Security Features

- JWT token-based authentication
- Secure payment gateway integrations
- LocalStorage for persistent sessions
- Protected routes for authenticated users
- Input validation on forms

## 🧪 Development Best Practices

- Component-based architecture
- Reusable UI components
- Context API for state management
- Error handling with toast notifications
- Code linting with ESLint
- Responsive design patterns

## 📦 Dependencies

- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing
- **axios**: HTTP client for API calls
- **react-toastify**: Toast notifications
- **react-icons**: Icon library
- **tailwindcss**: Utility-first CSS framework

## 🔄 Build & Deployment

### Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📞 Integration with Backend

Ensure the backend server is running on `http://localhost:4000` before starting the frontend. Update `VITE_BACKEND_URL` if backend runs on a different port.

## ✨ Future Enhancements

- Product reviews and ratings
- Wishlist functionality
- Advanced filtering options
- Email notifications
- Admin dashboard integration
- Multiple language support
- Dark mode theme

## 📄 License

Part of the Forever Shopping project suite.

**Note**: This is a customer-facing frontend application.

---

### 🚀 Forever Shopping – Full Stack E-commerce Website: Short Guide to Creating the Frontend Folder

#### Frontend Part

- step-1 :
  ```sh
  npm create vite@latest
  ```
- step-2 : created project name `frontend`
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
  npm install react-router-dom react-toastify
  ```
  ```sh
  npm run dev
  ```
- step-6 : Install Tailwindcss Postcss
  ```sh
  npm install -D tailwindcss postcss autoprefixer
  ```
  ```sh
  npx tailwindcss init -p
  ```
- step-7 : Install axios
  ```sh
   npm i axios
  ```

### For Deployment in Vercel the follow some step

create `vercel.json` file insite the `frontend` root folder and paste the bellow code.
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
