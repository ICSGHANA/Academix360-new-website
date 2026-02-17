
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent font-black uppercase tracking-widest text-xs mb-4">Trusted by 200+ Institutions</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Empowering Schools Across the Continent</h3>
            <p className="text-slate-400 text-lg mb-12 font-medium">
              We empower educational institutions to focus on what matters most—quality education—while we handle the complex administration.
            </p>
            
            <div className="grid grid-cols-2 gap-8 opacity-40 grayscale contrast-125">
               {/* Placeholders for real school logos */}
               <div className="h-14 bg-slate-700 rounded-xl animate-pulse" />
               <div className="h-14 bg-slate-700 rounded-xl animate-pulse" />
               <div className="h-14 bg-slate-700 rounded-xl animate-pulse" />
               <div className="h-14 bg-slate-700 rounded-xl animate-pulse" />
            </div>
          </div>

          <div className="bg-slate-800 p-8 md:p-14 rounded-[3rem] border border-slate-700 relative">
            <svg className="absolute top-10 right-10 w-20 h-20 text-slate-700/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 4.44772 14.4647 4 15.017 4H21.017C21.5693 4 22.017 4.44772 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V5C3 4.44772 3.44772 4 4 4H10C10.5523 4 11 4.44772 11 5V15C11 18.3137 8.31371 21 5 21H3Z" />
            </svg>
            <div className="relative">
              <p className="text-2xl font-bold leading-relaxed mb-10 italic">
                “This system reduced our manual administrative work by 70% and drastically improved fee tracking accuracy. Our parents love the mobile app notifications!”
              </p>
              <div className="flex items-center space-x-5">
                <img className="w-16 h-16 rounded-full border-4 border-accent shadow-xl" src="https://i.pravatar.cc/150?u=schooladmin" alt="Admin" />
                <div>
                  <p className="font-black text-xl">Dr. Samuel Adeyemi</p>
                  <p className="text-accent text-xs uppercase tracking-[0.2em] font-black mt-1">Administrator, Bright Horizon Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
