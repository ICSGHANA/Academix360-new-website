
import React, { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({ name: '', school: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => { onClose(); setIsSubmitted(false); }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-[2rem] p-8 relative z-10 shadow-2xl transition-all border border-transparent dark:border-slate-700">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-dark dark:hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-12"><div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div><h3 className="text-2xl font-bold text-dark dark:text-white mb-2">Booking Received!</h3><p className="text-slate-500 dark:text-slate-400">We'll call you within 24 hours.</p></div>
        ) : (
          <>
            <h3 className="text-2xl font-black text-dark dark:text-white mb-2 text-center">Book Your Free Demo</h3>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-8">Transform your school administration today.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-blue-500 dark:text-white focus:outline-none transition-all" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
              <input required type="text" placeholder="School Name" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-blue-500 dark:text-white focus:outline-none transition-all" value={formState.school} onChange={(e) => setFormState({...formState, school: e.target.value})} />
              <input required type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-blue-500 dark:text-white focus:outline-none transition-all" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
              <input required type="tel" placeholder="Phone Number" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-blue-500 dark:text-white focus:outline-none transition-all" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg hover:bg-blue-800 transition-all shadow-xl shadow-primary/20 mt-4">Request Access</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoModal;