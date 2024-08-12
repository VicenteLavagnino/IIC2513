import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-purple-600 px-4 py-1 text-white">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mx-auto text-center">
        <p>&copy; 2024 Merror.</p>
        <p className="hidden md:block">
          Created by Ian Fuenzalida, Vicente Lavagnino, Franco Anfossi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
