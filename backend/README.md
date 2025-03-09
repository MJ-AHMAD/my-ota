# My-OTA

## Overview

This is the backend server for the **My OTA Project**, providing RESTful APIs for travel package management, user authentication, and bookings.

---

## Features

- **User Authentication**: JWT-based secure login and registration.
- **MongoDB Integration**: Data storage for users, bookings, and travel packages.
- **RESTful APIs**: Easy-to-use API endpoints for frontend integration.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or any MongoDB instance)
- [Git](https://git-scm.com/)
- A `.env` file with the following variables:

  ```plaintext
  MONGO_URI=<your-mongodb-uri>
  JWT_SECRET=<your-jwt-secret>
