import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Cookie, Settings, ShieldCheck, PieChart, 
  Info, ChevronDown, ArrowLeft, Mail, 
  MousePointer2, ExternalLink, Clock, CheckCircle2, FileText
} from 'lucide-react';

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const CookiePolicy = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const cookieData = [
    {
      title: "What are Cookies?",
      icon: <Info size={20} />,
      content: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, keep you logged in, and understand how you interact with Edvoy."
    },
    {
      title: "Essential Cookies",
      icon: <ShieldCheck size={20} />,
      content: "These are strictly necessary for the website to function. They enable core features like secure log-in and application progress saving."
    },
    {
      title: "Performance & Analytics",
      icon: <PieChart size={20} />,
      content: "We use tools like Google Analytics to collect anonymous data about how students visit us, helping us optimize our university search tools."
    },
    {
      title: "Marketing & Retargeting",
      icon: <MousePointer2 size={20} />,
      content: "These cookies help us deliver relevant education advertisements based on your interests and previous searches."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500 font-sans selection:bg-sky-500/30">
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-sky-500 origin-left z-50" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 flex items-center pointer-events-none">
        <button 
          onClick={() => navigate('/privacy')}
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold uppercase tracking-widest hover:border-sky-500 transition-all shadow-sm"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Privacy
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden text-center md:text-left">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-black uppercase tracking-widest text-sky-600">
              <Cookie size={12} /> Digital Preference Policy
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              Cookie <br/> <span className="text-sky-500">Usage.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-1"><Clock size={12}/> Updated: Jan 2026</span>
                <span className="flex items-center gap-1 text-sky-500"><CheckCircle2 size={12}/> Global Compliance Active</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Accordion Content */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {cookieData.map((item, idx) => (
            <CookieAccordion 
              key={idx}
              index={idx}
              active={expandedIndex === idx}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              title={item.title}
              icon={item.icon}
            >
              {item.content}
            </CookieAccordion>
          ))}
        </div>
      </section>

      {/* --- Footer CTA (Updated Navigation) --- */}
      <footer className="pb-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
          
          {/* Review Terms Button */}
          <button 
            onClick={() => navigate('/terms-of-service')} // Navigates to Terms.jsx route
            className="flex-1 p-8 rounded-[2rem] bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-left transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-white/10 dark:bg-slate-100 rounded-xl"><FileText size={20} /></div>
              <ExternalLink size={16} className="opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h4 className="font-black uppercase tracking-tighter">Review Terms</h4>
            <p className="text-xs opacity-60">Understand our user agreement.</p>
          </button>

          {/* Data Privacy Button */}
          <button 
            onClick={() => navigate('/privacy-policy')} // Navigates to PrivacyPolicy.jsx route
            className="flex-1 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 text-left transition-all hover:scale-[1.02] active:scale-[0.98] group bg-white dark:bg-slate-950"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-sky-500 text-white rounded-xl"><ShieldCheck size={20} /></div>
              <ExternalLink size={16} className="opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h4 className="font-black uppercase tracking-tighter">Data Privacy</h4>
            <p className="text-xs text-slate-500">How we manage your information.</p>
          </button>

        </div>
      </footer>
    </div>
  );
};

// --- Sub-component: CookieAccordion ---
const CookieAccordion = ({ title, children, index, active, onClick, icon }) => (
  <motion.div 
    className={`rounded-[2rem] border transition-all duration-500 ${
      active ? 'border-sky-500/50 bg-sky-50/30 dark:bg-sky-500/5' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950'
    }`}
  >
    <button onClick={onClick} className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left">
      <div className="flex items-center gap-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
          active ? 'bg-sky-500 text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-400'
        }`}>
          {icon}
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Detail 0{index + 1}</span>
          <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">{title}</h3>
        </div>
      </div>
      <motion.div animate={{ rotate: active ? 180 : 0 }}>
        <ChevronDown size={20} className={active ? 'text-sky-500' : 'text-slate-300'} />
      </motion.div>
    </button>
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="px-8 pb-8 pt-2 md:ml-18 text-slate-500 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default CookiePolicy;