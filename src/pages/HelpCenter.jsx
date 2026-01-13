import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Search, MessageCircle, Plane, GraduationCap, CreditCard,
  ChevronDown, LifeBuoy
} from 'lucide-react';

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const categories = [
    { name: 'Counselling', icon: <MessageCircle size={20} />, color: 'bg-violet-500' },
    { name: 'Applications', icon: <GraduationCap size={20} />, color: 'bg-emerald-500' },
    { name: 'Visa Support', icon: <Plane size={20} />, color: 'bg-blue-500' },
    { name: 'Payments', icon: <CreditCard size={20} />, color: 'bg-amber-500' }
  ];

  const faqData = [
    {
      category: 'Counselling',
      question: 'How do I book a free counselling session?',
      answer:
        "You can book a session directly through your dashboard. Simply click 'Talk to an Advisor' and select a time slot that works for you."
    },
    {
      category: 'Applications',
      question: 'Can I apply to multiple universities at once?',
      answer:
        'Yes, Edvoy allows you to manage multiple applications simultaneously. Our platform tracks each one individually.'
    },
    {
      category: 'Visa Support',
      question: 'What documents do I need for my Student Visa?',
      answer:
        'Required documents typically include your CAS letter, financial evidence, and passport. Our experts provide a detailed checklist.'
    }
  ];

  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500 font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-violet-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={container} className="space-y-8">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-black uppercase tracking-widest text-violet-600"
            >
              <LifeBuoy size={12} /> Support Center
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
            >
              How can we <br /> <span className="text-violet-500">help you?</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="relative max-w-2xl mx-auto mt-12">
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-6 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border-none outline-none text-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grid Categories */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center"
            >
              <div
                className={`w-12 h-12 ${cat.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                {cat.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-widest">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <HelpAccordion
              key={idx}
              active={expandedIndex === idx}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              title={faq.question}
              category={faq.category}
            >
              {faq.answer}
            </HelpAccordion>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- Sub-component: HelpAccordion ---
const HelpAccordion = ({ title, children, active, onClick, category }) => (
  <div
    className={`rounded-[2rem] border transition-all duration-500 ${
      active
        ? 'border-violet-500/50 bg-violet-50/30 dark:bg-violet-500/5'
        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950'
    }`}
  >
    <button
      onClick={onClick}
      className="w-full p-8 flex items-center justify-between text-left"
    >
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-violet-500 mb-1 block">
          {category}
        </span>
        <h3 className="text-lg font-black uppercase tracking-tight">{title}</h3>
      </div>
      <motion.div animate={{ rotate: active ? 180 : 0 }}>
        <ChevronDown size={20} className={active ? 'text-violet-500' : 'text-slate-300'} />
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
          <div className="px-8 pb-8 text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-6">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default HelpCenter;
