import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/LogoMorado.svg";
import { useAuth } from "../auth/AuthContext.tsx";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setMail] = useState("");

  const { login } = useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
      );

      if (response.status === 200) {
        localStorage.setItem("username", response.data.username);

        const access_token = response.data.access_token;
        login(access_token);

        navigate("/for-you");
        window.location.reload();
      } else {
        alert("Login failed: " + response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login error:", error.response?.data);
        alert("Login error: " + error.response?.data.message);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-start to-end py-10 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md my-10 mx-auto">
        <img src={logo} className="w-32 h-auto mx-auto" alt="Logo" />
        <h2 className="text-center text-xl font-bold">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Mail
            </label>
            <input
              id="email"
              type="text"
              required
              value={email}
              onChange={(e) => setMail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-purple hover:bg-custom-purple-70"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
