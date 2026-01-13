import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, Briefcase
} from 'lucide-react';

const Waterloo = () => {
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
      icon: <BookOpen className="text-emerald-600" />,
      content: [
        { 
          label: "Undergraduate Programs", 
          detail: "Completion of High School with strong Grade 12 marks. STEM programs (CS/Eng) often require a 95%+ average for international competitiveness." 
        },
        { 
          label: "Mathematics & Contests", 
          detail: "Mandatory Grade 12 Calculus. While not strictly required, high scores on the Euclid or CSMC Math contests are vital for Math faculty admissions." 
        },
        { 
          label: "Graduate / Master’s Programs", 
          detail: "A 4-year Honours Bachelor's degree with a minimum 75%–80% average. Research tracks require a clear alignment with faculty lab interests." 
        }
      ]
    },
    {
      title: "Standardized Tests",
      icon: <Globe2 className="text-gray-600" />,
      content: [
        { 
          label: "English Proficiency", 
          detail: "IELTS 6.5+ (Writing/Speaking 6.5) or TOEFL iBT 90+ (Writing/Speaking 25). Duolingo scores of 120+ are accepted for most undergraduate faculties." 
        },
        { 
          label: "GRE / GMAT", 
          detail: "Generally not required for M.Eng or CS, but highly recommended for the School of Business and certain specialized Master’s programs." 
        },
        { 
          label: "Video Interview", 
          detail: "The Engineering and Accounting programs require a mandatory digital video interview (Kira Talent) as part of the holistic assessment." 
        }
      ]
    }
  ];

  const stats = [
    { icon: <Briefcase />, label: "Co-op Earnings", value: "$45k–$55k", color: "bg-emerald-500" },
    { icon: <TrendingUp />, label: "Employment Rate", value: "96%+", color: "bg-slate-800" },
    { icon: <Award />, label: "Innovation Rank", value: "#1 Canada", color: "bg-emerald-600" },
    { icon: <Users />, label: "Global Partners", value: "7,100+", color: "bg-slate-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-slate-400/10 dark:bg-slate-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION: Adjusted height to prevent line overlap --- */}
      <motion.div style={{ opacity, scale }} className="relative h-[85vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/waterloo.jpg" 
            alt="University of Waterloo" 
            className="w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-emerald-900/40 opacity-80" />
          
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0], x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(16, 185, 129, 0.3)", "0 0 40px rgba(16, 185, 129, 0.7)", "0 0 20px rgba(16, 185, 129, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-emerald-400" />
              Canada's Most Innovative University
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">University of Waterloo</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">Entrepreneurship & Experience-Driven Education</p>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-emerald-900 transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" /> 
            <span className="relative z-10">Back to Universities</span>
          </motion.button>
        </div>
      </motion.div>

      {/* --- STATS BAR --- */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 mb-12"
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
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl relative overflow-hidden group flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- CONTENT SECTION --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-gray-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
              >
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3">
                  <Landmark size={32} className="text-white" />
                </motion.div>
                
                <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                  Waterloo <span className="text-emerald-600 italic block">Silicon Valley North</span>
                </h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-emerald-500 fill-emerald-500" />
                  Ontario, Canada
                </p>
                
                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                  {[{ label: "OUAC Application", date: "September" }, { label: "Main Deadline", date: "Jan / Feb" }].map((deadline, idx) => (
                    <div key={idx} className="flex justify-between items-center group/deadline">
                      <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-emerald-600 transition-colors">
                        <Clock size={14} className="text-emerald-600" /> {deadline.label}
                      </span>
                      <span className="font-bold dark:text-white">{deadline.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative bg-emerald-950 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                <Lightbulb className="mb-4 text-emerald-400" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "Waterloo values high grades, but the Admission Information Form (AIF) is where you show your passion for building and problem-solving."
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">{section.icon}</div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((item, i) => (
                      <div key={i} className="group/item">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter flex items-center gap-2 group-hover/item:text-emerald-600">
                          <Zap size={10} /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-emerald-900 to-slate-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10">
                <FileText className="text-emerald-400" /> Application Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {[
                  "OUAC 105 (International) / 101 (Domestic)",
                  "Completion of the AIF (Admission Info Form)",
                  "Math/CS Contest Participation (Recommended)",
                  "Official High School/Uni Transcripts",
                  "English Proficiency Test Scores",
                  "Kira Talent Video Interview (Engineering)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer group">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span className="font-bold text-sm text-gray-300 group-hover:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl">
                  <Target className="text-emerald-700" size={28} />
                </div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">The Waterloo Advantage</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {[
                    "World's largest Co-op program (work & study)",
                    "Creator-owned IP policy for student startups",
                    "Elite network in Silicon Valley and Toronto Tech",
                    "Strong focus on experiential learning"
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span className="text-md font-bold text-gray-700 dark:text-slate-300">{rule}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 rounded-[2rem] text-white shadow-2xl">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90">Tuition & Co-op ROI</p>
                  <h4 className="text-xl font-black mb-2 flex items-center gap-2"><Briefcase size={24} /> Earn While You Learn</h4>
                  <p className="text-sm font-medium leading-relaxed">
                    While international tuition ranges from $45k–$63k CAD, Waterloo Co-op students earn an average of $12k–$20k CAD per 4-month work term, making it one of the highest ROI universities globally.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-emerald-500/30 overflow-hidden"
              >
                <motion.span 
                  className="absolute inset-0 bg-emerald-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} /> Plan Your Waterloo Path
                </span>
              </motion.button>
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-emerald-600" />
                CS and Engineering cycles close early — Apply by January
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Waterloo;