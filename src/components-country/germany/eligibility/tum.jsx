import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap
} from 'lucide-react';

const tum = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Track mouse for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const sections = [
    {
      title: "Academic Eligibility",
      icon: <BookOpen className="text-blue-700" />,
      content: [
        { 
          label: "Aptitude Assessment (EV)", 
          detail: "TUM uses a unique two-stage selection process. Stage 1: Point-based evaluation of GPA and subjects. Stage 2: Interview or written entrance exam." 
        },
        { 
          label: "Subject Specificity", 
          detail: "Extremely strict module matching. Your Bachelor's must cover specific fundamental credits (especially in Math/Theory) required by the TUM department." 
        },
        { 
          label: "VPD & APS", 
          detail: "International applicants must obtain a VPD from Uni-Assist. APS certificate is mandatory for students from India, China, and Vietnam." 
        }
      ]
    },
    {
      title: "Language & Testing",
      icon: <Globe2 className="text-cyan-600" />,
      content: [
        { 
          label: "German Proficiency", 
          detail: "Required for Bachelor's (DSH-2 or TestDaF 4x4). English Master's students must provide basic German (A1) proof by the end of year one." 
        },
        { 
          label: "English Proficiency", 
          detail: "TOEFL iBT (min 88) or IELTS (min 6.5). Some competitive programs like Informatics or Data Science may require higher scores." 
        },
        { 
          label: "GRE / GATE", 
          detail: "Mandatory for specific Master's applicants (e.g., Computer Science) who obtained their degree in a non-EU/EEA country." 
        }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Innovation Hub", value: "52k+ Students", color: "bg-blue-800" },
    { icon: <TrendingUp />, label: "Fees (Non-EU)", value: "€2k-6k / Sem", color: "bg-blue-600" },
    { icon: <Award />, label: "Global Rank", value: "#28 (QS)", color: "bg-amber-600" },
    { icon: <Zap />, label: "Startups p.a.", value: "80+", color: "bg-cyan-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-700/10 dark:bg-blue-700/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION WITH PARALLAX IMAGE --- */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative h-[70vh] w-full overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/tmu.jpg" 
            alt="Technical University of Munich" 
            className="w-full h-full object-cover"
          />
          {/* Animated Overlay Gradients */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-cyan-900/30 opacity-70" />
          
          {/* Animated Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content with Glow Effect */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            {/* Glowing Badge */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0, 101, 189, 0.3)",
                  "0 0 40px rgba(0, 101, 189, 0.6)",
                  "0 0 20px rgba(0, 101, 189, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-amber-400" />
              The Entrepreneurial University
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              TUM Munich
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">
              Leading the Future of Science, Technology, and Innovation
            </p>
          </motion.div>
        </div>

        {/* Floating Back Button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" /> 
            <span className="relative z-10">Back to Universities</span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl relative overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN: BRANDING & STICKY STATS --- */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-gray-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group"
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                
                <motion.div 
                  variants={floatVariants}
                  animate="animate"
                  className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-2xl border-2 border-white/20"
                  />
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                  TUM <span className="text-blue-700 italic block">München</span>
                </h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  Technical University • Munich, Germany
                </p>
                
                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                  {[
                    { label: "Winter Intake", date: "May 31 (Master)" },
                    { label: "Summer Intake", date: "Nov 30 (Master)" }
                  ].map((deadline, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 5 }}
                      className="flex justify-between items-center group/deadline"
                    >
                      <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-blue-700 transition-colors">
                        <Clock size={14} className="text-blue-700" /> {deadline.label}
                      </span>
                      <span className="font-bold dark:text-white">{deadline.date}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-30"
                  style={{ background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)" }}
                />
                <Lightbulb className="mb-4 text-amber-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "TUM is highly competitive. Ensure your Curriculum Analysis is thorough—missing even one required theoretical credit can lead to an automatic rejection."
                </p>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: DETAILS --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -8, rotateY: 2 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      className="p-3 bg-gray-50 dark:bg-slate-800 rounded-2xl"
                    >
                      {section.icon}
                    </motion.div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="group/item">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter group-hover/item:text-blue-700 transition-colors flex items-center gap-2">
                          <Zap size={10} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800"
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "50px 50px"
                }} />
              </div>
              
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10">
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <FileText className="text-blue-500" />
                </motion.div>
                Required Documentation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {[
                  "Preliminary Review Documentation (VPD) via Uni-Assist",
                  "Detailed Analysis of Curriculum (Module Catalog)",
                  "APS Certificate (for India, China, Vietnam)",
                  "Motivation Letter (Standard for Master's EV)",
                  "GRE / GATE Scores (Specific Non-EU Master's)",
                  "Proof of Language Proficiency (German/English)"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all cursor-pointer group"
                  >
                    <CheckCircle2 size={18} className="text-blue-500 group-hover:text-cyan-400 transition-colors" />
                    <span className="font-bold text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"
              />
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <motion.div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-3xl">
                  <Target className="text-blue-700" size={28} />
                </motion.div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">Tuition & Costs (2026)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {[
                    "Tuition for Non-EU/EEA international students",
                    "Bachelor's: €2,000 to €3,000 per semester",
                    "Master's: €4,000 to €6,000 per semester",
                    "Semester Fee: approx. €150 (Social fee + Ticket)"
                  ].map((rule, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-700 group-hover:bg-cyan-500 transition-colors" />
                      <span className="text-md font-bold text-gray-700 dark:text-slate-300 group-hover:text-blue-700 transition-colors">{rule}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-8 rounded-[2rem] text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden"
                >
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10">Key Note</p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2">
                    <Award size={24} />
                    Merit-Based Waivers
                  </h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10">
                    While TUM has introduced fees, there are scholarship programs and partial waivers available for students who demonstrate high merit or financial hardship.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-blue-500/30 overflow-hidden"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-white rounded-full"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} />
                  Book TUM Consultation
                </span>
              </motion.button>
              
              <motion.p 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
              >
                <Clock size={14} className="text-blue-700" />
                VPD Processing takes 4-6 weeks—Apply Early
              </motion.p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default tum;