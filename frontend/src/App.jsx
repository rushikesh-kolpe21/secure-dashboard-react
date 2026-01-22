import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { Navigate } from "react-router-dom";
 import { ToastContainer } from 'react-toastify';
import { Navbar } from "./components/Navbar.jsx";

export const App = () => {
  return (
    <>
     <ToastContainer/>
     <Navbar/>
      <Routes>   
        {/* public router */}
        <Route path="/login" element={<Login />} />

        {/* private router */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

           {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </>
  );
};
