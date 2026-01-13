import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, Search
} from 'lucide-react';

const UBC = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

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
      icon: <BookOpen className="text-emerald-500" />, 
      content: [
        { label: "Undergraduate", detail: "High School graduation with a minimum competitive average (usually 85%+)." },
        { label: "Course Requirements", detail: "Strong performance in Grade 11/12 English and Math is mandatory." },
        { label: "Graduate Programs", detail: "Four-year Bachelor's degree with a B+ average in senior-level courses." }
      ]
    },
    {
      title: "English Proficiency",
      icon: <Globe2 className="text-teal-500" />,
      content: [
        { label: "IELTS Academic", detail: "6.5 overall (no band less than 6.0 required)." },
        { label: "TOEFL iBT", detail: "90+ (Reading: 22, Listening: 22, Writing: 21, Speaking: 21)." },
        { label: "PTE Academic", detail: "65+ overall (Minimum 60 in each section)." }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Acceptance Rate", value: "~50%", color: "bg-emerald-500" }, 
    { icon: <Search />, label: "Global Ranking", value: "#34", color: "bg-teal-500" },
    { icon: <TrendingUp />, label: "Intl. Students", value: "28%", color: "bg-lime-500" }, 
    { icon: <Award />, label: "Research Income", value: "$770M", color: "bg-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-teal-400/10 dark:bg-emerald-900/10 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION: Increased height to 85vh and changed flex alignment --- */}
      <motion.div style={{ opacity, scale }} className="relative h-[150vh] w-full overflow-hidden flex flex-col">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/UBC.jpg" 
            alt="University of British Columbia" 
            className="w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-emerald-900/30 to-slate-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/20 via-transparent to-black/20 opacity-70" />
          
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0], x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-2 h-2 bg-emerald-200 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>

        {/* Back Button Positioned Relative to Hero Container */}
        <div className="relative z-20 pt-32 px-6 lg:px-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-emerald-600 transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" /> 
            <span className="relative z-10">Back to Universities</span>
          </motion.button>
        </div>

        {/* Hero Content: Shifted up by using pt-12 and justify-start instead of justify-center */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-12 text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(16, 185, 129, 0.2)", "0 0 40px rgba(16, 185, 129, 0.4)", "0 0 20px rgba(16, 185, 129, 0.2)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-lime-300" />
              Tuum Est (It Is Yours)
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">UBC</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              A Global Hub for Research and Innovation
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Bar: Kept -mt-20 but because the hero is taller, it won't hit the text */}
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-emerald-50 dark:border-slate-800 shadow-xl relative overflow-hidden group">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-800 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div variants={itemVariants} className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-emerald-100 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent skew-x-12" />
                
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative">
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-2 leading-tight">UBC <span className="text-emerald-500 italic block">Vancouver</span></h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-emerald-400 fill-emerald-400" />
                  Top Research University • BC, Canada
                </p>
                
                <div className="space-y-4 pt-6 border-t border-emerald-50 dark:border-slate-800">
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-emerald-500 transition-colors">
                      <Clock size={14} className="text-emerald-500" /> Early Deadline
                    </span>
                    <span className="font-bold dark:text-white">Dec 01</span>
                  </div>
                  <div className="flex justify-between items-center group/deadline">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-emerald-500 transition-colors">
                      <Clock size={14} className="text-emerald-500" /> Final Deadline
                    </span>
                    <span className="font-bold dark:text-white">Jan 15</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-700 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                <Lightbulb className="mb-4 text-lime-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "UBC values the 'Personal Profile'—they want to see how you respond to challenges and what you contribute to the community."
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-emerald-50 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-2xl">{section.icon}</motion.div>
                    <h2 className="text-xl font-black dark:text-white text-slate-800">{section.title}</h2>
                  </div>
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="group/item">
                        <p className="text-[10px] font-black uppercase text-slate-300 tracking-tighter group-hover/item:text-emerald-500 transition-colors flex items-center gap-2">
                          <Zap size={10} className="opacity-0 group-hover/item:opacity-100" /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-emerald-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-emerald-800">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10"><FileText className="text-lime-300" /> Application Assets</h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["UBC Online Application", "Personal Profile Essays", "Interim/Final Transcripts", "English Test Scores", "Reference List (Grad only)", "Portfolio (Visual Arts/Arch)"].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all group">
                    <CheckCircle2 size={18} className="text-lime-300" />
                    <span className="font-bold text-sm text-emerald-50 group-hover:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-emerald-50 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl"><Target className="text-emerald-600" size={28} /></div>
                <h2 className="text-3xl font-black dark:text-white text-slate-800 tracking-tight">Evaluation Pillars</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {["Engagement & Leadership", "Intellectual Readiness", "Voice & Authenticity", "Academic Breadth"].map((rule, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:bg-teal-400 transition-colors" />
                      <span className="text-md font-bold text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 transition-colors">{rule}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden border border-emerald-400">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10 text-lime-200">Finances</p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2"><Award size={24} /> Scholarships</h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10 text-emerald-50">
                    Intl. tuition: $44k–$58k CAD/yr. Automatic consideration for OIS awards.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2"><Sparkles size={18} /> Apply for Counseling</span>
              </motion.button>
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-emerald-500" /> Applications open in September
              </motion.p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UBC;