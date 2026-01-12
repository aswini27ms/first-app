// components-country/australia/unsw-eligibility.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Globe2,
  FileText,
  Landmark,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Users,
  Sparkles,
  Star,
  Zap
} from 'lucide-react';

const UnswEligibility = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
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
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const sections = [
    {
      title: 'Academic Eligibility',
      icon: <BookOpen className="text-yellow-600" />,
      content: [
        {
          label: 'Undergraduate Programs',
          detail:
            'Completion of 12 years of formal schooling with strong academic performance, typically in the top 10–15% of your class.'
        },
        {
          label: 'Core Preparation',
          detail:
            'Good preparation in Mathematics, Sciences (especially Physics/Chemistry for STEM), and English / analytical writing; certain programs have mandatory subject prerequisites.'
        },
        {
          label: 'Graduate / Master’s Programs',
          detail:
            'Bachelor’s degree from a recognised university with strong academic alignment to the chosen program plus relevant projects, research, or work experience.'
        }
      ]
    },
    {
      title: 'English & Program Criteria',
      icon: <Globe2 className="text-yellow-600" />,
      content: [
        {
          label: 'English Proficiency',
          detail:
            'IELTS 6.5–7.0 overall (no band below 6.0) or TOEFL iBT 90+ or PTE Academic 64+ for most programs; English waivers may be possible for eligible prior education.'
        },
        {
          label: 'Program Expectations',
          detail:
            'Engineering, CS, Analytics, and other competitive programs may require higher English scores, strong coding/quant skills, and evidence of problem‑solving.'
        },
        {
          label: 'Prerequisite Subjects',
          detail:
            'Many technical degrees specify prerequisite subjects or prior coursework in mathematics, computing, or discipline‑specific foundations.'
        }
      ]
    }
  ];

  const stats = [
    { icon: <Users />, label: 'Group of Eight', value: 'Go8', color: 'bg-yellow-600' },
    { icon: <TrendingUp />, label: 'Avg Grad Salary', value: 'A$70k+', color: 'bg-green-500' },
    { icon: <Award />, label: 'Global Rank', value: 'Top 50', color: 'bg-amber-500' },
    { icon: <Globe2 />, label: 'International Students', value: '35%+', color: 'bg-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      {/* yellow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-yellow-600/10 dark:bg-yellow-600/5 rounded-full blur-3xl"
        />
      </div>

      {/* HERO with unsw.jpg and bg-yellow-600 tint */}
      <motion.div style={{ opacity, scale }} className="relative h-[70vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <img
            src="/assets/colleges/unsw.jpg"
            alt="UNSW Sydney"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-50 dark:to-slate-950"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/75 via-transparent to-yellow-600/40 opacity-80" />

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

        {/* hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(234,179,8,0.35)',
                  '0 0 40px rgba(234,179,8,0.7)',
                  '0 0 20px rgba(234,179,8,0.35)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-amber-300" />
              Go8 Tech & Innovation Powerhouse
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              UNSW Sydney
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">
              Engineering, technology, and business with strong industry alignment and innovation.
            </p>
          </motion.div>
        </div>

        {/* back button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-yellow-800 transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft
              size={20}
              className="relative z-10 group-hover:-translate-x-1 transition-transform"
            />
            <span className="relative z-10">Back to Universities</span>
          </motion.button>
        </div>

        {/* scroll indicator */}
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

      {/* stats bar */}
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
              transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl relative overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div
                className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform`}
              >
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* left column */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-gray-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group"
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />

                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-2xl border-2 border-white/20"
                  />
                  <Landmark size={32} className="text-white relative z-10" />
                </motion.div>

                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                  UNSW
                  <span className="text-yellow-600 dark:text-yellow-400 italic block">Sydney</span>
                </h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  Sydney • Go8 • Engineering & Tech leader
                </p>

                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                  {[
                    { label: 'Term 1 (Feb) UG', date: 'Apply Sep–Oct' },
                    { label: 'Term 2 / 3 UG', date: 'Apply Apr–May' }
                  ].map((deadline, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex justify-between items-center group/deadline"
                    >
                      <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-yellow-700 transition-colors">
                        <Clock size={14} className="text-yellow-600" /> {deadline.label}
                      </span>
                      <span className="font-bold dark:text-white">{deadline.date}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-yellow-700 via-yellow-600 to-amber-700 p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.35), transparent)'
                  }}
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-4 -bottom-4 opacity-10"
                >
                  <Target size={120} />
                </motion.div>

                <Lightbulb className="mb-4 text-amber-200" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "UNSW is built for students who love engineering, tech, and analytics and want to
                  turn ideas into real‑world products and impact."
                </p>
              </motion.div>
            </div>
          </div>

          {/* right column */}
          <div className="lg:col-span-2 space-y-8">
            {/* eligibility cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, rotateY: 2 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-amber-500/0 to-orange-500/0 group-hover:from-yellow-400/5 group-hover:via-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500" />

                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-gray-50 dark:bg-slate-800 rounded-2xl"
                    >
                      {section.icon}
                    </motion.div>
                    <h2 className="text-xl font-black dark:text-white">{section.title}</h2>
                  </div>

                  <div className="space-y-4 relative z-10">
                    {section.content.map((item, i) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="group/item">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter group-hover/item:text-yellow-700 transition-colors flex items-center gap-2">
                          <Zap
                            size={10}
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                          />
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-slate-300 leading-relaxed">
                          {item.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* checklist */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800"
            >
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }}
                />
              </div>

              <h2 className="text-3xl font-black mb-8 flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FileText className="text-yellow-400" />
                </motion.div>
                Application Checklist
              </h2>

              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {[
                  'Online application via UNSW Application Portal',
                  'Official academic transcripts',
                  'Statement of Purpose / Personal Statement (for postgraduate)',
                  'Letters of Recommendation (program dependent)',
                  'Resume / CV for selected master’s programs',
                  'Portfolio or research work (if applicable)'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-yellow-400/60 hover:bg-white/10 transition-all cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2
                        size={18}
                        className="text-yellow-400 group-hover:text-emerald-400 transition-colors"
                      />
                    </motion.div>
                    <span className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* rules + tuition */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-100 dark:bg-yellow-900/25 rounded-full blur-3xl"
              />

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-3xl"
                >
                  <Target className="text-yellow-700" size={28} />
                </motion.div>
                <h2 className="text-3xl font-black dark:text-white tracking-tight">
                  Admission Rules & Fit
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  {[
                    'Admissions are merit‑based and program‑specific.',
                    'Strong emphasis on academic consistency, rigor, and subject relevance.',
                    'Practical skills, industry readiness, innovation, and problem‑solving are highly valued.',
                    'Students must comply with Australian Student Visa (subclass 500) regulations and uphold academic integrity.'
                  ].map((rule, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        className="w-2 h-2 rounded-full bg-yellow-500 group-hover:bg-emerald-500 transition-colors"
                      />
                      <span className="text-md font-bold text-gray-700 dark:text-slate-300 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors">
                        {rule}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-8 rounded-[2rem] text-white shadow-2xl shadow-amber-500/30 relative overflow-hidden"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 rounded-full blur-2xl"
                  />

                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-90 relative z-10">
                    Tuition & Scholarships
                  </p>
                  <h4 className="text-xl font-black mb-2 relative z-10 flex items-center gap-2">
                    <Award size={24} />
                    A$45k–55k per year
                  </h4>
                  <p className="text-sm font-medium leading-relaxed relative z-10">
                    Typical international tuition bands for many UNSW degrees fall in the mid‑A$40k
                    to mid‑A$50k+ range, with higher fees for some specialised programs; merit
                    scholarships and funded research options exist but are competitive.[web:184][web:187]
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="pt-10 flex flex-col items-center gap-6"
            >
              <motion.button
                onClick={() => navigate('/enquiry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-yellow-500/40 overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-white rounded-full"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} />
                  Book Free Consultation
                </span>
              </motion.button>

              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
              >
                <Clock size={14} className="text-yellow-500" />
                Apply early to improve scholarship & visa timelines
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UnswEligibility;
