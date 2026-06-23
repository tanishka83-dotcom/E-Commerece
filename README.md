# Tech Gadget Store E-Commerce Backend API

## Contributors

- Nandini Chaurasiya
- Tanishka Nimbalkar

## Project Overview

Tech Gadget Store is a RESTful E-Commerce Backend API built using Node.js, Express.js, MongoDB, and JWT Authentication.

The system provides:

- User Registration & Login
- JWT Authentication
- Product Management
- Cart Management
- Order Management
- MongoDB Integration
- MVC Architecture

---

## Technologies Used

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Testing
- Postman

### Version Control
- Git & GitHub

---

## Project Structure

```text
E-Commerce
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
│
├── routes
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
│
├── .env
├── package.json
├── README.md
└── server.js
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Server

```bash
node server.js
```

or

```bash
npm start
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|----------|------------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /protected |

### Products

| Method | Endpoint |
|----------|------------|
| POST | /api/products |
| GET | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |

### Cart

| Method | Endpoint |
|----------|------------|
| POST | /api/cart |
| GET | /api/cart |
| PUT | /api/cart/:id |
| DELETE | /api/cart/:id |

### Orders

| Method | Endpoint |
|----------|------------|
| POST | /api/orders |
| GET | /api/orders |
| PUT | /api/orders/:id |
| DELETE | /api/orders/:id |

---

## Security Features

- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes
- Environment Variables

---

## Features

- User Registration & Login
- JWT Authentication
- Product CRUD Operations
- Cart Management
- Order Management
- MongoDB Integration
- Protected Routes
  
## Testing

All APIs were tested using Postman.

Tested Modules:

- Authentication
- Product CRUD Operations
- Cart CRUD Operations
- Order CRUD Operations

---
# Postman Collection

https://tanishkavijaynimbalkar83-7047007.postman.co/workspace/60968e93-f069-4991-88b6-ff86b35fdc2d/collection/55485774-1b779893-aa89-419a-b9ed-1a06f6f338e9?action=share&source=copy-link&creator=55485774

## Future Enhancements

- Payment Gateway Integration
- Product Reviews & Ratings
- Wishlist Feature
- Product Search & Filters
- Order Tracking System
- Admin Dashboard

---

## Conclusion

This project provides a complete E-Commerce Backend solution using Node.js, Express.js, MongoDB, JWT Authentication, and MVC Architecture.
