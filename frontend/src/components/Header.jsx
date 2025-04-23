import React from 'react';
import { useNavigate } from 'react-router-dom';
import ayurvedaLogo from '../assets/ayurveda_logo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    navigate(`/about#${section}`);
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={ayurvedaLogo}
          alt="Ayurveda Logo"
          className="h-14 w-14 object-contain"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 text-transparent bg-clip-text animate-pop">
            Herbalintel
          </h1>
          <span className="text-sm text-gray-300 animate-pop delay-200">
            Your Personalized Ayurvedic Assistant
          </span>
        </div>
      </div>

      <nav className="space-x-4">
        <button
          onClick={() => handleNavClick("about")}
          className="px-4 py-2 rounded-lg border border-green-500 text-green-400 font-semibold hover:bg-green-500 hover:text-white shadow transition"
        >
          About Us
        </button>
        <button
          onClick={() => handleNavClick("contact")}
          className="px-4 py-2 rounded-lg border border-green-500 text-green-400 font-semibold hover:bg-green-500 hover:text-white shadow transition"
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
