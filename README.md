# Medicare - Healthcare Appointment Platform

A full-stack healthcare appointment booking platform built with React, Node.js, Express, and MongoDB. Patients can browse doctors and medical services, book appointments, and pay online via Stripe. Doctors have a dedicated admin panel to manage their profiles and appointments. A separate admin dashboard provides overall system management.

## Features

- **Patient Portal** – Browse doctors, view profiles & schedules, and book appointments
- **Service Booking** – Book medical services (blood tests, X-rays, etc.) with online payment
- **Stripe Payments** – Secure online payments with automatic appointment confirmation
- **Doctor Admin** – Doctors can log in, edit profiles, manage schedules, and handle appointments
- **Admin Dashboard** – Add/manage doctors and services, view all appointments & analytics
- **Clerk Authentication** – User sign-in/sign-up for patients via Clerk
- **Cloudinary** – Image uploads for doctor profiles and service images
- **Responsive Design** – Works on mobile, tablet, and desktop

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, React Router, Clerk, Lucide Icons |
| Admin | React, Vite |
| Backend | Node.js, Express 5, Mongoose (MongoDB) |
| Auth | Clerk (patients), JWT (doctors) |
| Payments | Stripe Checkout |
| Images | Cloudinary |

## Project Structure

```
Medicare/
├── frontend/     # Patient-facing React app (port 5173)
├── admin/        # Admin dashboard React app (port 5174)
├── backend/      # Express API server (port 4000)
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Stripe account (test mode)
- Clerk account
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Medicare.git
cd Medicare
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Admin
cd ../admin
npm install
```

### 3. Configure environment variables

Copy the `.env.example` files in each folder and rename them to `.env`, then fill in your credentials:

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env

# Admin
cp admin/.env.example admin/.env
```

### 4. Run the application

Open three terminals:

```bash
# Terminal 1 – Backend
cd backend
npm run dev

# Terminal 2 – Frontend
cd frontend
npm run dev

# Terminal 3 – Admin
cd admin
npm run dev
```

- Frontend: http://localhost:5173
- Admin: http://localhost:5174
- API: http://localhost:4000

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `JWT_SECRET` | Secret for doctor JWT tokens |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `FRONTEND_URL` | Frontend URL for CORS |
| `ADMIN_URL` | Admin URL for CORS |
| `MONGODB_URI` | MongoDB connection string |

### Frontend & Admin (`frontend/.env`, `admin/.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |

## API Endpoints

### Doctors
- `GET /api/doctors` – List all doctors
- `GET /api/doctors/:id` – Get doctor by ID
- `POST /api/doctors` – Add a doctor (multipart/form-data)
- `PUT /api/doctors/:id` – Update doctor profile
- `DELETE /api/doctors/:id` – Delete a doctor

### Appointments
- `POST /api/appointments` – Create appointment
- `GET /api/appointments/me` – Get user's appointments
- `GET /api/appointments/confirm` – Confirm Stripe payment
- `PUT /api/appointments/:id` – Update appointment
- `DELETE /api/appointments/:id` – Cancel appointment

### Services
- `GET /api/services` – List all services
- `POST /api/services` – Add a service
- `PUT /api/services/:id` – Update a service
- `DELETE /api/services/:id` – Delete a service

### Service Appointments
- `POST /api/service-appointments` – Create service appointment
- `GET /api/service-appointments/confirm` – Confirm Stripe payment

## License

ISC
 