
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { name: "Student Info System", icon: "👤", desc: "Complete 360° view of student profiles, including health and family history." },
  { name: "Admissions", icon: "📝", desc: "Digital enrollment, document uploads, and automated admission letter generation." },
  { name: "Fee & Accounting", icon: "💰", desc: "Invoicing, partial payments, scholarship handling, and real-time financial audits." },
  { name: "Exams & Results", icon: "📊", desc: "Dynamic marksheets, GPA calculation, and instant transcript generation." },
  { name: "Attendance", icon: "✅", desc: "Track daily presence via mobile app, RFID, or biometric integration with parent alerts." },
  { name: "Staff Portal", icon: "🏫", desc: "Class schedules, lesson planning, HR records, and automated payroll processing." },
  { name: "SMS Notifications", icon: "📱", desc: "Automated broadcast of emergencies, fee reminders, and school-wide announcements." },
  { name: "Transport & Hostel", icon: "🚌", desc: "Route tracking, vehicle maintenance logs, and room allocation management." },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-surface dark:bg-slate-900 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 -z-0 opacity-50">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="url(#paint0_linear)" strokeWidth="40" strokeDasharray="20 20" />
          <defs>
            <linearGradient id="paint0_linear" x1="200" y1="20" x2="200" y2="380" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" stopOpacity="0.1" />
              <stop offset="1" stopColor="#F97316" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-accent font-black uppercase text-xs tracking-[0.3em] mb-4 inline-block">Comprehensive Suite</span>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-6 tracking-tight">
            Everything Your <span className="text-primary dark:text-blue-400 underline decoration-accent/30 decoration-4 underline-offset-8">School Needs</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Our modular ERP handles every administrative bottleneck, allowing you to focus on academic excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12, borderColor: '#F97316', backgroundColor: "rgba(255,255,255,0.02)", boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.2)" }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border-2 border-slate-100 dark:border-slate-700 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface dark:bg-slate-700 flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:bg-accent/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-dark dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">
                {feature.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium mb-6">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;