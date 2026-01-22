# SecureDash Frontend - API Integration & Authentication

## 📋 Project Objective

Simulate a real-world frontend application that interacts with APIs and handles authentication-like flows with graceful error handling, loading states, and responsive design.

## 🔐 Demo Credentials

- **Email:** `test@gmail.com`
- **Password:** `1234`

## 🔗 Live Link

https://secure-dashboard-react.netlify.app/dashboard

## ✅ Requirements Covered

| # | Requirement | Status | Implementation Details |
|---|------------|--------|------------------------|
| **1** | **Login Screen** | ✅ | Email/Password fields, mocked auth, token storage, redirect to dashboard, toast notifications |
| **2** | **Protected Dashboard** | ✅ | Fetches `/users` from JSONPlaceholder API, displays in responsive grid (4→3→2→1 columns) |
| **3** | **Route Protection** | ✅ | `ProtectedRoute` component, auto-redirect on unauthorized access, token expiry check (1 hour) |
| **4** | **Logout** | ✅ | Navbar logout button, clears token & timestamp, redirects to login |
| **5** | **Error & Loading Handling** | ✅ | Loader component, error UI with retry button, toast notifications, graceful API failure handling |
| **6** | **Separation of Concerns** | ✅ | Modular structure: pages, components, services, utils |
| **7** | **Predictable State Flow** | ✅ | Centralized auth via `localStorage`, shared expiry utilities |
| **8** | **User-Friendly Messages** | ✅ | Clear error messages, actionable toasts |
| **9** | **Technical Stack** | ✅ | React + Vite, Axios with interceptors, JSONPlaceholder API, Tailwind CSS |
| **BONUS** | **Axios Interceptors** | ✅ | Request: token validation + auth header; Response: 401 handling, global errors |
| **BONUS** | **Environment Config** | ✅ | `.env` file with `VITE_API_URL` for API endpoint configuration |
| **BONUS** | **Token Expiry Handling** | ✅ | 1-hour expiry, auto-validation on requests, periodic check (30s), auto-logout |

## 📁 Project Structure

```
frontend/
├── src/
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # React entry point
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   ├── pages/
│   │   ├── Login.jsx           # Login page with mocked auth
│   │   └── Dashboard.jsx       # Protected dashboard with API data
│   ├── components/
│   │   ├── ProtectedRoute.jsx  # Route protection wrapper
│   │   ├── Navbar.jsx          # Navigation bar with logout
│   │   ├── UserCard.jsx        # User display card
│   │   ├── Loader.jsx          # Loading spinner
│   │   └── ErrorMessage.jsx    # Error UI with retry
│   ├── services/
│   │   └── api.js              # Axios instance with interceptors
│   └── utils/
│       ├── tokenExpiry.js      # Token expiry constants & utils
│       └── checkTokenExpiry.js # Token validation helpers
├── .env                        # Environment variables
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── index.html                  # HTML entry point
└── README.md                   # This file
```

## 🚀 Setup & Installation

```powershell
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🎮 Authentication Flow

### Login Flow
```
User Input → Mocked Validation → Store Token + LoginTime → Redirect to Dashboard
```

### Protected Route Check
```
Access Dashboard → ProtectedRoute Validates Token → Expired/Missing? → Redirect to Login : Show Dashboard
```

### API Request Flow
```
Dashboard → api.get('/users') → Request Interceptor (Validate Expiry + Add Auth Header) → Fetch Data → Display in Grid
```

### Logout Flow
```
Click Logout → Clear Token & LoginTime → Redirect to Login → Toast Notification
```

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 19.2.0 | UI framework |
| `react-router-dom` | 7.12.0 | Client-side routing |
| `axios` | 1.13.2 | HTTP client with interceptors |
| `react-toastify` | 11.0.5 | Toast notifications |
| `tailwindcss` | 4.1.18 | Utility-first CSS |
| `vite` | 7.2.4 | Build tool & dev server |

## ⚙️ Environment File (.env)

**File Location:** `frontend/.env`

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```

**Usage in Code:**
```javascript
const baseURL = import.meta.env.VITE_API_URL;
```

**Note:** Vite requires `VITE_` prefix for environment variables to be exposed to the client-side code.

---

**Status:** ✅ All BRD Requirements Met

