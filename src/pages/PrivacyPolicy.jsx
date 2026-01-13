import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Lock, Globe2, Mail, FileText, 
  ChevronDown, Fingerprint, Database, UserCheck, 
  ArrowRight, ShieldAlert
} from 'lucide-react';

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  }
};

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const accordionVariants = {
  collapsed: { height: 0, opacity: 0, marginTop: 0 },
  expanded: { height: "auto", opacity: 1, marginTop: 20 }
};

const PrivacyPolicy = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500 selection:bg-emerald-500/30 font-sans">
      
      {/* --- Reading Progress Bar --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]">
             <div className="h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -mr-40 -mt-40" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6">
            <motion.div variants={wordReveal} className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/40 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 shadow-sm">
              <ShieldCheck size={14} className="animate-pulse" />
              Compliance Shield Active
            </motion.div>

            <motion.h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]" variants={container}>
              {["Data", "Privacy", "Simplified."].map((word, i) => (
                <motion.span key={i} className="inline-block mr-4 text-transparent bg-clip-text bg-gradient-to-b from-slate-950 to-slate-600 dark:from-white dark:to-slate-400" variants={wordReveal}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p variants={wordReveal} className="text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium">
              We’ve condensed our legal framework into an interactive guide. Click on any section to understand how we protect your journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- Interactive Accordion Section --- */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          
          <PolicyAccordion 
            index={0} 
            active={expandedIndex === 0} 
            onClick={() => toggleAccordion(0)}
            title="Who We Are" 
            icon={<Globe2 size={20} />}
          >
            <p>Edvoy is a global education consultancy. Our mission is to simplify the application process for students while maintaining the highest standards of data integrity across our web, mobile, and offline counseling platforms.</p>
          </PolicyAccordion>

          <PolicyAccordion 
            index={1} 
            active={expandedIndex === 1} 
            onClick={() => toggleAccordion(1)}
            title="Information We Collect" 
            icon={<Database size={20} />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-black text-[10px] uppercase tracking-widest text-emerald-500">Identity Data</h4>
                <p className="text-sm">Name, DOB, Nationality, and Passport details for visa processing.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-[10px] uppercase tracking-widest text-sky-500">Academic Data</h4>
                <p className="text-sm">Transcripts, IELTS/TOEFL scores, and Work Experience records.</p>
              </div>
            </div>
          </PolicyAccordion>

          <PolicyAccordion 
            index={2} 
            active={expandedIndex === 2} 
            onClick={() => toggleAccordion(2)}
            title="Data Protection & Security" 
            icon={<Lock size={20} />}
          >
            <p className="mb-4">We implement industry-standard AES-256 encryption. Your data is stored on secure cloud servers with restricted access controls and periodic security audits.</p>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold">SSL Encrypted</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold">GDPR Compliant</span>
            </div>
          </PolicyAccordion>

          <PolicyAccordion 
            index={3} 
            active={expandedIndex === 3} 
            onClick={() => toggleAccordion(3)}
            title="Your Legal Rights" 
            icon={<UserCheck size={20} />}
          >
            <ul className="space-y-3">
              {['Right to Access', 'Right to Rectification', 'Right to Erasure (Forget Me)', 'Right to Data Portability'].map((right, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {right}
                </li>
              ))}
            </ul>
          </PolicyAccordion>

          <PolicyAccordion 
            index={4} 
            active={expandedIndex === 4} 
            onClick={() => toggleAccordion(4)}
            title="Contact & Support" 
            icon={<Mail size={20} />}
          >
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <p className="text-sm font-medium mb-4">Need to exercise your rights or ask a question?</p>
              <div className="space-y-2">
                 <p className="text-sm"><strong>Email:</strong> privacy@edvoy.global</p>
                 <p className="text-sm"><strong>Response Time:</strong> Within 48 Hours</p>
              </div>
            </div>
          </PolicyAccordion>

        </div>
      </section>

      {/* --- Footer CTA --- */}
      <section className="pb-20 px-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="relative z-10">
             <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Still have questions?</h3>
             <p className="opacity-60 text-sm font-medium">Read our full Terms of Service for more details.</p>
          </div>
          <button onClick={() => navigate('/terms-of-service')} // Changed from a static link to navigate
  className="relative z-10 px-8 py-4 bg-emerald-500 text-slate-950 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 group"
>TERMS OF SERVICE
          </button>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px]" />
        </motion.div>
      </section>

    </div>
  );
};

// --- Sub-component: PolicyAccordion ---

const PolicyAccordion = ({ title, children, index, active, onClick, icon }) => {
  return (
    <motion.div 
      initial={false}
      className={`relative rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        active 
        ? 'border-emerald-500/50 bg-emerald-50/30 dark:bg-emerald-500/5 shadow-2xl' 
        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-400 dark:hover:border-slate-600'
      }`}
    >
      <button 
        onClick={onClick}
        className="w-full px-8 py-8 flex items-center justify-between gap-6 text-left"
      >
        <div className="flex items-center gap-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
            active ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-100 dark:bg-slate-900 text-slate-500'
          }`}>
            {icon}
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-1 block">Section 0{index + 1}</span>
            <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: active ? 180 : 0 }}
          className={`p-2 rounded-full ${active ? 'bg-emerald-500/20 text-emerald-500' : 'text-slate-400'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={accordionVariants}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 pt-0 ml-18 text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
               <div className="max-w-2xl">
                 {children}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PrivacyPolicy;