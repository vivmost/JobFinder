# The JobFinder App

The JobFinder app is a web platform designed to facilitate job management for both job seekers and recruiters. It enables users to view, create, update, and delete job posts with a focus on secure content management and advanced search functionalities.

## Features

- **User Authentication**: Secure login and registration with JWT authentication.
- **Job Post Management**: Create, view, update, and delete job posts. Only authenticated and authorized users can manage job posts.
- **Advanced Search**: Filter job posts by skills, job titles, locations, and other relevant criteria.
- **User Roles**: Distinguish between job seekers and recruiters with role-based permissions.
- **Status Tracking**: Monitor the status of job applications and job post visibility.
- **Responsive UI/UX**: Mobile-friendly design for a seamless experience across all devices.
- **Real-Time Updates**: Live updates on job post changes and application status.
- **Secure Authentication**: Encrypted password storage and secure JWT authentication.
- **Cloud Deployment**: Deployed on Azure with scalability and performance optimizations.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT
- **Deployment**: Render (backend), Netlify (frontend)
- 

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB (MongoDB Atlas for cloud database)

### Installation

1. **Clone the repository:**

   git clone https://github.com/vivmost/ProManage.git
   cd ProManage
   
2. **Install frontend dependencies:**

     ```bash
        cd ../client
        npm install
     ```
   
3. **Install backend dependencies::**

      ```bash
        cd ../server
        npm install
     ```


4. **Configure environment variables:**

   - Create a .env file in the server directory and add your environment variables (e.g., database URI, JWT secret).
   - Create a .env file in the client directory and add your environment variables (e.g., BACKEND_HOST).
   
5. **Run the application:**
     - **Start the backend server:**

     ```bash
     cd server
     npm start
     ```

      - **Start the frontend development server:**

     ```bash
     cd ../client
     npm start
     ```

