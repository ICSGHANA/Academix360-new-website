
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PricingProps {
  onOpenDemo: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const [students, setStudents] = useState(500);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [deployment, setDeployment] = useState<'cloud' | 'on-premise'>('cloud');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addons = [
    { id: 'transport', name: 'Transport Tracking', price: 45, icon: '🚌' },
    { id: 'hostel', name: 'Hostel Management', price: 35, icon: '🏠' },
    { id: 'sms', name: 'Bulk SMS API', price: 20, icon: '✉️' },
    { id: 'biometric', name: 'Biometric Integration', price: 60, icon: '☝️' },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  const pricingDetails = useMemo(() => {
    const baseFee = deployment === 'cloud' ? 49 : 1999;
    let perStudentRate = deployment === 'cloud' 
      ? (students <= 500 ? 0.8 : students <= 2000 ? 0.65 : 0.5) 
      : (students <= 500 ? 6.0 : students <= 2000 ? 5.0 : 4.0);
    const capacityFee = students * perStudentRate;
    const addonFee = selectedAddons.reduce((acc, curr) => {
      const addon = addons.find(a => a.id === curr);
      const multiplier = deployment === 'cloud' ? 1 : 12;
      return acc + (addon ? addon.price * multiplier : 0);
    }, 0);
    let subtotal = baseFee + capacityFee + addonFee;
    let discount = (deployment === 'cloud' && billingCycle === 'yearly') ? subtotal * 2 : 0;
    if (billingCycle === 'yearly' && deployment === 'cloud') subtotal = subtotal * 10;
    return { baseFee, capacityFee, addonFee, total: subtotal, discount, isEnterprise: students >= 5000 };
  }, [students, billingCycle, deployment, selectedAddons]);

  return (
    <section id="pricing" className="py-24 bg-surface dark:bg-slate-900 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Flexible Investment
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-6">
            Scale Your <span className="text-primary dark:text-blue-400 underline decoration-accent/30">Digital School</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Stop paying for features you don't use. Our dynamic calculator ensures you only pay for your actual student capacity and required modules.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          <div className="lg:col-span-7 space-y-10 bg-white dark:bg-slate-800 p-6 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700">
            <div className="space-y-4">
              <h3 className="text-lg font-black text-dark dark:text-white uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center">1</span> Choose Deployment
              </h3>
              <div className="grid grid-cols-2 gap-4 p-2 bg-slate-100 dark:bg-slate-900 rounded-3xl">
                <button onClick={() => setDeployment('cloud')} className={`py-4 rounded-2xl font-black text-sm transition-all ${deployment === 'cloud' ? 'bg-white dark:bg-slate-700 text-primary dark:text-white shadow-lg' : 'text-slate-500'}`}>Cloud SaaS</button>
                <button onClick={() => setDeployment('on-premise')} className={`py-4 rounded-2xl font-black text-sm transition-all ${deployment === 'on-premise' ? 'bg-white dark:bg-slate-700 text-primary dark:text-white shadow-lg' : 'text-slate-500'}`}>On-Premise</button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-black text-dark dark:text-white uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center">2</span> Student Capacity: <span className="text-accent ml-auto">{students.toLocaleString()}</span>
              </h3>
              <input type="range" min="50" max="5000" step="50" value={students} onChange={(e) => setStudents(parseInt(e.target.value))} className="w-full h-4 bg-slate-100 dark:bg-slate-900 rounded-full appearance-none cursor-pointer accent-accent" />
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-black text-dark dark:text-white uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center">3</span> Add-On Modules
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {addons.map(addon => (
                  <button key={addon.id} onClick={() => toggleAddon(addon.id)} className={`flex items-center p-5 rounded-[2rem] border-2 transition-all ${selectedAddons.includes(addon.id) ? 'border-accent bg-accent/5' : 'border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800'}`}>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-2xl mr-4">{addon.icon}</div>
                    <div className="flex-1 text-left">
                      <p className="font-black text-dark dark:text-white text-sm">{addon.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">${addon.price}/mo</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-primary text-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-blue-200 font-black uppercase tracking-widest text-xs mb-8">Quote Summary</h4>
                <div className="space-y-4 mb-8 text-sm border-b border-white/10 pb-8">
                  <div className="flex justify-between"><span>Base Investment</span><span>${pricingDetails.baseFee.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Capacity Fee</span><span>${Math.round(pricingDetails.capacityFee).toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Addons</span><span>+${Math.round(pricingDetails.addonFee).toLocaleString()}</span></div>
                </div>
                <div className="mb-10">
                  <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-2">Total Est. Investment</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black">{pricingDetails.isEnterprise ? 'TBD' : `$${Math.round(pricingDetails.total).toLocaleString()}`}</span>
                    {!pricingDetails.isEnterprise && <span className="text-blue-300 font-bold opacity-60">/yr</span>}
                  </div>
                </div>
                <button onClick={onOpenDemo} className="w-full bg-accent text-white py-6 rounded-3xl font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30">Book a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;