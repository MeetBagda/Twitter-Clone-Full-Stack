import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Signin";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Widgets from "./pages/Widget";
import "./App.css";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { UserAuthContextProvider } from "./context/userAuthContext";

const MainLayout = () => (
  <div className="flex px-40">
    <Sidebar />
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<h1>Bookmark</h1>} />
        <Route path="/lists" element={<h1>Lists</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/more" element={<h1>More</h1>} />
        <Route path="/grok" element={<h1>Grok</h1>} />
        <Route path="/communities" element={<h1>Communities</h1>} />
        <Route path="/premium" element={<h1>Premium</h1>} />
      </Routes>
    </div>
    <Widgets />
  </div>
);

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
