import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/signin';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';

function App() {
    return (
        <Router>
        <div className='flex h-screen'>
        <Sidebar/>
          <div className='w-full'>
            <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<h1>Explore</h1>} />
            <Route path="/notifications" element={<h1>Notifications</h1>} />
            <Route path="/messages" element={<h1>Messages</h1>} />
            <Route path="/bookmarks" element={<h1>Bookmarks</h1>} />
            <Route path="/lists" element={<h1>Lists</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="/more" element={<h1>More</h1>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;