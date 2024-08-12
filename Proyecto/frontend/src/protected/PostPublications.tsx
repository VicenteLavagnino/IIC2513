import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

interface PostPublicationProps {
  handleCloseModal: () => void;
  username: string;
}

const PostPublication: React.FC<PostPublicationProps> = ({
  handleCloseModal,
  username,
}) => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    friend: "",
    content: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_URL}/publications`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        madeByUser: username,
        madeToUser: formData.friend,
        text: formData.content,
        image: "",
      },
    };

    try {
      await axios(config);
      setFormData({ friend: "", content: "" });
      handleCloseModal();
      window.location.reload();
    } catch (error) {
      console.error(error);
      setError("Failed to post. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-xl">
        <h2 className="mb-5 font-bold text-lg">Crea un Post!</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="friend"
              className="block text-sm font-medium text-gray-700"
            >
              Username del Amigo:
            </label>
            <input
              name="friend"
              type="text"
              value={formData.friend}
              onChange={handleInputChange}
              placeholder="Username del amigo"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Comenta:
            </label>
            <input
              name="content"
              type="text"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Escribe algo..."
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="flex justify-start space-x-2">
            <button
              type="submit"
              className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors duration-300"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPublication;
