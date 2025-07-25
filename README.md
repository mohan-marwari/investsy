# Investsy  
_A Full-Stack Trading Platform inspired by Zerodha_  

![Logo](frontend/public/media/images/logo.svg)

---

## 📌 Overview  

**Investsy** is a modern full-stack trading platform that replicates key functionalities of platforms like Zerodha.  
It consists of:  

- **Backend (Node.js + Express + MongoDB)** → Handles authentication, holdings, orders, and positions APIs  
- **Frontend (React + Vite)** → Public-facing marketing website for onboarding users  
- **Dashboard (React + Vite)** → Interactive trading dashboard with live holdings, orders, and analytics  

This modular structure allows better scalability and separation of concerns between user acquisition (frontend) and actual trading functionalities (dashboard).  

---

## 🚀 Tech Stack  

- **Backend**: Node.js, Express.js, MongoDB  
- **Frontend**: React, Vite, CSS Modules  
- **Dashboard**: React, Context API, Charts (Doughnut/Vertical Graph)  
- **Others**: REST APIs, Modular architecture  

---

## 📂 Project Structure  

```plaintext
investsy/
├── backend/                 # Backend REST API
│   ├── config/db.js         # Database connection config
│   ├── controllers/         # Business logic (Holdings, Orders, Positions)
│   ├── model/               # Mongoose models for DB schema
│   ├── routes/              # Express routes
│   ├── utils/helpers.js     # Helper functions
│   ├── app.js               # Main entry point
│   ├── package.json         # Backend dependencies
│
├── dashboard/               # Trading dashboard (React + Vite)
│   ├── public/              # Static assets (icons, svg)
│   ├── src/
│   │   ├── assets/          # Images & icons
│   │   ├── components/      # UI components (BuyActionWindow, DoughnutChart, Menu)
│   │   ├── context/         # GeneralContext (state management)
│   │   ├── data/            # Dummy holdings data
│   │   ├── pages/           # Dashboard pages (Holdings, Orders, Positions)
│   │   ├── styles/          # CSS styles
│   │   ├── main.jsx         # Entry point
│   │   └── Dashboard.jsx    # Main dashboard layout
│   ├── package.json         # Dashboard dependencies
│
├── frontend/                # Marketing/Landing website (React + Vite)
│   ├── public/media/images/ # Logos, illustrations
│   ├── src/
│   │   ├── components/      # Common UI (Navbar, Footer)
│   │   │   ├── about/       # About page sections
│   │   │   ├── home/        # Home page sections (Hero, Stats, Pricing)
│   │   │   ├── pricing/     # Pricing components
│   │   │   ├── products/    # Product details sections
│   │   │   └── support/     # Support-related components
│   │   ├── pages/           # Page-level components (HomePage, Signup, Support)
│   │   ├── App.jsx          # Root component
│   │   ├── main.jsx         # Entry point
│   ├── package.json         # Frontend dependencies
│
└── README.md                # Project documentation
```

---

## 🛠️ Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/mohan-marwari/investsy.git
cd investsy
```

### 2️⃣ Backend Setup  
```bash
cd backend
npm install

# create a .env file for DB connection & secrets
npm start
```
Backend will run on **http://localhost:5000** (configurable)

### 3️⃣ Dashboard Setup  
```bash
cd dashboard
npm install
npm run dev
```
Dashboard will be available at **http://localhost:5173**

### 4️⃣ Frontend Setup  
```bash
cd frontend
npm install
npm run dev
```
Frontend marketing site will be available at **http://localhost:5174**

---

## ✨ Features  

✅ **Backend**  
- RESTful APIs for holdings, orders, positions  
- MongoDB integration for data persistence  
- Modular controllers & routes  

✅ **Dashboard**  
- Interactive trading dashboard  
- Holdings & Orders summary  
- Visual analytics with Doughnut & Vertical charts  
- Context API for global state  

✅ **Frontend**  
- Clean marketing website  
- Landing, Pricing, Support & Signup pages  
- Responsive design  

---

## 📸 Screenshots (Optional)  
> _You can add dashboard & frontend UI screenshots here_  

---

## 📖 Future Enhancements  

- ✅ Authentication (JWT + OAuth)  
- ✅ Real-time stock price updates (WebSockets)  
- ✅ Portfolio analytics with AI-based insights  
- ✅ Integration with live trading APIs  

---

## 🤝 Contributing  

Contributions are welcome!  

1. Fork the repo  
2. Create a new branch `feature/your-feature`  
3. Commit & push changes  
4. Create a PR  

---

## 📜 License  

This project is licensed under the **MIT License**  

---

## 👨‍💻 Author  

**Mohan Marwari**  
[LinkedIn](https://www.linkedin.com/in/mohan-marwari/) | [GitHub](https://github.com/mohan-marwari)
