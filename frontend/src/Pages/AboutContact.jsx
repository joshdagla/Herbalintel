import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AboutContact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll to section on load or hash change
  useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 150); // slight delay to allow rendering
      }
    }
  }, [location]);

  const handleBackClick = () => navigate('/');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 flex flex-col items-center px-6 py-12">
      {/* White Content Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 transition-all duration-500 scroll-smooth relative">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="absolute top-6 right-6 text-sm px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md transition"
        >
          ← Back to Diagnosis
        </button>

        {/* About Us Section */}
        <section id="about" className="mb-12 pt-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4">About Us 🛠️</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            Herbalintel is a modern Ayurvedic assistant designed to bridge ancient wisdom with modern technology.
            Built with passion for natural healing, our app intelligently assesses symptoms and health metrics to recommend tailored ayurvedic treatments.
          </p>
          <p className="text-gray-700 mt-3 text-md">
            Our mission is to empower people with personalized holistic wellness insights using AI and Machine Learning driven diagnostics.
            With a library of ayurvedic knowledge and a sleek user-friendly interface, we’re committed to promoting natural remedies and proactive care for everyone.
          </p>
          <p className="text-gray-700 mt-3 text-md">
            Whether you're experiencing minor symptoms or just curious about natural healing options,
            Herbalintel offers trusted, symptom-based guidance powered by machine learning.
          </p>
        </section>

        {/* Stylized Divider */}
        <div className="w-full border-t-2 border-dashed border-emerald-300 mb-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-white px-4 text-sm text-emerald-600 font-semibold shadow-sm rounded-full">
            ✦ Get in Touch ✦
          </div>
        </div>

        {/* Contact Us Section */}
        <section id="contact" className="pt-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us 📬</h2>
          <p className="text-gray-700 text-md">
            Feel free to ask any questions or suggest additional features. We’d love to hear from you!
          </p>
          <ul className="mt-3 space-y-2 text-gray-700 text-md">
            <li><strong>Email:</strong> support.herbalintel@sitpune.edu.in</li>
            <li><strong>Location:</strong> Pune, India</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutContact;
