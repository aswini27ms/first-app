import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap, Cpu
} from 'lucide-react';

const TuBerlin = () => {
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
      icon: <BookOpen className="text-emerald-700" />,
      content: [
        { label: "Undergraduate", detail: "University Entrance Qualification (Abitur or equivalent HZB); Vorprüfungsdokumentation (VPD) via uni-assist." },
        { label: "GPA (NC)", detail: "Many programs have 'Numerus Clausus' (NC); high grades in STEM subjects are vital." },
        { label: "Graduate Programs", detail: "Consecutive Bachelor's degree in a related field with at least 180 ECTS credits." }
      ]
    },
    {
      title: "Language & Tests",
      icon: <Globe2 className="text-teal-600" />,
      content: [
        { label: "German Proficiency", detail: "DSH-2, TestDaF (4x4), or telc C1 Hochschule (for German-taught tracks)." },
        { label: "English Tracks", detail: "IELTS 6.5+ or TOEFL 87+ (Required for specific Masters like Global Production Engineering)." },
        { label: "GRE / Gate", detail: "Not typically required, but recommended for specific International Master programs." }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Students", value: "35k+", color: "bg-emerald-600" },
    { icon: <TrendingUp />, label: "Avg Starting Salary", value: "€65k", color: "bg-teal-500" },
    { icon: <Award />, label: "Nobel Laureates", value: "10", color: "bg-green-600" },
    { icon: <Globe2 />, label: "International", value: "27%", color: "bg-slate-700" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      
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
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative h-[70vh] w-full overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img 
            src="/assets/colleges/tu-berlin.jpg" 
            alt="TU Berlin Campus" 
            className="w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 via-transparent to-teal-900/30 opacity-70" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                boxShadow: ["0 0 20px rgba(16, 185, 129, 0.3)", "0 0 40px rgba(16, 185, 129, 0.6)", "0 0 20px rgba(16, 185, 129, 0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Cpu size={16} className="text-emerald-400" />
              Leading Technical University in Germany
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
              TU Berlin
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">
              The Heart of Innovation in Europe
            </p>
          </motion.div>
        </div>

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
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden group"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
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
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
              >
                <motion.div 
                  variants={floatVariants}
                  animate="animate"
                  className="w-16 h-16 bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative"
                >
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                
                <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                  TU <span className="text-emerald-800 italic block">Berlin</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-teal-500 fill-teal-500" />
                  TU9 Excellence Network • Berlin, Germany
                </p>
                
                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {[
                    { label: "Winter Intake", date: "July 15" },
                    { label: "Summer Intake", date: "Jan 15" }
                  ].map((deadline, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                        <Clock size={14} className="text-emerald-600" /> {deadline.label}
                      </span>
                      <span className="font-bold dark:text-white">{deadline.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group"
              >
                <Lightbulb className="mb-4 text-emerald-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "At TU Berlin, we don't just teach technology; we teach how to use it for the benefit of society."
                </p>
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
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group"
                >
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">{section.icon}</div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <div key={i} className="group/item">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter flex items-center gap-2">
                          <Zap size={10} className="text-emerald-600" />
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800"
            >
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10">
                <FileText className="text-emerald-500" />
                Enrollment Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {["Uni-Assist Account / Portalis", "VPD (Preliminary Review)", "Certified Degree Certificates", "Proof of Language Proficiency", "Health Insurance Verification", "Exmatriculation Certificate"].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 group"
                  >
                    <CheckCircle2 size={18} className="text-emerald-500 group-hover:text-teal-400 transition-colors" />
                    <span className="font-bold text-sm text-slate-300 group-hover:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl">
                  <Target className="text-emerald-600" size={28} />
                </div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">Technical Edge</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {["Interdisciplinary Focus", "Research-Oriented Thesis", "Industry Partnerships", "Scientific Rigor"].map((rule, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-teal-500 transition-colors" />
                      <span className="text-md font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 transition-colors">{rule}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-teal-500 to-emerald-600 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden"
                >
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10">Tuition Policy</p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2">
                    <Award size={24} />
                    Tuition-Free Education
                  </h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10">
                    As a public university, TU Berlin charges no tuition fees. Students only pay a semester contribution (~€300) which includes a Berlin transit pass.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-emerald-500/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} />
                  Start Berlin Application
                </span>
              </motion.button>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-emerald-500" />
                Apply via Uni-Assist for Winter 2026
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TuBerlin;