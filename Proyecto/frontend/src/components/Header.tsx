import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoBlanco from "../assets/LogoBlanco.svg";
import MerrorBlanco from "../assets/MerrorBlanco.svg";
import { useAuth } from "../auth/AuthContext.tsx";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { logout } = useAuth();

  const navigate = useNavigate();

  const LogOut = () => {
    logout();
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-purple-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold flex items-center">
          <Link to={username ? "/for-you" : "/"} className="flex items-center">
            <img
              src={LogoBlanco}
              alt="Logo Blanco"
              className="h-8 w-auto mr-2"
            />
            <img src={MerrorBlanco} alt="Merror Blanco" className="h-8 w-20" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-20 text-lg">
          <ul className="flex space-x-20 text-lg">
            {!username && (
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
            )}
            {username && (
              <li>
                <Link
                  to="/for-you"
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  For You
                </Link>
              </li>
            )}
            {username && (
              <li>
                <Link
                  to={`/chats/${username}`}
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  Chats
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/about"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/docs"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center justify-start flex-1 ms-3">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {username && (
          <div className="flex text-lg space-x-4">
            <div
              onClick={LogOut}
              className="cursor-pointer hover:text-purple-300 transition-colors duration-300"
            >
              Logout
            </div>
            <div>
              <Link
                to={`/profile/${username}`}
                className="hover:text-purple-300 transition-colors duration-300"
              >
                @{username}
              </Link>
            </div>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-purple-700 text-white p-4">
          <ul className="flex flex-col space-y-4 text-lg">
            {!username && (
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
            )}
            {username && (
              <li>
                <Link
                  to="/for-you"
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  For You
                </Link>
              </li>
            )}
            {username && (
              <li>
                <Link
                  to={`/chats/${username}`}
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  Chats
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/about"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/docs"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
