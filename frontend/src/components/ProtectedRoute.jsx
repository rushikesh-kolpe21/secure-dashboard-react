import { Navigate } from "react-router-dom";
import { isTokenExpired, clearAuth } from "../utils/checkTokenExpiry";
//
const ProtectedRoute = ({ children }) => {
    if (isTokenExpired()) {
    clearAuth();
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
