import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthContext.tsx";

interface User {
  mail: string;
  gender: string;
  age: number;
  description: string;
}

const UserPage = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    mail: "",
    gender: "",
    age: "",
    description: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setUser(response.data);
        setFormData({
          mail: response.data.mail,
          gender: response.data.gender || "",
          age: response.data.age.toString() || "",
          description: response.data.description || "",
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Failed to fetch user:", error.response?.data);
          alert("Failed to fetch user: " + error.response?.data.message);
        } else {
          console.error("Network error:", error);
          alert("Network error");
        }
      }
    };
    fetchUser();
  }, [username]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/users/${username}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert("User updated successfully");
      setUser(response.data);
      setEditing(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Failed to update user:", error.response?.data);
        alert("Failed to update user: " + error.response?.data.message);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/users/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        alert("User deleted successfully");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Failed to delete user:", error.response?.data);
          alert("Failed to delete user: " + error.response?.data.message);
        } else {
          console.error("Unexpected error:", error);
          alert("An unexpected error occurred.");
        }
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 via-purple-300 to-white pt-20 pb-12 items-center justify-center px-5">
      <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg px-8 max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">@{username}</h1>
          <button
            onClick={handleLogout}
            className="bg-cancel text-white p-2 rounded hover:bg-gray-500 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
        {editing ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                value={formData.mail}
                onChange={(e) =>
                  setFormData({ ...formData, mail: e.target.value })
                }
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender:
              </label>
              <input
                type="text"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age:
              </label>
              <input
                type="text"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="flex justify-start space-x-2">
              <button
                type="submit"
                className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="bg-cancel text-white p-2 rounded hover:bg-gray-500 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow flex">
              <p className="font-bold mr-2">Email:</p>
              <p>{user.mail}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow flex">
              <p className="font-bold mr-2">Gender:</p>
              <p>{user.gender}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow flex">
              <p className="font-bold mr-2">Age:</p>
              <p>{user.age}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-bold">Description:</p>
              <p>{user.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setEditing(true)}
                className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors duration-300"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-cancel text-white p-2 rounded hover:bg-gray-500 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
