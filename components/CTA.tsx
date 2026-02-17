
import React from 'react';

interface CTAProps {
  onOpenDemo: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Digitize Your School Management?
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              Join hundreds of schools saving hours every day and improving their student outcomes with Academix360 ERP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenDemo}
                className="bg-accent text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 transform hover:scale-105"
              >
                Book a Free Demo
              </button>
              <a 
                href="https://wa.me/2340000000000" 
                className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.62c1.54.914 3.382 1.403 5.262 1.403 5.733 0 10.393-4.66 10.393-10.393.002-2.779-1.08-5.391-3.048-7.357-1.968-1.967-4.58-3.047-7.352-3.047-5.736 0-10.394 4.658-10.394 10.392 0 2.093.622 4.134 1.795 5.86l-.473 1.727 1.817-.486z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            <p className="text-blue-200 mt-10 font-medium">No credit card required for trial.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;