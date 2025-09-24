# 👶 Carter's Clone

A **MERN stack** e-commerce web application inspired by Carter’s (kids clothing store).  
This project demonstrates a full-stack implementation with **React (Vite)** frontend, **Node.js/Express.js** backend.
For development, **JSON Server** is used as a mock API.

---

## 🚀 Features
- 🏠 **Home Page** – Showcasing featured kids clothing products.  
- 👕 **Product Listing** – Browse all available items with images, price, and description.  
- 🛒 **Shopping Cart** – Add/remove items and view total.  
- 🔍 **Search & Filter (Planned)** – Find products easily.  
- 👤 **User Authentication (Planned)** – Signup/Login with JWT.  
- 📱 **Responsive UI** – Works across desktop and mobile.  

---

## 🛠️ Tech Stack
**Frontend:**  
- React (Vite)  
- React Router  
- Tailwind CSS / CSS Modules  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (future integration)  
- JSON Server (mock APIs during development)  

**Others:**  
- Git & GitHub (version control)  

---

## 📂 Project Structure
```

Carter-s-Clone/
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── Components
│   │   ├── Baby
│   │   │   ├── AllRoutesBaby.jsx
│   │   │   ├── BabyBoy.jsx
│   │   │   ├── BabyGirl.jsx
│   │   │   ├── Baby.jsx
│   │   │   ├── BabyList.jsx
│   │   │   └── BabyNeutral.jsx
│   │   ├── CSS
│   │   │   ├── List.css
│   │   │   └── Tab.css
│   │   ├── Kid
│   │   │   ├── AllRoutesKid.jsx
│   │   │   ├── KidBoy.jsx
│   │   │   ├── KidGirl.jsx
│   │   │   ├── Kid.jsx
│   │   │   └── KidList.jsx
│   │   ├── Navbar
│   │   │   ├── IconNavbar.jsx
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── New & Popular
│   │   │   ├── AllRoutesNP.jsx
│   │   │   ├── CharShop.jsx
│   │   │   ├── FanShop.jsx
│   │   │   ├── NP.jsx
│   │   │   └── NPList.jsx
│   │   ├── Sale
│   │   │   ├── AllRoutesSale.jsx
│   │   │   ├── Clearance.jsx
│   │   │   ├── Sale1.jsx
│   │   │   ├── Sale.jsx
│   │   │   ├── SaleList.jsx
│   │   │   └── Under10.jsx
│   │   └── Toddler
│   │       ├── AllRoutesToddler.jsx
│   │       ├── ToddlerBoy.jsx
│   │       ├── ToddlerGirl.jsx
│   │       ├── Toddler.jsx
│   │       └── ToddlerList.jsx
│   ├── main.jsx
│   └── Pages
│       ├── Footer
│       │   ├── Footer.css
│       │   └── Footer.jsx
│       ├── LittlePlanet
│       │   ├── baby
│       │   │   ├── baby1.css
│       │   │   └── baby1.jsx
│       │   ├── Card
│       │   │   ├── Card.css
│       │   │   └── Card.jsx
│       │   ├── Page
│       │   │   ├── Littleplanet.css
│       │   │   └── Littleplanet.jsx
│       │   └── video
│       │       ├── video.css
│       │       └── video.jsx
│       ├── NavLinks
│       │   ├── create
│       │   │   ├── create.css
│       │   │   └── create.jsx
│       │   ├── ProductCart
│       │   │   ├── ProductCart.css
│       │   │   └── ProductCart.jsx
│       │   ├── signin
│       │   │   ├── signin.css
│       │   │   └── signin.jsx
│       │   └── tract
│       │       ├── tract.css
│       │       └── tract.jsx
│       ├── Oshkosh
│       │   ├── Card
│       │   │   ├── Card.css
│       │   │   └── Card.jsx
│       │   └── HomePage
│       │       ├── HomePage.css
│       │       └── HomePage.jsx
│       ├── ProdPage
│       │   ├── ProdDetail
│       │   │   ├── Product1.css
│       │   │   └── Product1.jsx
│       │   ├── ProdList
│       │   │   ├── ProductPage.css
│       │   │   └── ProductPage.jsx
│       │   └── Product
│       │       ├── Productdetails.css
│       │       └── ProductDetails.jsx
│       └── Routing.jsx
└── vite.config.js

````

---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/carters-clone.git
cd carters-clone
````

### 2️⃣ Install dependencies

**Frontend:**

```bash
npm install
npm install json-server
```

### 3️⃣ Run the project

**Start frontend (Vite):**

```bash
npm run dev
```

**Start (JSON Server):**

```bash
npx json-server --watch db.json --port 3000
```

---
## 📜 License

This project is for **educational purposes only** and is not affiliated with Carter’s official brand.

---
