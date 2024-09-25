import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button (hidden when sidebar is open) */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="text-3xl p-3 fixed right-4 top-4 z-20"
        >
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {/* Logo */}
          <div className="text-xl font-bold">Your Logo</div>
          {/* Close Button (hidden when sidebar is closed) */}
          {isOpen && (
            <button onClick={toggleSidebar} className="text-3xl">
              <FaTimes />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={toggleSidebar}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={toggleSidebar}
          >
            Blog
          </Link>
          <Link
            to="/services"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={toggleSidebar}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={toggleSidebar}
          >
            FAQ
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="absolute bottom-4 left-0 w-full flex justify-around">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-gray-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
