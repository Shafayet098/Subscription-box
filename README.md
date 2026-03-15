# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Project Live Link: https://explore-email-password-a-ab3dc.web.app
Project Repository Link: 

📖 Project Overview

LilyBox is a Subscription Box Service Platform where users can browse curated subscription boxes, explore details, and manage their subscriptions. Each box is designed around specific interests such as technology, gaming, or lifestyle products.

Users can register, log in, review subscription services, and update their profile information.

The platform offers a smooth and personalized experience for discovering exciting monthly subscription boxes.

🎯 Purpose of the Project

The purpose of this project is to build a modern single-page subscription platform using React, Firebase Authentication, and dynamic routing.

It demonstrates:

User authentication system

Protected routes

Dynamic service details pages

Review and rating functionality

Responsive UI design

Firebase integration

✨ Key Features
🔐 Authentication System

Email & Password login

Google login

Forgot password functionality

Protected routes

👤 User Profile

View user information

Update name and profile photo using Firebase updateProfile()

📦 Subscription Services

Browse subscription boxes

View service details

Dynamic route for each service

⭐ Reviews System

Users can submit reviews

Rating system (1–5)

Display submitted reviews

🎨 UI & UX

Responsive design (mobile, tablet, desktop)

Smooth scrolling

Modern card layout

Hero slider section

🔒 Protected Pages

Service Details page

My Profile page

📄 Additional Pages

Home

Login

Register

Forgot Password

404 Not Found page

🛠️ Technologies Used
Frontend

React

React Router

Tailwind CSS

DaisyUI

Backend / Authentication

Firebase Authentication

Notifications

React Toastify / SweetAlert

📦 NPM Packages Used
react-router-dom
firebase
swiper
react-toastify
sweetalert2
📁 Project Structure
src
│
├── components
│   ├── Navbar
│   ├── SliderSection
│   ├── ServiceCard
│
├── pages
│   ├── Home
│   ├── Login
│   ├── Register
│   ├── ServiceDetails
│   ├── MyProfile
│   ├── ForgotPassword
│   ├── NotFound
│
├── providers
│   └── AuthProvider
│
├── routes
│   └── PrivateRoute
│
└── data
    └── services.json
🔑 Environment Variables

Firebase configuration keys are stored securely using environment variables.

Example:

VITE_apiKey=xxxxxxxx
VITE_authDomain=xxxxxxxx
VITE_projectId=xxxxxxxx
VITE_storageBucket=xxxxxxxx
VITE_messagingSenderId=xxxxxxxx
VITE_appId=xxxxxxxx
📱 Responsiveness

The website is fully responsive and optimized for:

Mobile devices

Tablets

Desktop screens

🚀 Deployment

The application is deployed using:

Netlify / Firebase Hosting / Surge

SPA routing is configured to avoid errors when refreshing routes.

👨‍💻 Author

Developed by Your Name