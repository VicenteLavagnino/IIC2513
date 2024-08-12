import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-700 to-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-black">404</h1>
        <p className="text-2xl text-black mt-4">Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
