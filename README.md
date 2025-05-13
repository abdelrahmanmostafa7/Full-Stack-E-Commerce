# BoKe E-Commerce Platform

BoKe is a full-stack e-commerce platform designed to provide a seamless shopping experience for users. It features a modern React-based frontend and a robust Node.js/Express backend with MongoDB as the database. The platform is built with scalability, performance, and user experience in mind.

---

## Features

### **Frontend**
- **Product Management**:
  - Dynamic product listing with filtering and sorting options.
  - Individual product pages with detailed information.
- **User Authentication**:
  - Secure login and registration with form validation.
  - JWT-based authentication for secure user sessions.
- **Shopping Cart**:
  - Add, remove, and update products in the cart.
  - Real-time cart updates using Redux state management.
- **Newsletter Subscription**: Users can subscribe to newsletters for updates on new products and offers.
- **Modern UI Components**:
  - Navbar with cart badge showing item count.
  - Slider for promotional banners.
  - Categories and featured products sections.
  - Footer with social media links and contact information.

### **Backend**
- **User Management**:
  - User registration and login with password encryption using `CryptoJS`.
  - Admin and user roles for access control.
- **Product Management**:
  - CRUD operations for products.
  - Category-based filtering and sorting.
- **Cart Management**:
  - Add, update, and delete items in the cart.
  - Retrieve user-specific cart data.
- **Order Management**:
  - Place, update, and delete orders.
  - Retrieve user-specific and all orders (admin only).
  - Monthly income statistics for admin users.
- **Authentication & Authorization**:
  - JWT-based authentication for secure API access.
  - Middleware for role-based access control.
- **Error Handling**:
  - Centralized error handling middleware for consistent API responses.

---

## Tech Stack

### **Frontend**
- **React**: Component-based architecture for building the UI.
- **Redux Toolkit**: State management for cart and user data.
- **Styled-Components**: CSS-in-JS for styling components.
- **React Router**: For client-side routing.
- **Material-UI Icons**: For modern and intuitive icons.

### **Backend**
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user, product, cart, and order data.
- **Mongoose**: ODM for MongoDB to manage schemas and queries.
- **JWT**: For secure user authentication.
- **CryptoJS**: For password encryption.
