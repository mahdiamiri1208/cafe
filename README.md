Café Website

A modern, fully responsive café website built with Next.js, React, and JSON Server, designed with clean architecture, modular components, and a visually appealing UI optimized for both desktop and mobile.

Overview

This project showcases a professional front-end implementation of a café website. It provides dynamic product pages, a responsive layout, modular UI components, and structured data management powered by db.json (JSON Server).
The goal is to deliver a fast, elegant, and scalable interface that can be easily extended with a real backend in the future.

Core Technologies
Front-End

Next.js 14 / React 18 – fast routing, server/client rendering, scalable architecture

React Bootstrap + Bootstrap – responsive design and UI components

CSS Modules & Custom Styles – isolated styling without conflicts

Data Layer

db.json (JSON Server) used as a mock backend

Fully supports CRUD operations (fetching, adding, editing, deleting data)

Key Features
UI/UX

Fully responsive layout across all screen sizes

Modern Navbar & Header, optimized for mobile and desktop

Mobile Offcanvas Menu with collapsible submenus

Hover Dropdown Menu for desktop navigation

Responsive Search Box with improved mobile usability

Reusable Product Cards

Dynamic Product Details Page using Next.js dynamic routing

Technical Features

Clean separation between UI, logic, and data

Modular, reusable React components

Dynamic routes such as /products/[id]

Data-driven UI powered entirely by JSON Server

Scalable project architecture that supports future enhancements

Architecture & Best Practices
1. Component-Based Architecture

All repeating UI elements (e.g., product cards, sections, menu items) are built as standalone components to ensure reusability and maintainability.

2. Clean and Organized Folder Structure

Ensures easy navigation and long-term scalability.

3. Modern Responsive Design

UI is carefully optimized for all breakpoints: desktop, tablet, and mobile.

4. Mock Backend Integration

db.json simulates a real backend environment, making the project fully dynamic without needing a real server.

Folder Structure (Simplified)
src/
 ├── app/
 │   ├── page.js
 │   ├── products/
 │   │   ├── page.js
 │   │   └── [id]/
 │   │       └── page.js
 ├── components/
 │   ├── Navbar/
 │   ├── ProductCard/
 │   ├── ProductDetails/
 │   ├── Footer/
 ├── services/
 │   └── api.js
 ├── data/
 │   └── db.json
 └── styles/

JSON Server Setup

Install JSON Server:

npm install -g json-server


Run the database:

json-server --watch db.json --port 3001


API Example:

http://localhost:3001/products

Running the Project

Install dependencies:

npm install


Start development server:

npm run dev


Run JSON Server (if needed):

json-server --watch db.json --port 3001

Strengths of This Project
1. Fully Modular and Scalable

Components are structured professionally and can be reused across the project.

2. Production-Level Responsive Design

Navigation, product cards, forms, and sections all adapt perfectly to mobile, tablet, and desktop.

3. Realistic Data Workflow Using JSON Server

Simulates an actual backend environment, making the project ideal for portfolio and interviews.

4. Developer-Friendly Architecture

Easy to maintain, extend, or transition into a full-stack application.

5. Clean UI & Smooth User Experience

Suitable for commercial café or restaurant websites.
