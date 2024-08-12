import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

interface User {
  id: number;
  username: string;
}

interface Friendship {
  id: number;
  user1: string;
  user2: string;
  status: string;
}

interface FriendsPopupProps {
  handleCloseModal: () => void;
}

const FriendsPopup: React.FC<FriendsPopupProps> = ({ handleCloseModal }) => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [friendships, setFriendships] = useState<Friendship[]>([]);
  const currentUser = localStorage.getItem("username");

  useEffect(() => {
    fetchUsers();
    fetchFriendships();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchFriendships = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/friendships`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data); // Verifica que los datos contienen el id
      setFriendships(response.data);
    } catch (error) {
      console.error("Error fetching friendships:", error);
    }
  };

  const sendFriendRequest = async (username: string) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/friendships`, {
        user1: currentUser,
        user2: username,
        status: "accepted"
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchFriendships();
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };

  const deleteFriendship = async (friendshipId: number) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/friendships/${friendshipId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchFriendships();
    } catch (error) {
      console.error("Error deleting friendship:", error);
    }
  };

  const getFriendship = (username: string): Friendship | undefined => {
    return friendships.find(
      (f) => (f.user1 === currentUser && f.user2 === username) || (f.user1 === username && f.user2 === currentUser)
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-xl flex flex-col items-center">
        <h2 className="mb-5 font-bold text-lg text-center text-purple-700">Friends</h2>
        <ul className="mt-5 w-full grid grid-cols-1 gap-4">
          {users.map((user) => {
            if (user.username === currentUser) {
              return null;
            }
            const friendship = getFriendship(user.username);
            return (
              <li key={user.username} className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                <span className="flex-grow text-center text-purple-700 font-bold">@{user.username}</span>
                {friendship && friendship.status === 'accepted' ? (
                  <button
                    onClick={() => deleteFriendship(friendship.id)}
                    className="bg-red-600 text-white py-2 px-8 w-32 rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => sendFriendRequest(user.username)}
                    className="ml-3 bg-purple-600 text-white py-2 px-8 w-32 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    Follow
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <button
          onClick={handleCloseModal}
          className="mt-5 bg-gray-500 text-white py-2 px-8 w-32 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FriendsPopup;
