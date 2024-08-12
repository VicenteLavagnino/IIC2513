import React, { useState } from "react";
import {
  HandThumbUpIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import DeletePublications from "../protected/DeletePublications";
import EditPublications from "../protected/EditPublications";

interface MainPostProps {
  id: number;
  username: string;
  friend: string;
  timeAgo: string;
  content: string;
}

const MainPost: React.FC<MainPostProps> = ({
  id,
  username,
  friend,
  timeAgo,
  content,
}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const currentContent = content;

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const localUsername = localStorage.getItem("username");

  return (
    <div className="bg-purple-100 p-4 shadow-md rounded-2xl border-purple-500 border-2">
      <div className="post-title font-semibold mb-2 flex sm:flex-row flex-col sm:justify-between">
        <div className="flex flex-wrap space-x-2 text-lg md:text-xl">
          <h2>@{username}</h2>
          <h2>about</h2>
          <h2 className="text-purple-500">@{friend}</h2>
        </div>
        <p className="text-xl text-gray-500 sm:self-start sm:ml-auto">
          {timeAgo}
        </p>
      </div>
      <hr className="border-purple-500 mb-2 border" />
      <p>{currentContent}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-purple-500 text-white px-4 py-1 rounded-full hover:bg-purple-600 transition-colors duration-300">
          <ChatBubbleOvalLeftIcon className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          {localUsername === username && (
            <div className="relative">
              <button
                className="bg-transparent text-gray-500 px-3 py-1 rounded-full flex flex-row space-x-2 items-center hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setShowMenu(!showMenu)}
              >
                <EllipsisHorizontalIcon className="w-5 h-5" />
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <EditPublications id={id} initialContent={currentContent} />
                  <DeletePublications id={id} />
                </div>
              )}
            </div>
          )}
          <button
            className="bg-purple-500 text-white px-3 py-1 rounded-full flex flex-row space-x-2 items-center hover:bg-purple-600 transition-colors duration-300"
            onClick={handleLike}
          >
            <HandThumbUpIcon className="w-5 h-5" />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
