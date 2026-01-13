import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Gavel, Scale, FileText, AlertCircle, 
  ShieldCheck, HelpCircle, ChevronDown, 
  Handshake, Ban, History, Mail, ArrowRight,
  Clock
} from 'lucide-react';

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const TermsOfService = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const tosData = [
    {
      title: "Agreement to Terms",
      icon: <Handshake size={20} />,
      content: "By accessing or using the Edvoy platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using our services. Our services include but are not limited to overseas education counselling, university application assistance, and visa guidance."
    },
    {
      title: "User Eligibility",
      icon: <Scale size={20} />,
      content: "You must be at least 16 years of age to use our services independently. If you are under 18, you must have the consent and supervision of a parent or legal guardian who agrees to these terms on your behalf."
    },
    {
      title: "Accuracy of Information",
      icon: <ShieldCheck size={20} />,
      content: "You represent and warrant that all information provided to Edvoy (including academic transcripts, identity documents, and financial records) is true, complete, and accurate. Providing fraudulent documents is a violation of these terms and may lead to immediate termination of service and reporting to relevant authorities."
    },
    {
      title: "Edvoy’s Role & Limitations",
      icon: <AlertCircle size={20} />,
      content: "Edvoy provides expert guidance and facilitates applications. However, we do not guarantee admission to any university or the approval of any visa. Admission and visa decisions are made solely by the respective educational institutions and government embassies."
    },
    {
      title: "Intellectual Property",
      icon: <FileText size={20} />,
      content: "The content on our platform, including text, graphics, logos, and software, is the property of Edvoy and is protected by international copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written consent."
    },
    {
      title: "Prohibited Activities",
      icon: <Ban size={20} />,
      content: "You agree not to: (a) Use the service for any illegal purpose; (b) Attempt to hack or disrupt our security infrastructure; (c) Use automated systems (bots/scrapers) to extract data; (d) Impersonate any individual or entity during the application process."
    },
    {
      title: "Refunds & Cancellations",
      icon: <History size={20} />,
      content: "Service fees, if any, are subject to our specific refund policy shared at the time of payment. Generally, fees for processed applications or completed counselling sessions are non-refundable unless specified otherwise by local consumer law."
    },
    {
      title: "Governing Law",
      icon: <Gavel size={20} />,
      content: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Edvoy is registered, without regard to its conflict of law provisions."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500 font-sans selection:bg-blue-500/30">
      
      {/* --- Reading Progress Bar --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.1] dark:opacity-[0.05]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full -mt-40" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6 text-center md:text-left">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/40 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              <Gavel size={14} />
              Legal Framework
            </motion.div>

            <motion.h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-slate-950 to-slate-600 dark:from-white dark:to-slate-400" variants={fadeUp}>
              Terms of <br/>Service.
            </motion.h1>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Clock size={14} className="text-blue-500" />
                Updated: 12 Jan 2026
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <HelpCircle size={14} className="text-blue-500" />
                Read time: 6 Mins
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Accordion Content --- */}
      <section className="pb-32 px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto space-y-4"
        >
          {tosData.map((item, idx) => (
            <TOSAccordion 
              key={idx}
              index={idx}
              title={item.title}
              icon={item.icon}
              active={expandedIndex === idx}
              onClick={() => toggleAccordion(idx)}
            >
              {item.content}
            </TOSAccordion>
          ))}
        </motion.div>
      </section>

      {/* --- Footer Assistance --- */}
      <section className="pb-20 px-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="max-w-4xl mx-auto p-8 md:p-14 rounded-[3rem] bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
        >
          <div className="relative z-10 text-center md:text-left">
             <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Concerns about these terms?</h3>
             <p className="opacity-60 text-sm font-medium max-w-sm">Our compliance officer is here to help you understand your legal standing with Edvoy.</p>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <a href="mailto:legal@edvoy.com" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 group">
              Contact Legal Team <Mail size={16} />
            </a>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-center">Ref: TOS-2026-V1</p>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px]" />
        </motion.div>
      </section>
    </div>
  );
};

// --- Sub-component: TOSAccordion ---

const TOSAccordion = ({ title, children, index, active, onClick, icon }) => {
  return (
    <motion.div 
      variants={fadeUp}
      className={`group relative rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        active 
        ? 'border-blue-500/50 bg-blue-50/30 dark:bg-blue-500/5 shadow-2xl' 
        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <button 
        onClick={onClick}
        className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-6 text-left"
      >
        <div className="flex items-center gap-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-110' : 'bg-slate-100 dark:bg-slate-900 text-slate-400 group-hover:text-blue-500'
          }`}>
            {icon}
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1 block">Article 0{index + 1}</span>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">{title}</h3>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: active ? 180 : 0 }}
          className={`p-2 rounded-full transition-colors ${active ? 'bg-blue-600/20 text-blue-600' : 'text-slate-300'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-10 ml-0 md:ml-18 text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
               <div className="max-w-2xl text-sm md:text-base">
                 {children}
                 <div className="mt-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-30">End of Article</span>
                 </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TermsOfService;