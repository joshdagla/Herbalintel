import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white/30 backdrop-blur-md border-t border-white/20 text-center py-4 mt-auto text-sm text-gray-700 shadow-inner rounded-t-3xl">
            Made with ❤️ for holistic healing — Herbalintel © {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
