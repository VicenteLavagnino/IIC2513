import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import GetMainPublications from "../protected/GetMainPublications";
import PostPublication from "../protected/PostPublications";
import GetSidePublications from "../protected/GetSidePublications";
import FriendsPopup from "../protected/FriendsPopup";
import { useAuth } from "../auth/AuthContext.tsx";

const MainPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFriendsPopupOpen, setIsFriendsPopupOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const navigate = useNavigate();

  const { token } = useAuth();

  useEffect(() => {
    if (token === null) {
      navigate("/");
      window.location.reload();
    }
  }, [navigate, token]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleOpenModal = () => {
    if (username) {
      setIsModalOpen(true);
    } else {
      alert("Username is required to post. Please log in or register.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const openFriendsPopup = () => {
    setIsFriendsPopupOpen(true);
  };

  const closeFriendsPopup = () => {
    setIsFriendsPopupOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 via-purple-300 to-white pt-20 pb-12">
      <div className="main-page container mx-auto py-4 flex flex-col md:flex-row space-x-0 md:space-x-4">
        <div className="w-full md:w-3/4 bg-gray-100 p-6 rounded-lg px-8 max-h-screen">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 w-full">
            <button
              onClick={handleOpenModal}
              className="bg-purple-600 text-white rounded-3xl w-full md:w-auto hover:bg-purple-700 transition-colors duration-300"
            >
              <p className="my-4 mx-8 font-bold text-lg">Post Now!</p>
            </button>
            <div className="search-bar flex flex-wrap bg-gray-100 p-2 rounded-2xl border-2 border-purple-500 flex-grow w-full md:w-auto">
              <input
                type="text"
                className="flex-grow p-2 rounded-l-2xl focus:outline-none"
                placeholder="Search..."
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 transition-colors duration-300">
                Sort
              </button>
            </div>
          </div>

          {isModalOpen && username && (
            <PostPublication
              handleCloseModal={handleCloseModal}
              username={username}
            />
          )}

          <div>
            <GetMainPublications />
          </div>
        </div>

        <div className="hidden md:block md:w-1/4 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6 mt-2 flex justify-center">
            @{username}
          </h2>
          <div className="flex justify-center">
            <button
              onClick={openFriendsPopup}
              className="bg-purple-600 text-white rounded-3xl w-3/4 md:w-2/3 hover:bg-purple-700 transition-colors duration-300 mb-4 py-2"
            >
              <p className="font-bold text-lg">Friends</p>
            </button>
          </div>
          {isFriendsPopupOpen && <FriendsPopup handleCloseModal={closeFriendsPopup} />}
          <div>
            <GetSidePublications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
