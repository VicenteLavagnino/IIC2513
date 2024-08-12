import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

interface Chat {
  id: number;
  name: string;
}

const ChatList = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [newChatName, setNewChatName] = useState("");
  const [usernames, setUsernames] = useState("");
  const { username } = useParams<{ username: string }>();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    axios
      .get(`${backendUrl}/chats/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Chats:", response.data);
        setChats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chats", error);
        setChats([]);
      });
  }, [username, backendUrl, token]);

  const handleCreateChat = async (e: React.FormEvent) => {
    e.preventDefault();
    const usernamesArray = usernames.split(",").map((name) => name.trim());
    try {
      const response = await axios.post(
        `${backendUrl}/chats/create`,
        {
          name: newChatName,
          usernames: usernamesArray,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setChats([...chats, response.data]);
      setNewChatName("");
      setUsernames("");
      navigate(`/chats/${username}/${response.data.id}`);
    } catch (error) {
      console.error("Error creating chat", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-700 via-purple-300 to-white">
      <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow px-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Chats for @{username}</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-cancel text-white p-2 rounded hover:bg-gray-500 transition-colors duration-300"
          >
            Back
          </button>
        </div>
        <form onSubmit={handleCreateChat} className="space-y-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Chat Name:
            </label>
            <input
              type="text"
              value={newChatName}
              onChange={(e) => setNewChatName(e.target.value)}
              placeholder="Enter new chat name"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Usernames:
            </label>
            <input
              type="text"
              value={usernames}
              onChange={(e) => setUsernames(e.target.value)}
              placeholder="Enter usernames, separated by commas"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="flex justify-start space-x-2">
            <button
              type="submit"
              className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors duration-300"
            >
              Create Chat
            </button>
          </div>
        </form>
        <ul className="space-y-4 overflow-auto max-h-96">
          {chats.map((chat) => (
            <li key={chat.id} className="p-4 bg-white rounded-lg shadow">
              <Link
                to={`/chats/${username}/${chat.id}`}
                className="font-bold text-purple-600 hover:underline"
              >
                {chat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
