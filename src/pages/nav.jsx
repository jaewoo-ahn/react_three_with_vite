// src/components/Nav.jsx
import {useState} from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-gray-800 z-10">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-4">
          <Link to="/" className="text-white">
            Home
          </Link>
        </div>
        <div>
          <Link to="/sample" className="text-white">
            Sample
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
