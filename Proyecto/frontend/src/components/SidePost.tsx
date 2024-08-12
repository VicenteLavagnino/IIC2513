import React from "react";

interface SidePostProps {
  friend: string;
  username: string;
  content: string;
  timeAgo: string;
}

const SidePost: React.FC<SidePostProps> = ({
  friend,
  username,
  content,
  timeAgo,
}) => {
  return (
    <div className="bg-purple-100 p-3 shadow-lg rounded-xl border-purple-500 border-2 flex flex-col justify-between my-4">
      <div>
        <p>
          <span className="text-purple-500 font-semibold">@{friend}</span> about
          @{username}
        </p>
        <p className="text-gray-800">{content}</p>
      </div>
      <p className="text-gray-500 text-sm self-end mt-4">{timeAgo}</p>
    </div>
  );
};

export default SidePost;
