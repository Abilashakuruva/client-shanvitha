🧠 Project Overview (Likely Stack: MERN - MongoDB, Express.js, React.js, Node.js)
1. Frontend (Client)
Built with React.js, hosted on Vercel.

Represents the user-facing side of the application.

Likely includes:

Home/Landing page

Product or service listings

Booking, registration, or contact forms

User login/signup functionality

Calls backend APIs to fetch or send data

2. Admin Dashboard
Also a React.js app, hosted separately on Vercel.

Purpose: Manage or monitor backend data like vendors,  firms, products, etc.

Common features:

Admin login/authentication

Table views for CRUD operations

Status, reports, or graphical insights

Protected routes using role-based access

3. Backend (Node.js + Express)
Deployed on Render, serves as the API provider for both client and dashboard.

Possible features:

RESTful API endpoints (GET, POST, PUT, DELETE)

Authentication (JWT or session-based)

Database integration (likely MongoDB )

Middleware for validation, error handling, CORS, etc.

API routes for:

vendor auth

Admin actions

Data handling for register vendor/ firm/ firm productes etc.

🚀 Technologies Likely Used:
Frontend: React, React Router, Axios/Fetch, CSS Modules 

Backend: Node.js, Express.js, MongoDB (via Mongoose), JWT, bcrypt

Deployment: Vercel (frontend), Render (backend)

Extras: Form validation (Formik/Yup), State management , Protected Routes, etc.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
