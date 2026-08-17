<div align="center">

# ⚡ Zippy

### *A Real-Time, Seamless Messaging Experience*

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Zustand](https://img.shields.io/badge/Zustand-443e38?style=for-the-badge&logo=react&logoColor=white)](https://zustand-demo.pmnd.rs/)

<p align="center">
  <a href="#-highlights">Highlights</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-architecture">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-environment-variables">Environment</a>
</p>

---

</div>

## 🌟 Highlights

**Zippy** is a full-stack real-time chat application engineered for fast, instant communication. Powered by **Express.js**, **Socket.io**, and lightweight client-side state management with **Zustand**, Zippy pairs reliable performance with a modern interface built using **Tailwind CSS** and **daisyUI**.

---

## ✨ Features

* ⚡ **Real-Time Messaging:** Instant bi-directional message synchronization via **Socket.io**.
* 🚀 **Robust REST API:** Powered by **Express.js** for secure routing, controllers, and middleware authentication.
* 🧠 **Reactive State Management:** Global store architecture powered by **Zustand**.
* 🎨 **daisyUI & Tailwind Styling:** Sleek chat bubbles, loading spinners, dialog modals, and theme support.
* 🗓️ **Smart Date Dividers:** Clean timeline segmentation with automatic date grouping.
* 📜 **Smooth Auto-Scroll:** Chat automatically pins to the latest message on arrival.
* 💀 **Skeleton Loaders:** Fluid UX with shimmer states and daisyUI loading indicators during data fetching.
* 🛡️ **Account Control & Safeguards:** Clean account deletion flows and farewell confirmation modals.

---

## 🛠️ Tech Stack

### **Frontend**
* **React** (Hooks, Context, Functional Components)
* **Zustand** (Global Store for active conversations & messages)
* **Tailwind CSS & daisyUI** (Component styling, themes, and utility classes)
* **React Icons** (UI icons)
* **Socket.io-client** (Real-time WebSocket events)

### **Backend**
* **Node.js** (JavaScript Runtime Environment)
* **Express.js** (REST API routing, middleware, and request handling)
* **Socket.io** (WebSocket server for live chat synchronization)
* **MongoDB & Mongoose** (NoSQL Database & Schema Modeling)
* **JWT & Cookie-Parser** (Token-based authentication & route security)

---

## 📂 Project Architecture

```plaintext
zippy/
├── frontend/
│   ├── src/
│   │   ├── components/      # UI components (Message, DateSeparator, Farewell, etc.)
│   │   ├── hooks/           # Custom hooks (useGetMessages, useListenMessages, etc.)
│   │   ├── skeleton/        # Skeleton loader components
│   │   ├── zustand/         # Global state stores (useConversation)
│   │   └── utils/           # Helper formatters & date utilities
│   └── package.json
└── backend/
    ├── controllers/         # Express Route Handlers & Business Logic
    ├── middleware/          # JWT Protect Route Middleware
    ├── models/              # MongoDB Schemas (Message, Conversation, User)
    ├── routes/              # Express API Route Declarations
    ├── socket/              # Socket.io connection & event logic
    ├── server.js            # Express server initialization & entry point
    └── package.json