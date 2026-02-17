
import React from 'react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark dark:to-slate-900 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-left">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/10">
            <span className="bg-primary text-white text-[10px] uppercase px-2 py-0.5 rounded-md mr-3">New</span>
            Trusted by 200+ schools across Africa
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-dark dark:text-white leading-tight mb-6 tracking-tighter">
            Modern School <br />
            <span className="text-primary dark:text-blue-400">Management</span> <br />
            Made <span className="text-accent underline decoration-primary/20 decoration-4 underline-offset-8">Simple</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed font-medium">
            An all-in-one ERP system for admissions, academics, finance, communication, and reports—built specifically for the needs of African schools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenDemo}
              className="bg-primary text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
            >
              Book a Demo
            </button>
            <a 
              href="#pricing"
              className="bg-white dark:bg-slate-800 text-dark dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-black text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1 text-center"
            >
              Start Free Trial
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="User avatar"
                />
              ))}
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Join 2,500+ teachers using ACADEMIX-360</p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="bg-white dark:bg-slate-800 p-2 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 relative group overflow-hidden">
            <img 
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/59590f161506911.63c69267a1f81.jpg" 
              alt="ACADEMIX-360 ERP Dashboard" 
              className="rounded-2xl w-full h-auto transition-transform duration-700 group-hover:scale-[1.03] dark:opacity-90"
            />
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 animate-bounce-slow">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest">Fees Collected</p>
                  <p className="text-xl font-black text-dark dark:text-white">+₦2.4M Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
