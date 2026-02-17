
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', school: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-accent font-black uppercase text-xs tracking-[0.3em] mb-4 inline-block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-6 leading-tight">
              Let's Build the Future of <span className="text-primary dark:text-blue-400">Your School</span> Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 font-medium">Have questions about specific modules or migration? Our team of experts is ready to help you.</p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/5 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary dark:text-blue-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" /></svg>
                </div>
                <div><p className="font-bold text-dark dark:text-white">Email Enquiries</p><p className="text-slate-500 dark:text-slate-400">hello@academix360.com</p></div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/5 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary dark:text-blue-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div><p className="font-bold text-dark dark:text-white">Head Office</p><p className="text-slate-500 dark:text-slate-400">Victoria Island, Lagos, Nigeria</p></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-700">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <div className="text-center py-20"><h3 className="text-3xl font-black text-dark dark:text-white">Message Sent!</h3><p className="text-slate-500 dark:text-slate-400">We'll contact you shortly.</p></div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input required type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-primary dark:focus:border-blue-500 dark:text-white focus:outline-none transition-all" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                  <input required type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-primary dark:focus:border-blue-500 dark:text-white focus:outline-none transition-all" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
                  <textarea required rows={4} placeholder="Your Message" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-primary dark:focus:border-blue-500 dark:text-white focus:outline-none transition-all" value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} />
                  <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-xl shadow-primary/20">Send Message</button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;