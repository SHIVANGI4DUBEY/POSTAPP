/*import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CreatePost from './pages/CreatePost'
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/create-post' element={<CreatePost />}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Navbar only appears after login (handled inside Navbar logic) */}
      <Navbar />

      <Routes>
        {/* 🔐 Login Page */}
        <Route path="/" element={<Login />} />

        {/* 📸 Protected Pages */}
        <Route path="/feed" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;