# Kavishita Elegance – Jewellery E-Commerce Website

Kavishita Elegance is a modern jewellery shopping website built using the **MERN stack**.
The platform allows users to browse jewellery products, view product details, add items to cart, and place orders through a smooth checkout experience.

This project demonstrates **full-stack development** with frontend UI, backend APIs, and database integration.

---

## Features

### User Features

* User Signup and Login
* Google Authentication (Firebase)
* Browse Jewellery Products
* Product Details Page
* Add to Cart
* Cart Drawer with Quantity Controls
* Remove Items from Cart
* Checkout Page
* Order Summary
* Responsive Design

### Admin / Backend Features

* Product API
* User Authentication API
* MongoDB Database Integration
* Secure Password Hashing using bcrypt
* JWT Authentication
* REST API Architecture

---

## Tech Stack

### Frontend

* React.js
* React Router
* Context API
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Compass

### Authentication

* Firebase Google Authentication
* JWT (JSON Web Token)
* bcrypt password hashing

---

## Project Structure

```
kavishita-elegance/
│
├── frontend/
│   ├── src/
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   └── assets
│
├── backend/
│   ├── routes
│   ├── models
│   ├── config
│   └── server.js
│
└── README.md
```

---

## Installation

### 1. Clone the Repository

```
git clone https://github.com/yourusername/kavishita-elegance.git
```

### 2. Navigate to Project Folder

```
cd kavishita-elegance
```

---

## Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/kavishita
JWT_SECRET=secretkey
```

Run backend server:

```
npm start
```

---

## Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```

---

## API Endpoints

### Products

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/products     | Get all products   |
| GET    | /api/products/:id | Get single product |
| POST   | /api/products     | Add new product    |

### Users

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| POST   | /api/users/signup | Register new user |
| POST   | /api/users/login  | Login user        |

---

## Screens Included

* Home Page
* Product Listing Page
* Product Details Page
* Cart Drawer
* Checkout Page
* Login Page
* Signup Page
* User Profile Page

---

## Future Improvements

* Payment Gateway Integration (Stripe / Razorpay)
* Order History Page
* Admin Product Dashboard
* Product Search and Filters
* Wishlist Feature

---

## Author

**Gunasundary Boopalan**

Project developed as part of a **Full Stack Web Development learning project** demonstrating MERN stack skills.

---

## License

This project is created for **educational purposes**.
