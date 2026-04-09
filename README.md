MERN Stack E-Commerce Application
This is a full-stack E-Commerce web application built using the MERN stack (MongoDB, Express, React, Node.js). 
It includes user authentication, product management, cart functionality, and order processing.
Tech Stack
Frontend:
- React (Vite)
- Redux Toolkit
Backend:
- Node.js
- Express.js
Database:
- MongoDB Atlas
Deployment:
- Railway (Backend)
- Vercel (Frontend)
Features
- User registration and login
- Product listing and product details
- Add to cart functionality
- Order creation and management
- User profile management
- Admin features for managing products and users
Project Structure
mernstack/
- backend/
- frontend/
- .gitignore
- README.md
Environment Variables
Create a `.env` file inside the backend folder and add:
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
PORT=5000  
Running the Project Locally
Backend:
cd backend  
npm install  
npm run dev  
Frontend:
cd frontend  
npm install  
npm run dev  
