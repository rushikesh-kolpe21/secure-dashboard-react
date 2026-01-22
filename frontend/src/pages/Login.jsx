import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (
      formData.email === "test@gmail.com" &&
      formData.password === "1234"
    ) {
      localStorage.setItem("token", "dummy-token-123");
      localStorage.setItem("loginTime", Date.now().toString()); 
      toast.success("Login successful");
      navigate("/dashboard" , { replace: true });
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleFormSubmit} className="p-6 border rounded w-80">
        <h2 className="text-xl mb-2">Login</h2>

        {/* Demo Credentials Display */}
        <p className="text-sm text-gray-600 mb-4">
          Demo Credentials:<br />
          Email: <b>test@gmail.com</b><br />
          Password: <b>1234</b>
        </p>

        <input
          className="border p-2 w-full mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className="border p-2 w-full mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          className="bg-blue-500 text-white w-full p-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
