
import React from 'react';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: "linear" },
  },
};

const benefits = [
  {
    title: "All-in-One Platform",
    description: "Manage admissions, fees, results, and communication in one integrated place. No more switching between apps.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path variants={pathVariants} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Save Time & Labor",
    description: "Automate complex reports, fee tracking, and daily attendance. Reduce administrative manual work by up to 70%.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.circle variants={pathVariants} cx="12" cy="12" r="9" />
        <motion.path variants={pathVariants} d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Improve Parent Trust",
    description: "Send instant SMS, email, and app notifications. Keep parents informed about their child's academic progress.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path variants={pathVariants} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Secure & Reliable",
    description: "Cloud-based system with military-grade encryption and daily backups. Your school's data is always safe.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path variants={pathVariants} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 bg-white dark:bg-dark overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center mb-24">
          <motion.span initial={{ opacity: 0, letterSpacing: "0.1em" }} whileInView={{ opacity: 1, letterSpacing: "0.3em" }} viewport={{ once: true }} className="text-primary dark:text-blue-400 font-black uppercase text-xs mb-4 inline-block">
            The Academix360 Advantage
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white tracking-tighter max-w-4xl mx-auto leading-[1.1]">
            Empowering Schools with <br />
            <span className="text-primary dark:text-blue-400">Next-Gen Management</span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -12 }} className="relative p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-default overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="mb-10 relative">
                  <motion.div variants={pulseVariants} animate="animate" className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div className="bg-white dark:bg-slate-700 w-20 h-20 rounded-3xl flex items-center justify-center text-primary dark:text-blue-300 shadow-xl shadow-primary/5 group-hover:bg-primary dark:group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative overflow-hidden">
                    <motion.div variants={floatingVariants} animate="animate">{benefit.icon}</motion.div>
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-black text-dark dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
              <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} className="absolute bottom-0 left-0 right-0 h-1.5 bg-accent origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;