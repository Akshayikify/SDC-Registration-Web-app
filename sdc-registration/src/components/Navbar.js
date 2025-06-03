import React from 'react';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="public/index.html"><img src="/images/sdc.jpg" alt="SDC" />SDC</a>
        </div>
        <ul className="nav-items">
          <li><a href="#"><i className="fa-solid fa-house"></i> Home</a></li>
          <li><a href="#"><i className="fa-solid fa-circle-info"></i> About Us</a></li>
          <li><a href="#"><i className="fa-solid fa-calendar"></i> Events</a></li>
          <li><a href="#"><i className="fa-solid fa-image"></i> Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
}
