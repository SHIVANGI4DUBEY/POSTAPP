import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">PostApp</h2>

      <div className="nav-links">

        {/* If on Feed → show Create Post only */}
        {location.pathname === "/feed" && (
          <Link to="/create-post">Create Post</Link>
        )}

        {/* If on Create Post → show Feed only */}
        {location.pathname === "/create-post" && (
          <Link to="/feed">Feed</Link>
        )}

      </div>
    </nav>
  );
};

export default Navbar;