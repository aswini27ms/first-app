import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, Settings, Car
} from 'lucide-react';

const Stuttgart = () => {
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
      icon: <BookOpen className="text-yellow-700" />,
      content: [
        { label: "Undergraduate", detail: "University Entrance Qualification (HZB); Entrance exams or 'Selection Interviews' for competitive tracks." },
        { label: "STEM Focus", detail: "High performance in advanced Mathematics and Physics is a prerequisite for Engineering." },
        { label: "Graduate Programs", detail: "Relevant Bachelor's degree; specific minimum ECTS in core subjects required." }
      ]
    },
    {
      title: "Language & Entry",
      icon: <Globe2 className="text-amber-600" />,
      content: [
        { label: "German Proficiency", detail: "TestDaF (level 4 in all parts) or DSH-2 (Required for most Bachelor programs)." },
        { label: "English Masters", detail: "IELTS 7.0 or TOEFL 95+ (Required for WASTE, INFOTECH, and GEOENGINEERING)." },
        { label: "Self-Assessment", detail: "Mandatory 'Stuttgarter Self-Assessment' test for many technical programs." }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Students", value: "24k+", color: "bg-yellow-600" },
    { icon: <TrendingUp />, label: "Research Budget", value: "€250m", color: "bg-amber-500" },
    { icon: <Award />, label: "TU9 Member", value: "Top Tier", color: "bg-slate-900" },
    { icon: <Car />, label: "Industry Rank", value: "#1", color: "bg-yellow-700" }
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 80, 0],
            y: [0, -120, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION --- */}
      {/* Added pt-24 to create space for your actual Navbar */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative h-[85vh] w-full overflow-hidden flex flex-col pt-24"
      >
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/assets/colleges/stuttgart.jpg" 
            alt="University of Stuttgart Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-stone-50 dark:to-slate-950" />
        </motion.div>

        {/* ALIGNED HEADER ELEMENTS (BACK BUTTON & BADGE) */}
        <div className="relative z-20 w-full px-6 lg:px-20 flex flex-row justify-between items-center">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/30 text-yellow-500 px-6 py-3 rounded-full font-bold transition-all shadow-2xl"
          >
            <ArrowLeft size={20} /> 
            <span>Back to Universities</span>
          </motion.button>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="hidden md:inline-flex items-center gap-2 bg-black/20 backdrop-blur-md border border-yellow-500/30 text-yellow-400 px-6 py-3 rounded-full font-bold"
          >
            <Settings size={16} className="text-yellow-400" />
            Leading Research in Automotive & Aerospace
          </motion.div>
        </div>

        {/* CENTERED CONTENT AREA (Added mt-12 for more vertical breathing room) */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 mt-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-9xl font-black text-white mb-4 tracking-tight">
              Uni <span className="text-yellow-500">Stuttgart</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
              Where Knowledge Meets Engineering Excellence
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Bar */}
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
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-yellow-100 dark:border-yellow-900/20 shadow-xl relative overflow-hidden group"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</p>
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
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div 
                variants={itemVariants}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-yellow-100 dark:border-yellow-900/20 shadow-2xl relative overflow-hidden"
              >
                <motion.div 
                  variants={floatVariants}
                  animate="animate"
                  className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative"
                >
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                  Uni <span className="text-yellow-600 italic block">Stuttgart</span>
                </h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  Baden-Württemberg • High-Tech Hub
                </p>
                
                <div className="space-y-4 pt-6 border-t border-yellow-50 dark:border-yellow-900/10">
                  {[
                    { label: "Winter Intake", date: "July 15" },
                    { label: "Summer Intake", date: "Jan 15" }
                  ].map((deadline, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                        <Clock size={14} className="text-yellow-600" /> {deadline.label}
                      </span>
                      <span className="font-bold dark:text-white">{deadline.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-yellow-50 dark:border-yellow-900/10 shadow-sm relative overflow-hidden group"
                >
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl">{section.icon}</div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        <p className="text-[10px] font-black uppercase text-yellow-600 tracking-tighter flex items-center gap-2">
                          <Zap size={10} className="text-amber-500" />
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-950 to-yellow-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-yellow-500/20"
            >
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10 text-yellow-500">
                <FileText className="text-yellow-500" />
                Enrollment Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["Portal Account", "Pre-selection Test", "Certified HZB", "Health Insurance", "Tuition Payment", "Language Certs"].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                  >
                    <CheckCircle2 size={18} className="text-yellow-500" />
                    <span className="font-bold text-sm text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-yellow-600 to-amber-500 text-black rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-yellow-500/30"
              >
                Start Stuttgart Application
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Stuttgart;