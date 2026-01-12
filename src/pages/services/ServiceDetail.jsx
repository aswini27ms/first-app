import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Users,
  Sparkles,
  Star,
  Zap,
  ArrowRight,
  Calendar,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Languages,
  Home,
  Search,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

const ServiceDetail = ({
  serviceId,
  title,
  description,
  icon: Icon,
  gradient,
  color,
  overview,
  processSteps,
  prerequisites,
  deliverables,
  timeline,
  supportTouchpoints,
  requiredDocuments,
  outcomes,
  nextActions
}) => {
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
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-20 right-20 w-96 h-96 bg-gradient-to-br ${gradient} opacity-10 dark:opacity-5 rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className={`absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br ${gradient} opacity-10 dark:opacity-5 rounded-full blur-3xl`}
        />
      </div>

      {/* Hero with parallax */}
      <motion.div style={{ opacity, scale }} className="relative h-[70vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-50 dark:to-slate-950"
          />

          {/* Floating particles */}
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

        {/* Hero content */}
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
                  '0 0 20px rgba(227,41,38,0.35)',
                  '0 0 40px rgba(227,41,38,0.7)',
                  '0 0 20px rgba(227,41,38,0.35)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full mb-6 font-bold"
            >
              <Sparkles size={16} className="text-amber-300" />
              Premium Service
            </motion.div>

            <div className="flex items-center justify-center gap-6 mb-6">
              <motion.div
                variants={floatVariants}
                animate="animate"
                className={`p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl`}
              >
                <Icon size={48} className="text-white" strokeWidth={2} />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Back button */}
        <div className="absolute top-32 left-6 lg:left-20 z-20">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#e32926] transition-all shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <ArrowLeft
              size={20}
              className="relative z-10 group-hover:-translate-x-1 transition-transform"
            />
            <span className="relative z-10">Back to Services</span>
          </motion.button>
        </div>

        {/* Scroll indicator */}
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

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto px-6 relative z-10 mt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column: Quick info sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Service Overview Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-[3rem] border border-gray-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '200%']
                  }}
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
                  className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl mb-6 flex items-center justify-center shadow-xl rotate-3 relative`}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-2xl border-2 border-white/20"
                  />
                  <Icon size={32} className="text-white relative z-10" />
                </motion.div>

                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                  {title}
                </h2>
                <p className="text-gray-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  Premium Service Experience
                </p>

                {/* Quick Stats */}
                <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800">
                  {timeline && (
                    <div className="flex justify-between items-center group/deadline">
                      <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-[#e32926] transition-colors">
                        <Clock size={14} className="text-[#e32926]" /> Timeline
                      </span>
                      <span className="font-bold dark:text-white text-sm">{timeline.duration}</span>
                    </div>
                  )}
                  {deliverables && (
                    <div className="flex justify-between items-center group/deadline">
                      <span className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2 group-hover/deadline:text-[#e32926] transition-colors">
                        <Award size={14} className="text-[#e32926]" /> Deliverables
                      </span>
                      <span className="font-bold dark:text-white text-sm">{deliverables.length} Items</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Support Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative bg-gradient-to-br ${gradient} p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group`}
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

                <Lightbulb className="mb-4 text-amber-300" size={32} />
                <p className="text-sm font-medium leading-relaxed italic relative z-10">
                  "Our dedicated support team is available throughout your journey to ensure seamless experience and successful outcomes."
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right column: Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Overview */}
            {overview && (
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradient} opacity-10 dark:opacity-5 rounded-full blur-3xl`}
                />

                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className={`p-4 bg-gradient-to-br ${gradient} rounded-3xl`}
                  >
                    <Target className="text-white" size={28} />
                  </motion.div>
                  <h2 className="text-3xl font-black dark:text-white tracking-tight">
                    Service Overview
                  </h2>
                </div>

                <div className="relative z-10">
                  <p className="text-lg font-semibold text-gray-700 dark:text-slate-300 leading-relaxed mb-6">
                    {overview}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Process Steps */}
            {processSteps && (
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 bg-gradient-to-br ${gradient} rounded-3xl`}
                  >
                    <BookOpen className="text-white" size={28} />
                  </motion.div>
                  <h2 className="text-3xl font-black dark:text-white tracking-tight">
                    Step-by-Step Process
                  </h2>
                </div>

                <div className="space-y-6">
                  {processSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-6 group"
                    >
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-[#e32926] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                        {step.duration && (
                          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-slate-500">
                            <Clock size={14} />
                            <span>{step.duration}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Prerequisites */}
            {prerequisites && prerequisites.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 p-10 rounded-[3rem]"
              >
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-amber-500 rounded-3xl"
                  >
                    <CheckCircle2 className="text-white" size={28} />
                  </motion.div>
                  <h2 className="text-3xl font-black dark:text-white tracking-tight">
                    Eligibility & Prerequisites
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {prerequisites.map((req, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-amber-100 dark:border-amber-800"
                    >
                      <CheckCircle2 size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span className="font-semibold text-gray-700 dark:text-slate-300">{req}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Required Documents */}
            {requiredDocuments && requiredDocuments.length > 0 && (
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
                    <FileText className="text-[#e32926]" />
                  </motion.div>
                  Required Documents & Inputs
                </h2>

                <div className="grid md:grid-cols-2 gap-4 relative z-10">
                  {requiredDocuments.map((doc, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:border-[#e32926]/60 hover:bg-white/10 transition-all cursor-pointer group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle2
                          size={18}
                          className="text-[#e32926] group-hover:text-emerald-400 transition-colors"
                        />
                      </motion.div>
                      <span className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">
                        {doc}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Deliverables */}
            {deliverables && deliverables.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 bg-gradient-to-br ${gradient} rounded-3xl`}
                  >
                    <Award className="text-white" size={28} />
                  </motion.div>
                  <h2 className="text-3xl font-black dark:text-white tracking-tight">
                    What You'll Receive
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {deliverables.map((deliverable, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-xl bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-100 transition-opacity`}>
                          <Star size={16} className="text-white" />
                        </div>
                        <h3 className="font-black text-gray-900 dark:text-white group-hover:text-[#e32926] transition-colors">
                          {deliverable.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400">
                        {deliverable.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Timeline */}
            {timeline && (
              <motion.div
                variants={itemVariants}
                className={`bg-gradient-to-br ${gradient} p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden`}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-white/20 rounded-full blur-2xl"
                />

                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <Calendar className="text-white" size={32} />
                  <h2 className="text-3xl font-black tracking-tight">
                    Timeline & Milestones
                  </h2>
                </div>

                <div className="space-y-6 relative z-10">
                  {timeline.milestones?.map((milestone, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black border-2 border-white/30">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-black mb-2">{milestone.title}</h3>
                        <p className="text-white/90 leading-relaxed">{milestone.description}</p>
                        {milestone.date && (
                          <p className="text-sm text-white/70 mt-2">{milestone.date}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-lg font-bold">
                      Total Duration: <span className="text-amber-300">{timeline.duration}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Outcomes */}
            {outcomes && outcomes.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-green-500 rounded-3xl"
                  >
                    <TrendingUp className="text-white" size={28} />
                  </motion.div>
                  <h2 className="text-3xl font-black dark:text-white tracking-tight">
                    Expected Outcomes
                  </h2>
                </div>

                <div className="space-y-4">
                  {outcomes.map((outcome, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        className="w-2 h-2 rounded-full bg-green-500 group-hover:bg-emerald-500 transition-colors"
                      />
                      <span className="text-md font-bold text-gray-700 dark:text-slate-300 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                        {outcome}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Support Touchpoints */}
            {supportTouchpoints && supportTouchpoints.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-blue-500 rounded-3xl"
                  >
                    <MessageCircle className="text-white" size={28} />
                  </motion.div>
                  <h2 className="text-3xl font-black dark:text-white tracking-tight">
                    Support & Contact
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {supportTouchpoints.map((touchpoint, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {touchpoint.icon === 'phone' && <Phone size={20} className="text-[#e32926]" />}
                        {touchpoint.icon === 'email' && <Mail size={20} className="text-[#e32926]" />}
                        {touchpoint.icon === 'message' && <MessageCircle size={20} className="text-[#e32926]" />}
                        <h3 className="font-black text-gray-900 dark:text-white">
                          {touchpoint.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
                        {touchpoint.description}
                      </p>
                      {touchpoint.contact && (
                        <p className="text-sm font-bold text-[#e32926]">{touchpoint.contact}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Next Actions / CTA */}
            <motion.div
              variants={itemVariants}
              className="pt-10 flex flex-col items-center gap-6"
            >
              {nextActions && nextActions.length > 0 ? (
                <>
                  <div className="w-full space-y-4 mb-8">
                    {nextActions.map((action, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => navigate(action.path || '/enquiry')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full group relative px-12 py-6 bg-gradient-to-r ${action.gradient || gradient} text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl overflow-hidden`}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.span
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 border-2 border-white rounded-full"
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {action.icon && React.createElement(action.icon, { size: 18 })}
                          {action.label}
                          <ArrowRight size={18} />
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </>
              ) : (
                <motion.button
                  onClick={() => navigate('/enquiry')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-gradient-to-r from-[#e32926] via-red-600 to-[#e32926] text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl shadow-[#e32926]/40 overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-400 to-red-500"
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
              )}

              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
              >
                <Clock size={14} className="text-[#e32926]" />
                Get started today and transform your future
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
