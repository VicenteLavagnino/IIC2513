import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Docs from "./pages/Docs";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile/:username" element={<UserPage />} />
          <Route path="/chats/:username" element={<ChatList />} />
          <Route path="/chats/:username/:chatId" element={<ChatRoom />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/for-you" element={<MainPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
