import React from "react";
import axios from "axios";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../auth/AuthContext";

interface DeletePostProps {
  id: number;
}

const DeletePublications: React.FC<DeletePostProps> = ({ id }) => {
  const { token } = useAuth();

  const handleDelete = async () => {
    const config = {
      method: "delete",
      url: `${import.meta.env.VITE_BACKEND_URL}/publications/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log("Deleting post with id:", id);
    try {
      if (confirm("Are you sure you want to delete this post?")) {
        await axios(config);
        console.log("Post deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
      alert("Failed to delete post. Please try again.");
    }
  };

  return (
    <button
      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
      onClick={handleDelete}
    >
      <TrashIcon className="w-5 h-5 inline mr-2" />
      Delete
    </button>
  );
};

export default DeletePublications;
