import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useAuth } from "../auth/AuthContext";
import MessageForm from "./MessageForm";

interface Message {
  id: number;
  text: string;
  username: number;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { chatId } = useParams<{ chatId: string }>();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const websocketUrl = import.meta.env.VITE_WEBSOCKET_URL;
  const navigate = useNavigate();
  const { token } = useAuth();
  const ws = useRef<W3CWebSocket | null>(null);

  useEffect(() => {
    if (!chatId) {
      navigate("/");
      return;
    }

    const numericChatId = parseInt(chatId);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(`${backendUrl}/chats/message/${numericChatId}`, config)
      .then((response) => setMessages(response.data))
      .catch((error) => console.error("Error fetching messages", error));

    ws.current = new W3CWebSocket(`${websocketUrl}`);

    ws.current.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    ws.current.onmessage = (message) => {
      if (typeof message.data === "string") {
        const newMessage = JSON.parse(message.data);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket Client Disconnected");
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [chatId, backendUrl, token, navigate, websocketUrl]);

  if (!chatId) {
    return null;
  }

  const numericChatId = parseInt(chatId);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 via-purple-300 to-white pt-20 pb-12">
      <div className="main-page container mx-auto py-4 flex flex-col md:flex-row space-x-0 md:space-x-4">
        <div className="w-full bg-gray-100 p-6 rounded-lg px-8 max-h-screen overflow-auto">
          <h3 className="text-2xl font-bold mb-4">Chat Messages</h3>
          <div className="space-y-4 overflow-auto max-h-96">
            {messages.map((message) => (
              <div key={message.id} className="p-4 bg-white rounded-lg shadow">
                <p>
                  {message.username}: {message.text}
                </p>
              </div>
            ))}
          </div>
          <MessageForm chatId={numericChatId} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
