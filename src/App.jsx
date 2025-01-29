import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/signin';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Explore from './pages/Explore';
import Messages from './pages/Messages';

function App() {
    return (
        <Router>
        <div className='flex h-screen'>
        <Sidebar/>
          <div className='w-full'>
          <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                         <Route path="/" element={<Feed />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/notifications" element={<h1>Notifications</h1>} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/bookmarks" element={<h1>hello</h1>} />
                         <Route path="/lists" element={<h1>Lists</h1>} />
                         <Route path="/profile" element={<h1>Profile</h1>} />
                        <Route path="/more" element={<h1>More</h1>} />
                            <Route path="/grok" element={<h1>Grok</h1>} />
                         <Route path="/communities" element={<h1>Communities</h1>} />
                           <Route path="/premium" element={<h1>Premium</h1>} />
                    </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;