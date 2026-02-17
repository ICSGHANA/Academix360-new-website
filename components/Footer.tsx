
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 md:border-none last:border-none py-4 md:py-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none group">
        <h4 className="font-bold text-dark dark:text-white text-lg md:mb-6 md:text-base">{title}</h4>
        <span className={`md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className="md:block hidden">{children}</div>
      <AnimatePresence>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden pt-4 pb-2">{children}</motion.div>}</AnimatePresence>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface dark:bg-dark pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo className="h-16" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs leading-relaxed">
              Modernizing African education through reliable, secure, and user-friendly technology. One platform. Total school control.
            </p>
          </div>
          <CollapsibleSection title="Modules">
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="#features" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="#features" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Fees & Accounting</a></li>
              <li><a href="#features" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Academic Grading</a></li>
              <li><a href="#features" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Attendance</a></li>
            </ul>
          </CollapsibleSection>
          <CollapsibleSection title="Company">
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="#home" className="hover:text-primary dark:hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#pricing" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#contact" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </CollapsibleSection>
          <CollapsibleSection title="Legal">
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Security Details</a></li>
            </ul>
          </CollapsibleSection>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 ACADEMIX-360 ERP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">Security Trust Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
