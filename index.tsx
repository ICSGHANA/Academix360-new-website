
import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Logo Component
const Logo = ({ className = "h-10", onClick }: { className?: string, onClick?: (e: React.MouseEvent<HTMLDivElement>) => void }) => (
  <div className={`d-flex align-items-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
    <svg viewBox="0 0 100 100" style={{ height: '100%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 15C15 25 10 45 15 65" stroke="#0EA5E9" strokeWidth="8" strokeLinecap="round" />
      <path d="M70 15C85 25 90 45 85 65" stroke="#F97316" strokeWidth="8" strokeLinecap="round" />
      <path d="M40 8C55 5 75 10 85 25" stroke="#F97316" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
      <path d="M85 10L87 15L92 17L87 19L85 24L83 19L78 17L83 15L85 10Z" fill="#F97316" />
      <path d="M50 25L85 38L50 51L15 38L50 25Z" fill="#334155" />
      <path d="M35 45V55C35 55 40 60 50 60C60 60 65 55 65 55V45" fill="#334155" />
      <path d="M78 35V48" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
      <circle cx="78" cy="52" r="4" fill="#FACC15" />
      <path d="M50 85C35 85 20 80 15 70V80C20 90 35 95 50 95C65 95 80 90 85 80V70C80 80 65 85 50 85Z" fill="#1E3A8A" />
      <path d="M50 85V65C50 65 65 60 85 70V80C65 70 50 75 50 75Z" fill="#0EA5E9" />
      <path d="M50 85V65C50 65 35 60 15 70V80C35 70 50 75 50 75Z" fill="#84CC16" />
      <rect x="55" y="55" width="6" height="15" rx="1" fill="#F97316" />
      <rect x="65" y="48" width="6" height="22" rx="1" fill="#0EA5E9" />
    </svg>
    <div className="d-flex flex-column">
      <span className="fw-black fs-4 lh-1 text-body">
        <span className="text-primary">ACADE</span><span className="text-accent">MIX</span><span className="text-primary">-360</span>
      </span>
      <span className="text-uppercase text-secondary fw-bold" style={{ fontSize: '8px', letterSpacing: '2px' }}>Smart Tools for Smarter Education</span>
    </div>
  </div>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Dynamic Hero Rotating Content
const HeroBenefitSlider = () => {
  const [index, setIndex] = useState(0);
  const benefits = [
    { text: "Built for the unique administrative needs of African schools.", tag: "Localized Solution", icon: "🌍" },
    { text: "Reduce manual administrative workload by over 70% with smart automation.", tag: "70% Faster", icon: "⚡" },
    { text: "Real-time fee tracking and automated financial reporting for total clarity.", tag: "Financial Trust", icon: "💰" },
    { text: "Secure cloud-based access for teachers, parents, and admins—anywhere.", tag: "24/7 Accessible", icon: "☁️" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-5 position-relative" style={{ minHeight: '120px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-100"
        >
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-pill fw-black" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {benefits[index].icon} {benefits[index].tag}
            </span>
          </div>
          <p className="lead text-secondary m-0 fw-medium pe-lg-5" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
            {benefits[index].text}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="d-flex gap-2 mt-4">
        {benefits.map((_, i) => (
          <div 
            key={i} 
            className={`rounded-pill transition-all duration-500 ${i === index ? 'bg-primary' : 'bg-secondary bg-opacity-20'}`} 
            style={{ width: i === index ? '32px' : '8px', height: '6px' }}
          />
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Product Demo Request',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    // Full Name Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters long';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear individual error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Reset form on success
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: 'Product Demo Request',
        message: ''
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-5"
    >
      <div className="bg-primary py-5 text-white mb-5 mt-5">
        <div className="container py-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-2">
              <li className="breadcrumb-item"><a href="#" className="text-white opacity-75 text-decoration-none">Home</a></li>
              <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 className="display-4 fw-black m-0">Get In Touch</h1>
          <p className="lead opacity-75">We're here to help you revolutionize your school administration.</p>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="card border-0 rounded-5 p-4 p-md-5 bg-body-tertiary shadow-sm h-100">
              <h2 className="fw-black mb-4 text-body">Contact Information</h2>
              <p className="text-secondary mb-5">Have a specific question? Reach out to us directly through any of these channels.</p>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-4">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-4 fs-4">📧</div>
                  <div>
                    <small className="text-muted d-block fw-bold text-uppercase">Email Enquiries</small>
                    <span className="fw-bold text-body">hello@academix360.com</span>
                  </div>
                </div>
                
                <div className="d-flex align-items-center gap-4">
                  <div className="bg-accent bg-opacity-10 text-accent p-3 rounded-4 fs-4">📞</div>
                  <div>
                    <small className="text-muted d-block fw-bold text-uppercase">Call Center</small>
                    <span className="fw-bold text-body">+234 810 000 0000</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <div className="bg-success bg-opacity-10 text-success p-3 rounded-4 fs-4">💬</div>
                  <div>
                    <small className="text-muted d-block fw-bold text-uppercase">WhatsApp Support</small>
                    <span className="fw-bold text-body">+234 901 234 5678</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <div className="bg-info bg-opacity-10 text-info p-3 rounded-4 fs-4">📍</div>
                  <div>
                    <small className="text-muted d-block fw-bold text-uppercase">Main Office</small>
                    <span className="fw-bold text-body">Victoria Island, Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-top border-secondary border-opacity-25">
                <h5 className="fw-black mb-3 text-body">Regional Presence</h5>
                <div className="row g-3">
                  <div className="col-6"><span className="badge bg-secondary-subtle text-secondary w-100 py-2">Nairobi, Kenya</span></div>
                  <div className="col-6"><span className="badge bg-secondary-subtle text-secondary w-100 py-2">Accra, Ghana</span></div>
                  <div className="col-6"><span className="badge bg-secondary-subtle text-secondary w-100 py-2">Kigali, Rwanda</span></div>
                  <div className="col-6"><span className="badge bg-secondary-subtle text-secondary w-100 py-2">Cape Town, SA</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 rounded-5 p-4 p-md-5 shadow-sm h-100 bg-body">
              {submitted ? (
                <div className="text-center py-5">
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <span className="fs-1">✅</span>
                  </div>
                  <h2 className="fw-black text-body">Message Received!</h2>
                  <p className="text-secondary mb-4">Our education consultants will reach out to you within the next 2 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline-primary rounded-pill px-4">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="fw-black mb-4 text-body">Send us a Message</h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label fw-bold text-body">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        placeholder="John Doe" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required 
                      />
                      {errors.fullName && <div className="invalid-feedback fw-bold">{errors.fullName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-bold text-body">Work Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="john@school.edu" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                      {errors.email && <div className="invalid-feedback fw-bold">{errors.email}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label fw-bold text-body">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        className="form-control" 
                        placeholder="+234..." 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inquiryType" className="form-label fw-bold text-body">Inquiry Type</label>
                      <select 
                        id="inquiryType"
                        name="inquiryType"
                        className="form-select form-control"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                      >
                        <option value="Product Demo Request">Product Demo Request</option>
                        <option value="Pricing Inquiry">Pricing Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-bold text-body">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        rows={4} 
                        placeholder="How can we help your school?" 
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                      {errors.message && <div className="invalid-feedback fw-bold">{errors.message}</div>}
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 py-3 fs-5 shadow mt-2">Send Inquiry Now</button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-body-tertiary py-5 border-top border-secondary border-opacity-10">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-black text-body">Common Questions</h2>
            <p className="text-secondary">Quick answers to things you might be wondering about.</p>
          </div>
          <div className="row g-4 max-w-4xl mx-auto">
            <div className="col-md-6">
              <div className="p-4 bg-body rounded-4 shadow-sm h-100">
                <h5 className="fw-bold mb-2 text-body">How long does deployment take?</h5>
                <p className="text-secondary small mb-0">For Cloud SaaS, you can be live in 24 hours. On-premise setups typically take 3-5 business days.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 bg-body rounded-4 shadow-sm h-100">
                <h5 className="fw-bold mb-2 text-body">Is staff training included?</h5>
                <p className="text-secondary small mb-0">Yes! Every setup includes 3 comprehensive remote training sessions for your admin and teaching staff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const InteractiveFeatureCard = ({ feature }: { feature: { title: string, icon: string, desc: string } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="feature-card h-100 border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--bs-body-bg)',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '2.5rem',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(var(--ax-primary-rgb), 0.15)' 
          : '0 4px 15px rgba(0,0,0,0.05)'
      }}
      animate={{
        y: isHovered ? -8 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background Decorative Accent */}
      <motion.div 
        className="position-absolute"
        style={{
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(var(--ax-orange-rgb), 0.1) 0%, transparent 70%)',
          top: '-50px',
          right: '-50px',
          borderRadius: '50%',
          zIndex: 0
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 1 : 0.5
        }}
      />

      <div className="p-4 h-100 d-flex flex-column align-items-center text-center justify-content-center position-relative" style={{ minHeight: '300px', zIndex: 1 }}>
        
        {/* Animated Icon Box */}
        <motion.div
          className="icon-box p-4 rounded-4 d-inline-block mb-4"
          style={{
            background: isHovered ? 'rgba(var(--ax-primary-rgb), 0.1)' : 'var(--bs-tertiary-bg)'
          }}
          animate={{
            y: isHovered ? -15 : 0,
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0,
            boxShadow: isHovered ? '0 10px 20px rgba(var(--ax-primary-rgb), 0.1)' : 'none'
          }}
          transition={{ duration: 0.4, ease: "circOut" }}
        >
          <motion.span 
            className="fs-1 d-block"
            animate={{ scale: isHovered ? 1.2 : 1 }}
          >
            {feature.icon}
          </motion.span>
        </motion.div>
        
        {/* Animated Title */}
        <motion.h4 
          className="fw-black mb-0 px-2 text-body"
          animate={{ 
            color: isHovered ? "var(--ax-blue)" : "inherit",
            y: isHovered ? -10 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          {feature.title}
        </motion.h4>

        {/* Revealed Description */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 15 }}
              animate={{ opacity: 1, height: "auto", y: -5 }}
              exit={{ opacity: 0, height: 0, y: 15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 w-100"
            >
              <p className="text-secondary small mb-3 lh-lg px-3">
                {feature.desc}
              </p>
              
              <motion.div 
                className="d-flex align-items-center justify-content-center gap-2 text-accent fw-black small text-uppercase tracking-widest"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <span>Discover Module</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Initial Prompt */}
        {!isHovered && (
          <motion.div 
            className="text-muted small opacity-50 mt-3 fw-bold text-uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            style={{ fontSize: '10px' }}
          >
            Hover to view details
          </motion.div>
        )}
      </div>
      
      {/* Animated Accent Line */}
      <motion.div 
        className="position-absolute bottom-0 start-0 h-1 bg-accent"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: "circOut" }}
      />
    </motion.div>
  );
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [students, setStudents] = useState(500);
  const [deployment, setDeployment] = useState('cloud');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'contact'>('landing');
  const navCollapseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (view === 'landing') {
        const sections = ['home', 'benefits', 'features', 'pricing'];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        }
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const addons = [
    { id: 'transport', name: 'Transport Tracker', icon: '🚌', price: 150, desc: 'Real-time bus tracking and route management' },
    { id: 'hostel', name: 'Hostel Manager', icon: '🏠', price: 120, desc: 'Dorm allocation and maintenance tracking' },
    { id: 'sms', name: 'Bulk SMS Suite', icon: '📱', price: 90, desc: 'Automated parent alerts and announcements' },
    { id: 'biometric', name: 'Biometric Login', icon: '☝️', price: 250, desc: 'Fingerprint attendance and staff clock-in' }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const pricingDetails = useMemo(() => {
    const baseFee = deployment === 'cloud' ? 49 : 1999;
    const rate = students <= 500 ? 0.8 : students <= 2000 ? 0.65 : 0.5;
    const capacityFee = Math.round(students * rate);
    const addonFee = selectedAddons.reduce((acc, curr) => {
      const addon = addons.find(a => a.id === curr);
      return acc + (addon ? addon.price : 0);
    }, 0);
    
    return {
      base: baseFee,
      capacity: capacityFee,
      addons: addonFee,
      total: baseFee + capacityFee + addonFee,
      ratePerStudent: rate
    };
  }, [students, deployment, selectedAddons]);

  const coreFeatures = [
    { title: "Student Info System", icon: "👤", desc: "A 360-degree view of profiles, academic history, and medical records." },
    { title: "Admissions & Enrollment", icon: "📝", desc: "Streamline digital registration and automated student onboarding." },
    { title: "Fee & Accounting", icon: "💰", desc: "Automated invoicing, online payments, and instant financial reporting." },
    { title: "Exams & Report Cards", icon: "📊", desc: "Dynamic result processing with custom grading and transcripts." },
    { title: "Attendance Tracking", icon: "✅", desc: "Track daily presence with instant alerts sent to parent portals." },
    { title: "Staff & Teacher Portal", icon: "🏫", desc: "Manage schedules, payroll, and collaborative lesson planning tools." },
    { title: "SMS & Notifications", icon: "📱", desc: "Instant automated alerts for emergencies, events, and fee reminders." },
    { title: "Transport & Hostel", icon: "🚌", desc: "Manage bus routes, tracking, and dorm room allocations effortlessly." }
  ];

  const handleNavClick = (e: React.MouseEvent, targetView: 'landing' | 'contact', anchor?: string) => {
    e.preventDefault();
    
    if (navCollapseRef.current && navCollapseRef.current.classList.contains('show')) {
      const bsCollapse = (window as any).bootstrap.Collapse.getInstance(navCollapseRef.current);
      if (bsCollapse) bsCollapse.hide();
    }

    if (view !== targetView) {
      setView(targetView);
    }

    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else if (targetView === 'landing' && !anchor) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
        <div className="container">
          <Logo onClick={(e: any) => handleNavClick(e, 'landing')} />
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navContent" ref={navCollapseRef}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <a className={`nav-link px-3 ${activeSection === 'benefits' && view === 'landing' ? 'active' : ''}`} href="#benefits" onClick={(e) => handleNavClick(e, 'landing', 'benefits')}>Benefits</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link px-3 ${activeSection === 'features' && view === 'landing' ? 'active' : ''}`} href="#features" onClick={(e) => handleNavClick(e, 'landing', 'features')}>Features</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link px-3 ${activeSection === 'pricing' && view === 'landing' ? 'active' : ''}`} href="#pricing" onClick={(e) => handleNavClick(e, 'landing', 'pricing')}>Pricing</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link px-3 ${view === 'contact' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme} 
                className="btn text-decoration-none theme-toggle-btn fs-4"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </motion.button>
              <button className="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#demoModal">Book Demo</button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero */}
            <header id="home" className="hero-section">
              <div className="container">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <span className="badge rounded-pill text-bg-primary p-2 px-3 mb-4 shadow-sm">NEW: Optimized for 2025</span>
                    <h1 className="display-3 fw-black tracking-tight mb-4 text-body">
                      Modern School <br />
                      <span className="text-primary">Management</span> <br />
                      Made <span className="text-accent">Simple</span>
                    </h1>
                    
                    <HeroBenefitSlider />

                    <div className="d-flex gap-3 mt-4">
                      <button className="btn btn-primary btn-lg px-5 shadow" data-bs-toggle="modal" data-bs-target="#demoModal">Get Started</button>
                      <button className="btn btn-outline-dark btn-lg px-5" onClick={(e) => handleNavClick(e, 'landing', 'features')}>Explore Features</button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative">
                      <motion.img 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/59590f161506911.63c69267a1f81.jpg" 
                        className="img-fluid rounded-5 shadow-lg border border-secondary border-opacity-10" 
                        alt="Dashboard" 
                      />
                      <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="position-absolute bottom-0 start-0 translate-middle-x bg-body p-3 rounded-4 shadow-lg d-none d-md-block" 
                        style={{ marginLeft: '50px' }}
                      >
                        <div className="d-flex align-items-center gap-3 text-body">
                          <div className="bg-success bg-opacity-10 p-2 rounded-3 text-success">✅</div>
                          <div>
                            <small className="text-muted d-block text-uppercase fw-black" style={{ fontSize: '10px' }}>Fees Collected</small>
                            <strong className="fs-5">+₦2.4M Today</strong>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Benefits */}
            <section id="benefits" className="py-5">
              <div className="container py-5">
                <div className="text-center mb-5">
                  <h2 className="display-5 fw-black mb-3 text-body">Why Schools Choose Us</h2>
                  <p className="lead text-secondary">A tailored solution for high-performance educational institutions.</p>
                </div>
                <div className="row g-4">
                  {[
                    { title: "All-in-One", desc: "Manage everything from admissions to graduation in one hub.", icon: "🎯" },
                    { title: "Save Time", desc: "Automate complex reporting to focus on student success.", icon: "⏱️" },
                    { title: "Better Comms", desc: "Instant SMS alerts and real-time parent notifications.", icon: "📢" },
                    { title: "Secure Cloud", desc: "Your data is encrypted and backed up in our secure cloud.", icon: "🔒" }
                  ].map((b, i) => (
                    <div className="col-md-6 col-lg-3" key={i}>
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="feature-card p-5 text-center bg-body"
                      >
                        <div className="fs-1 mb-4">{b.icon}</div>
                        <h3 className="h4 fw-black mb-3 text-body">{b.title}</h3>
                        <p className="text-secondary mb-0">{b.desc}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Core Features Section */}
            <section id="features" className="py-5 bg-body-tertiary">
              <div className="container py-5">
                <div className="text-center mb-5">
                  <span className="text-accent fw-bold text-uppercase tracking-widest">Powerful Modules</span>
                  <h2 className="display-5 fw-black mb-3 text-body">Everything Your School Needs</h2>
                  <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>Our robust feature set covers every administrative bottleneck in your school day.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                  {coreFeatures.map((f, i) => (
                    <div className="col" key={i}>
                      <InteractiveFeatureCard feature={f} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-5 bg-body-secondary">
              <div className="container py-5">
                <div className="row g-5">
                  <div className="col-lg-7">
                    <h2 className="display-4 fw-black mb-4 text-body">Transparent <br/><span className="text-primary">Investment</span></h2>
                    <p className="lead text-secondary mb-5">Configure your school's custom plan. Only pay for the capacity you need and the features you actually use.</p>
                    
                    <div className="card border-0 rounded-5 p-4 p-md-5 mb-5 shadow-sm bg-body">
                      <div className="mb-5">
                        <label className="form-label h5 fw-black mb-4 d-flex justify-content-between align-items-center text-body">
                          Student Capacity: 
                          <span className="badge bg-primary rounded-pill px-3 py-2">{students.toLocaleString()}</span>
                        </label>
                        <input type="range" className="form-range custom-range" min="50" max="5000" step="50" value={students} onChange={(e) => setStudents(Number(e.target.value))} />
                        <div className="d-flex justify-content-between text-muted small mt-2">
                          <span>50 Students</span>
                          <span>5,000 Students</span>
                        </div>
                      </div>
                      
                      <div className="mb-5">
                        <h5 className="fw-black mb-4 text-body">Deployment Infrastructure</h5>
                        <div className="btn-group w-100 p-1 bg-body-tertiary rounded-4 shadow-inner">
                          <button className={`btn py-3 rounded-4 transition-all ${deployment === 'cloud' ? 'btn-white shadow-sm fw-black' : 'text-muted'}`} onClick={() => setDeployment('cloud')}>
                            Cloud SaaS <span className="badge bg-success-subtle text-success ms-2 small">Best Value</span>
                          </button>
                          <button className={`btn py-3 rounded-4 transition-all ${deployment === 'on-premise' ? 'btn-white shadow-sm fw-black' : 'text-muted'}`} onClick={() => setDeployment('on-premise')}>
                            Self-Hosted On-Premise
                          </button>
                        </div>
                      </div>

                      <div>
                        <h5 className="fw-black mb-4 text-body">Optional Add-on Modules</h5>
                        <div className="row g-3">
                          {addons.map(addon => (
                            <div className="col-md-6" key={addon.id}>
                              <div 
                                className={`card h-100 p-3 border-2 transition-all cursor-pointer ${selectedAddons.includes(addon.id) ? 'border-accent bg-accent bg-opacity-10' : 'bg-body-tertiary border-transparent'}`}
                                onClick={() => toggleAddon(addon.id)}
                              >
                                <div className="d-flex align-items-center gap-3">
                                  <div className="fs-3">{addon.icon}</div>
                                  <div className="flex-grow-1">
                                    <h6 className="fw-black mb-0 text-body">{addon.name}</h6>
                                    <small className="text-muted">${addon.price}/yr</small>
                                  </div>
                                  <div className={`rounded-circle border border-2 d-flex align-items-center justify-content-center bg-body`} style={{ width: '24px', height: '24px', borderColor: selectedAddons.includes(addon.id) ? 'var(--ax-orange)' : '#cbd5e1' }}>
                                    {selectedAddons.includes(addon.id) && <div className="bg-accent rounded-circle" style={{ width: '12px', height: '12px' }}></div>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-5">
                    <div className="pricing-card shadow-lg">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h4 className="text-uppercase tracking-widest fw-black m-0" style={{ fontSize: '12px', opacity: 0.7 }}>Cost Breakdown</h4>
                        <span className="badge bg-white bg-opacity-20 rounded-pill px-3">Live Quote</span>
                      </div>
                      
                      <div className="mb-5 space-y-3">
                        <div className="d-flex justify-content-between mb-3 py-2 border-bottom border-white border-opacity-10">
                          <span className="opacity-75">Base Licensing ({deployment === 'cloud' ? 'Annual' : 'One-time'})</span>
                          <span className="fw-bold">${pricingDetails.base.toLocaleString()}</span>
                        </div>
                        
                        <div className="d-flex justify-content-between mb-3 py-2 border-bottom border-white border-opacity-10">
                          <div>
                            <span className="opacity-75 d-block">Student Capacity Fee</span>
                            <small className="opacity-50" style={{fontSize: '10px'}}>{students} students × ${pricingDetails.ratePerStudent}/student</small>
                          </div>
                          <span className="fw-bold">${pricingDetails.capacity.toLocaleString()}</span>
                        </div>

                        {pricingDetails.addons > 0 && (
                          <div className="d-flex justify-content-between mb-3 py-2 border-bottom border-white border-opacity-10">
                            <span className="opacity-75">Add-on Modules ({selectedAddons.length})</span>
                            <span className="fw-bold">+${pricingDetails.addons.toLocaleString()}</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-5">
                        <p className="text-uppercase fw-black mb-2" style={{ fontSize: '12px', opacity: 0.7 }}>Estimated Total Investment</p>
                        <div className="d-flex align-items-baseline gap-2">
                          <span className="display-2 fw-black">${pricingDetails.total.toLocaleString()}</span>
                          <span className="opacity-50">/yr</span>
                        </div>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-3 rounded-4 mb-4 small border border-white border-opacity-10">
                        <i className="bi bi-info-circle me-2"></i>
                        No hidden charges. Includes 24/7 technical support and all future core updates.
                      </div>

                      <button className="btn btn-accent w-100 py-3 fs-5 shadow-lg" data-bs-toggle="modal" data-bs-target="#demoModal">
                        Secure This Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <ContactPage key="contact" />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contact-info" className="bg-dark text-white pt-5 pb-4">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4">
              <Logo onClick={(e: any) => handleNavClick(e, 'landing')} className="h-12 mb-4" />
              <p className="text-secondary opacity-75">Revolutionizing educational management through robust technology. Built for the future of Africa.</p>
            </div>
            <div className="col-lg-2">
              <h5 className="fw-black mb-4">Modules</h5>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2"><a href="#" className="text-decoration-none text-secondary opacity-75 hover:opacity-100" onClick={(e) => handleNavClick(e, 'landing', 'features')}>Admissions</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-secondary opacity-75 hover:opacity-100" onClick={(e) => handleNavClick(e, 'landing', 'features')}>Finance</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-secondary opacity-75 hover:opacity-100" onClick={(e) => handleNavClick(e, 'landing', 'features')}>Exams</a></li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="fw-black mb-4">Company</h5>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2"><a href="#" className="text-decoration-none text-secondary opacity-75 hover:opacity-100" onClick={(e) => handleNavClick(e, 'landing')}>About</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-secondary opacity-75 hover:opacity-100" onClick={(e) => handleNavClick(e, 'landing', 'pricing')}>Pricing Plans</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-secondary opacity-75 hover:opacity-100" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="fw-black mb-4">Contact</h5>
              <p className="text-secondary m-0 opacity-75">hello@academix360.com</p>
              <p className="text-secondary opacity-75">+234 810 000 0000</p>
            </div>
          </div>
          <div className="border-top border-secondary mt-5 pt-4 text-center text-secondary small opacity-50">
            © 2025 ACADEMIX-360 ERP. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <div className="modal fade" id="demoModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-5 shadow-lg overflow-hidden bg-body">
            <div className="modal-body p-5">
              <div className="text-center mb-5">
                <h2 className="fw-black text-body">Book Your Demo</h2>
                <p className="text-secondary">Ready to digitize your school administration?</p>
              </div>
              <form className="row g-3">
                <div className="col-12"><input type="text" className="form-control" placeholder="Full Name" /></div>
                <div className="col-12"><input type="email" className="form-control" placeholder="Work Email" /></div>
                <div className="col-12"><input type="text" className="form-control" placeholder="School Name" /></div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100 py-3 mt-3 shadow">Request Demo Access</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />

      <a href="https://wa.me/2348100000000" className="whatsapp-float">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.62c1.54.914 3.382 1.403 5.262 1.403 5.733 0 10.393-4.66 10.393-10.393.002-2.779-1.08-5.391-3.048-7.357-1.968-1.967-4.58-3.047-7.352-3.047-5.736 0-10.394 4.658-10.394 10.392 0 2.093.622 4.134 1.795 5.86l-.473 1.727 1.817-.486z" />
        </svg>
      </a>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
