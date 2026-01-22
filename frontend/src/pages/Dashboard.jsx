import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../components/Loader.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";

import api from "../services/api.js";
import { UserCard } from "../components/UserCard.jsx";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
      setError("");
    } catch (err) {
       setError("Failed to load users. Please try again.");
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchUsers();
  }, []);

//  Show loader while fetching data
  if (loading) {
  return <Loader />;
}

// Show error message if fetch failed
 if (error) {
  return (
    <ErrorMessage
      message={error}
      onRetry={fetchUsers}
    />
  );
}

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl">Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
