import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, MapPin, GraduationCap
} from 'lucide-react';

const Toronto = () => {
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
      icon: <BookOpen className="text-blue-700" />,
      content: [
        { label: "Undergraduate", detail: "Senior Secondary School Diploma; high averages in prerequisite subjects (85%+)." },
        { label: "Program Prerequisites", detail: "Specific courses in Calculus, English, or Science depending on the faculty." },
        { label: "Graduate Programs", detail: "Mid-B average (75%) in the final year of a relevant 4-year Bachelor's degree." }
      ]
    },
    {
      title: "English Proficiency",
      icon: <Globe2 className="text-cyan-600" />,
      content: [
        { label: "IELTS / TOEFL", detail: "6.5+ (no band < 6.0) / 100+ (Required for non-English curriculums)" },
        { label: "Duolingo (DET)", detail: "120+ (Score varies by faculty; check specific requirements)." },
        { label: "Alternative", detail: "CAEL or COPE scores are also widely accepted for Canadian entry." }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Total Students", value: "95k+", color: "bg-blue-900" },
    { icon: <TrendingUp />, label: "Global Rank", value: "#21", color: "bg-blue-700" },
    { icon: <Award />, label: "Research Citations", value: "#1", color: "bg-slate-800" },
    { icon: <Globe2 />, label: "International", value: "30%", color: "bg-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500 pt-12 pb-20 overflow-hidden">
      
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
          className="absolute top-20 right-20 w-96 h-96 bg-blue-900/10 dark:bg-blue-900/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-600/10 dark:bg-cyan-600/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION --- */}
      {/* Changed height to h-screen to allow enough vertical space */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative h-[95vh] w-full overflow-hidden flex flex-col"
      >
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/assets/colleges/toronto1.jpg" 
            alt="University of Toronto" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-gray-50 dark:to-slate-950" />
        </motion.div>

        <div className="relative z-20 w-full px-6 lg:px-20 py-8 flex flex-row justify-between items-center">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all shadow-2xl"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span>Back to Universities</span>
          </motion.button>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl"
          >
            <Sparkles size={16} className="text-yellow-400" />
            Canada's Global Research Powerhouse
          </motion.div>
        </div>

        {/* HERO CONTENT: Shifted text upwards using pt-32 and justify-start */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-32 text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight leading-tight">
              University of <span className="text-blue-400">Toronto</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto italic">
              Velut Arbor Aevo — May it grow as a tree through the ages
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Bar: Adjusted -mt-12 to prevent clipping with the text above */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 -mt-12 relative z-30 mb-16"
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
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl group"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tighter">{stat.value}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Page Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div 
                variants={itemVariants}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-gray-200 dark:border-slate-800 shadow-2xl"
              >
                <motion.div 
                  variants={floatVariants}
                  animate="animate"
                  className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3"
                >
                  <Landmark size={32} className="text-white" />
                </motion.div>
                
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                  Uni <span className="text-blue-900 italic block">Toronto</span>
                </h2>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-blue-600 fill-blue-600" />
                  U15 Group Member • Toronto, ON
                </p>
                
                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                  {[
                    { label: "Intl. Application", date: "Jan 15" },
                    { label: "Document Deadline", date: "Feb 01" }
                  ].map((deadline, idx) => (
                    <div key={idx} className="flex justify-between items-center group">
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                        <Clock size={14} className="text-blue-700" /> {deadline.label}
                      </span>
                      <span className="font-bold dark:text-white">{deadline.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl"
              >
                <Lightbulb className="mb-4 text-yellow-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic opacity-90">
                  "University of Toronto looks for students who demonstrate academic grit and a desire to contribute to the global community."
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-2xl">{section.icon}</div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((item, i) => (
                      <div key={i} className="group/item">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter group-hover/item:text-blue-700 flex items-center gap-2 mb-1">
                          <Zap size={10} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
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
              className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-10 rounded-[3rem] shadow-2xl border border-slate-800"
            >
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                <FileText className="text-blue-400" />
                Application Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {["OUAC (105 Portal)", "Self-Reported Grades", "Study Permit (Post-Admit)", "Personal Profiles (Rotman/Eng)", "Supplementary Essays", "ELP Score Reports"].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 group"
                  >
                    <CheckCircle2 size={18} className="text-blue-400" />
                    <span className="font-bold text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-3xl">
                  <Target className="text-blue-900" size={28} />
                </div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">Three Campus System</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {[
                    { name: "St. George", icon: <Landmark size={14} /> },
                    { name: "Mississauga (UTM)", icon: <MapPin size={14} /> },
                    { name: "Scarborough (UTSC)", icon: <GraduationCap size={14} /> },
                    { name: "Co-op Programs (UTSC)", icon: <Zap size={14} /> }
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="text-blue-900 group-hover:scale-125 transition-transform">{rule.icon}</div>
                      <span className="text-md font-bold text-gray-700 dark:text-slate-300 group-hover:text-blue-900 transition-colors">{rule.name}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-[2rem] text-white shadow-2xl relative"
                >
                  <Award className="absolute top-4 right-4 opacity-20" size={64} />
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90">Scholarships</p>
                  <h4 className="text-xl font-black mb-2 flex items-center gap-2">
                    Lester B. Pearson
                  </h4>
                  <p className="text-sm font-medium leading-relaxed">
                    U of T's most prestigious international award, covering tuition, books, and residence for 4 years.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CALL TO ACTION */}
            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-blue-500/30"
              >
                Start My U of T Journey
              </motion.button>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                <Clock size={14} className="text-blue-500" />
                Fall 2026 Applications Opening Soon
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Toronto;