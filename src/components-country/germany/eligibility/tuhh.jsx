import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, BookOpen, 
  Globe2, FileText, Landmark, Clock, Target, Lightbulb, 
  TrendingUp, Award, Users, Sparkles, Star, Zap
} from 'lucide-react';

const TUHH = () => {
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

  // Animation Variants (Exact matches to LMU code)
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
      icon: <BookOpen className="text-violet-700" />,
      content: [
        { 
          label: "Master’s Research Focus", 
          detail: "A recognized Bachelor’s degree. Heidelberg is research-heavy; your previous thesis and relevant subject credits are scrutinized for 'Academic Fit'." 
        },
        { 
          label: "The 'NC' Standard", 
          detail: "Many programs have a 'Numerus Clausus' (restricted admission). For subjects like Medicine or Law, an equivalent GPA of 1.0 - 1.2 is often necessary." 
        },
        { 
          label: "Aptitude Assessment", 
          detail: "Specific faculties require entrance exams (Aufnahmeprüfung) or interviews to evaluate deep theoretical understanding of the discipline." 
        }
      ]
    },
    {
      title: "Language & Testing",
      icon: <Globe2 className="text-indigo-600" />,
      content: [
        { 
          label: "German Proficiency", 
          detail: "Required for most degrees: DSH-2, TestDaF (Level 4 in all sections), or the Goethe C2 certificate. Late submissions are rarely accepted." 
        },
        { 
          label: "English Standards", 
          detail: "For International Master's (e.g., Physics, Economics): IELTS 7.0+ or TOEFL 100+. Some programs require both German and English proof." 
        },
        { 
          label: "GRE / TestAS", 
          detail: "Strongly recommended for international applicants to the Faculty of Economics or Social Sciences to boost the competitive ranking." 
        }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: "Student Body", value: "≈30,000", color: "bg-violet-800" },
    { icon: <TrendingUp />, label: "Non-EU Tuition", value: "€1,500/Sem", color: "bg-indigo-600" },
    { icon: <Award />, label: "Nobel Laureates", value: "56+", color: "bg-violet-950" },
    { icon: <Globe2 />, label: "Founded", value: "1386", color: "bg-slate-800" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-violet-800/10 dark:bg-violet-800/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* --- HERO SECTION WITH PARALLAX --- */}
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
            src="/assets/colleges/heidelberg.jpg" 
            alt="Heidelberg University" 
            className="w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/50 via-transparent to-indigo-900/30 opacity-70" />
          
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0], x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="relative">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(139, 92, 246, 0.3)", "0 0 40px rgba(139, 92, 246, 0.6)", "0 0 20px rgba(139, 92, 246, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-violet-300" />
              Germany's Oldest University
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">Heidelberg Uni</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">Semper Apertus — Always Open to the Spirit of Learning</p>
          </motion.div>
        </div>

        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-violet-900 transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform" /> 
            <span className="relative z-10">Back to Universities</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ scale: 0, rotate: -10 }} whileInView={{ scale: 1, rotate: 0 }} whileHover={{ scale: 1.05, y: -5 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden group">
              <motion.div className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}>{stat.icon}</div>
              <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <motion.div variants={floatVariants} animate="animate" className="w-16 h-16 bg-gradient-to-br from-violet-900 to-violet-700 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-2xl border-2 border-white/20" />
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight">Heidelberg <span className="text-violet-900 italic block">University</span></h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-violet-400 fill-violet-400" />
                  Ruprecht-Karls • Baden-Württemberg
                </p>
                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {[{ label: "Winter Deadline", date: "July 15" }, { label: "Summer Deadline", date: "January 15" }].map((deadline, idx) => (
                    <motion.div key={idx} whileHover={{ x: 5 }} className="flex justify-between items-center group/deadline">
                      <span className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-violet-700 transition-colors">
                        <Clock size={14} className="text-violet-700" /> {deadline.label}
                      </span>
                      <span className="font-bold dark:text-white">{deadline.date}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-950 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-30" style={{ background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)" }} />
                <Lightbulb className="mb-4 text-violet-200" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "Heidelberg values academic lineage. Ensure your statement of purpose connects your research goals to the university's historical excellence in the sciences and humanities."
                </p>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8, rotateY: 2 }} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-indigo-500/0 group-hover:from-violet-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">{section.icon}</motion.div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="group/item">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter group-hover/item:text-violet-700 transition-colors flex items-center gap-2">
                          <Zap size={10} className="opacity-0 group-hover/item:opacity-100 transition-opacity" /> {item.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
              </div>
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10">
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}><FileText className="text-violet-400" /></motion.div>
                Application Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {[
                  "Official certified School Leaving Certificate",
                  "Academic Transcript of Records (Translated)",
                  "DSH-2 or TestDaF-4 Language Certificate",
                  "Detailed Curriculum Vitae (CV)",
                  "APS Certificate (for specific regions)",
                  "Health Insurance coverage certificate"
                ].map((item, i) => (
                  <motion.div key={i} whileInView={{ opacity: 1, x: 0 }} whileHover={{ x: 10, scale: 1.02 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all cursor-pointer group">
                    <CheckCircle2 size={18} className="text-violet-400 group-hover:text-indigo-300 transition-colors" />
                    <span className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -top-10 -right-10 w-40 h-40 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <motion.div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-3xl"><Target className="text-violet-700" size={28} /></motion.div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">Financial Overview</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {[
                    "Tuition: €1,500/semester (International)",
                    "Social Contribution Fee: approx. €172",
                    "Cost of Living (Heidelberg): €950 - €1,100/mo",
                    "Scholarship opportunities: DAAD & Deutschlandstipendium"
                  ].map((rule, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-violet-700 group-hover:bg-indigo-500 transition-colors" />
                      <span className="text-md font-bold text-slate-700 dark:text-slate-300 group-hover:text-violet-700 transition-colors">{rule}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05, rotate: 1 }} className="bg-gradient-to-br from-violet-800 via-violet-900 to-slate-900 p-8 rounded-[2rem] text-white shadow-2xl shadow-violet-500/30 relative overflow-hidden">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10">Elite Status</p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2"><Award size={24} /> Excellence Hub</h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10">Heidelberg is a permanent member of the 'German Universities Excellence Initiative', receiving dedicated federal funding for high-end research projects.</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col items-center gap-6">
              <motion.button 
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-violet-950 via-violet-800 to-violet-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-violet-500/30 overflow-hidden"
              >
                <motion.span className="absolute inset-0 bg-gradient-to-r from-violet-700 via-violet-600 to-violet-700" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} />
                <motion.span animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-white rounded-full" />
                <span className="relative z-10 flex items-center gap-2"><Sparkles size={18} /> Apply to Heidelberg</span>
              </motion.button>
              <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-violet-700" /> Shaping Minds since 1386
              </motion.p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TUHH;