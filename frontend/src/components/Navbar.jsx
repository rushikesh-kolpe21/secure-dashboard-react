import { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { isTokenExpired, clearAuth } from "../utils/checkTokenExpiry";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    
    const check = () => {
      if (isTokenExpired()) {
        clearAuth();
        toast.info("Session expired. Please login again.");
        navigate("/login", { replace: true });
      }
    };

    check(); 
    const id = setInterval(check, 30000); 

    return () => clearInterval(id);
  }, [navigate]);

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(Boolean(token));
  }, [location.pathname]);


  const handleAuthClick = () => {
    if (isLoggedIn) {
      
      clearAuth();
      setIsLoggedIn(false);
      toast.success("Logged out successfully");
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b">
      
      {/* LEFT: Logo */}
      <div className="text-xl font-bold">
        MyApp
      </div>

      {/* CENTER: Menu */}
      <div className="flex gap-6">
        <NavLink to="/dashboard" className="hover:text-blue-500">
          Dashboard
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-500">
          About
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-500">
          Contact
        </NavLink>
      </div>

      {/* RIGHT: Logout */}
      <button
        onClick={handleAuthClick}
        className={`px-4 py-1 rounded text-white ${isLoggedIn ? "bg-red-500" : "bg-blue-500"}`}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
}
