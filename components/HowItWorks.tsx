
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Book a Demo",
    description: "Schedule a virtual or physical demo to see how the system fits your school's specific needs.",
    color: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300"
  },
  {
    number: "02",
    title: "School Setup",
    description: "Our team handles data import, module configuration, and staff training sessions.",
    color: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300"
  },
  {
    number: "03",
    title: "Go Live",
    description: "Start managing everything digitally. Our support team is available 24/7 for the transition.",
    color: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-dark relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-dark dark:text-white mb-4 tracking-tight">Get Started in Days, Not Months</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">A smooth transition to digital management with our guided onboarding.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-800 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="text-center relative">
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg border border-white/10`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;