import React, { useState } from "react";
import axios from "axios";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../auth/AuthContext";

interface EditPostProps {
  id: number;
  initialContent: string;
}

const EditPublications: React.FC<EditPostProps> = ({ id, initialContent }) => {
  const { token } = useAuth();
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    const config = {
      method: "patch",
      url: `${import.meta.env.VITE_BACKEND_URL}/publications/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        text: content,
      },
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        setIsEditing(false);
        console.log("Post edited successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to edit post:", error);
      alert("Failed to edit post. Please try again.");
    }
  };

  return (
    <div>
      <button
        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
        onClick={() => setIsEditing(true)}
      >
        <PencilIcon className="w-5 h-5 inline mr-2" />
        Edit
      </button>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <h2 className="text-2xl mb-4">Edit Post</h2>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-1 rounded-full hover:bg-gray-600 transition-colors duration-300 mr-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="bg-purple-500 text-white px-4 py-1 rounded-full hover:bg-purple-600 transition-colors duration-300"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPublications;
