MERN ChatApp
A real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack, enabling users to communicate with each other through an intuitive interface. The project is mentored by Ankit Pathak.

Features
Real-time messaging with Socket.IO
User authentication and authorization
Private and group chat functionality
Online/offline user status indicators
Responsive design for mobile and desktop
Persistent chat history using MongoDB

Tech Stack
Frontend:

React.js
daisyUI/tailwind css

Backend:

Node.js
Express.js
MongoDB (for data storage)
Socket.IO (for real-time communication)

Getting Started
Prerequisites

Before running the project, ensure you have the following installed:

Node.js
MongoDB
Git
Installation
Clone the repository:

bash

git clone https://github.com/Dharmeshp1582/Full-Stack-projects.git
cd mern-chatapp
Install dependencies for both frontend and backend:

bash

cd client
npm install
cd ../server
npm install
Create a .env file in the server directory and add the following environment variables:

MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT secret key>
Start the MongoDB server:


mongod
Run the frontend and backend servers:


cd client
npm run dev
cd ../server
nodemon index.js

Usage
Open your browser and navigate to http://localhost:3000 to use the chat application.

Contributing
If you'd like to contribute, feel free to create a pull request or open an issue.

Acknowledgements
Special thanks to Ankit Pathak for mentoring and guiding throughout this project.
