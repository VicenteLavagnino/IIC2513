import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

interface Props {
  chatId: number;
}

const MessageForm = ({ chatId }: Props) => {
  const [text, setText] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { token } = useAuth();
  const { username } = useParams<{ username: string }>();

  const sendMessage = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.post(
        `${backendUrl}/chats/message/send`,
        { username, chatId, text },
        config,
      );
      setText("");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje"
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
