<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  
  <h1>🏥 Medicare Platform</h1>
  <p><em>A modern, full-stack healthcare appointment booking system</em></p>
</div>

---

## 📖 Overview

**Medicare** is a comprehensive healthcare appointment platform built with the MERN stack. It seamlessly connects patients with doctors, allowing for easy browsing of medical services, online booking, and secure payments via Stripe. The platform includes dedicated portals for patients, doctors, and system administrators.

## ✨ Key Features

- 🧑‍⚕️ **Patient Portal:** Browse verified doctors, view detailed profiles & schedules, and book appointments instantly.
- 🩺 **Service Booking:** Conveniently book medical services (e.g., blood tests, X-rays) with integrated online payments.
- 💳 **Secure Payments:** End-to-end payment processing powered by **Stripe Checkout** with automated appointment confirmations.
- 👨‍💻 **Doctor Dashboard:** Dedicated secure login for doctors to manage profiles, track schedules, and handle patient appointments.
- ⚙️ **Admin Control Panel:** Powerful central dashboard to manage users, doctors, services, and view system-wide analytics.
- 🔐 **Modern Authentication:** Next-gen user authentication via **Clerk** (Patients) and secure JWTs (Doctors).
- 🖼️ **Cloud Storage:** Seamless media and image uploads handled by **Cloudinary**.
- 📱 **Responsive UI:** Beautiful, mobile-first design built with **Tailwind CSS v4**.

## 🛠️ Tech Stack

### Frontend & Admin
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Auth (Frontend):** Clerk React SDK

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express 5
- **Database:** MongoDB (Mongoose)
- **Auth:** Clerk Node SDK + JSON Web Tokens (JWT)
- **Payments:** Stripe API
- **File Uploads:** Multer + Cloudinary

## 📂 Project Architecture

```text
Medicare/
├── frontend/     # Patient-facing React application (Port: 5173)
├── admin/        # Admin & Doctor dashboard React application (Port: 5174)
└── backend/      # Express REST API server (Port: 4000)
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed and set up:
- **Node.js** (v18 or higher)
- **MongoDB** (Local instance or MongoDB Atlas)
- **Stripe** account (for test mode keys)
- **Clerk** account (for authentication)
- **Cloudinary** account (for image hosting)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Medicare.git
   cd Medicare
   ```

2. **Install dependencies for all modules:**
   ```bash
   # Backend
   cd backend && npm install

   # Frontend
   cd ../frontend && npm install

   # Admin
   cd ../admin && npm install
   ```

### Environment Configuration

You will need to set up `.env` files in all three directories based on the provided `.env.example` files.

#### `backend/.env`
```env
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
MONGODB_URI=your_mongodb_connection_string
```

#### `frontend/.env` & `admin/.env`
```env
VITE_API_URL=http://localhost:4000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Running the Application

To run the full stack locally, open three separate terminal windows from the project root:

```bash
# Terminal 1: Start Backend API
cd backend
npm run dev

# Terminal 2: Start Patient Frontend
cd frontend
npm run dev

# Terminal 3: Start Admin/Doctor Dashboard
cd admin
npm run dev
```

- 🌐 **Patient App:** [http://localhost:5173](http://localhost:5173)
- ⚙️ **Admin App:** [http://localhost:5174](http://localhost:5174)
- 🔌 **API Server:** [http://localhost:4000](http://localhost:4000)

## 📡 API Reference

### Doctors
- `GET /api/doctors` - Retrieve all doctors
- `GET /api/doctors/:id` - Retrieve specific doctor details
- `POST /api/doctors` - Register a new doctor (multipart/form-data)
- `PUT /api/doctors/:id` - Update doctor information
- `DELETE /api/doctors/:id` - Remove a doctor

### Appointments
- `POST /api/appointments` - Book a new appointment
- `GET /api/appointments/me` - Retrieve current user's appointments
- `GET /api/appointments/confirm` - Verify Stripe payment success
- `PUT /api/appointments/:id` - Modify an appointment
- `DELETE /api/appointments/:id` - Cancel an appointment

### Services
- `GET /api/services` - List all available medical services
- `POST /api/services` - Create a new service
- `PUT /api/services/:id` - Update service details
- `DELETE /api/services/:id` - Delete a service

### Service Appointments
- `POST /api/service-appointments` - Book a specific medical service
- `GET /api/service-appointments/confirm` - Verify Stripe payment for service

## 📄 License

This project is licensed under the **ISC License**.

---
<div align="center">
  <i>Built with ❤️ for a healthier tomorrow.</i>
</div>