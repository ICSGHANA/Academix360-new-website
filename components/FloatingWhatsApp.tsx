
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/2340000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
      title="Chat on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.62c1.54.914 3.382 1.403 5.262 1.403 5.733 0 10.393-4.66 10.393-10.393.002-2.779-1.08-5.391-3.048-7.357-1.968-1.967-4.58-3.047-7.352-3.047-5.736 0-10.394 4.658-10.394 10.392 0 2.093.622 4.134 1.795 5.86l-.473 1.727 1.817-.486z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
