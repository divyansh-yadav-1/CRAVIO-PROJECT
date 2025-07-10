# 🍽️ Cravio - Food Delivery App
**LIVE**- https://cravio-frontend.onrender.com

**Cravio** is a modern, full-stack food delivery web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js), integrated with **Stripe** for secure online payments. Whether you're craving something spicy or sweet, Cravio brings your favorite meals to your doorstep with ease.

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure user sign-up and login.
- 🏪 **Restaurant & Menu Browsing** – Discover restaurants and their food items.
- 🛒 **Cart Management & Orders** – Add to cart, review, and place orders.
- 💳 **Stripe Payments** – Smooth and secure payment process.
- 📦 **Live Order Tracking** – Track your order status in real-time.
- 🛠 **Admin Panel** – Manage restaurants, menus, and orders (for admins).

---

## 🧰 Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React.js, Redux, CSS        |
| Backend   | Node.js, Express.js         |
| Database  | MongoDB                     |
| Payments  | Stripe                      |

---

## ⚙️ Installation & Setup

### Step 1: Clone the Repository

git clone https://github.com/your-username/cravio-project.git
cd cravio


Install dependencies:

    cd backend
    npm install

Frontend:

    cd frontend
    npm install

Set up environment variables:
  Create a .env file in the backend directory and add the following:
  
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      STRIPE_SECRET_KEY=your_stripe_secret_key

  Create a .env file in the frontend directory and add the following:

    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key

Run the application:
  Backend:
  
    cd backend
    npm run server

  Frontend:
  
    cd frontend
    npm run dev



Usage:
  1. Register/Login: Create a new account or log in with an existing one.
  2. Browse Restaurants: Explore available restaurants and their menus.
  3. Place an Order: Add items to your cart and place your order.
  4. Make a Payment: Complete your order using Stripe.
  5. Track Orders: Follow the status of your order in real-time.
