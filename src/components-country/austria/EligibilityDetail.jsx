import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Info, BookOpen, Globe, Award, TrendingUp, Users, Lightbulb, Target, Clock, FileText, Landmark, Sparkles, Zap } from 'lucide-react';

const AustriaEligibilityDetail = () => {
  const { uniName } = useParams();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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

  const eligibilityData = {
    "university of vienna": {
      image: "assets/hero-germany.jpg",
      gpa: "3.0+ (or equivalent ECTS)",
      ielts: "6.5 or TOEFL 79+",
      gre_gmat: "Optional (for some PhD programs)",
      docs: ["Bachelor's Transcript", "Language Proficiency", "Statement of Purpose", "CV", "2-3 LORs (PhD: required)"],
      deadline: "Regular: Apr 15 | Winter: Oct 15",
      tuition: "€696/semester (EU) | €11,000/semester (Non-EU)",
      specializations: "Research, Physics, Data Science, AI, Humanities",
      acceptanceRate: "High",
      avgCost: "€1,400/year",
      researchFocus: "Excellent",
      internationalStudents: "30%",
      accentColor: "from-red-600 to-orange-600"
    },
    "tu wien": {
      image: "assets/hero-germany.jpg",
      gpa: "3.2+ (or equivalent)",
      ielts: "6.5 or TOEFL 79+",
      gre_gmat: "Optional",
      docs: ["Bachelor's Degree", "IELTS/TOEFL Score", "CV", "2 LORs", "Technical Portfolio (recommended)"],
      deadline: "Spring: Feb 15 | Fall: Jul 15",
      tuition: "€696/semester (EU) | €11,000/semester (Non-EU)",
      specializations: "AI, CS, Robotics, Engineering, Applied Sciences",
      acceptanceRate: "Competitive",
      avgCost: "€1,400/year",
      researchFocus: "Very High",
      internationalStudents: "35%",
      accentColor: "from-blue-600 to-cyan-600"
    },
    "tu graz": {
      image: "assets/hero-germany.jpg",
      gpa: "3.0+ (or equivalent)",
      ielts: "6.5 or TOEFL 79+",
      gre_gmat: "Check program website",
      docs: ["Academic Credentials", "English Proficiency", "SOP", "CV", "2 LORs"],
      deadline: "Regular: Apr 15 | Winter: Oct 15",
      tuition: "€696/semester (EU) | €11,000/semester (Non-EU)",
      specializations: "Mechanical Eng., Electrical Eng., AI, Automotive, Research",
      acceptanceRate: "Moderate",
      avgCost: "€1,400/year",
      researchFocus: "Very High",
      internationalStudents: "28%",
      accentColor: "from-green-600 to-emerald-600"
    },
    "jku linz": {
      image: "assets/hero-germany.jpg",
      gpa: "3.0+ (or equivalent)",
      ielts: "6.5 or TOEFL 79+",
      gre_gmat: "Optional",
      docs: ["Bachelor's Transcript", "Language Certificate", "Motivation Letter", "CV", "2 Academic References"],
      deadline: "Spring: Feb 1 | Fall: Jul 1",
      tuition: "€696/semester (EU) | €9,000/semester (Non-EU)",
      specializations: "AI, Machine Learning, Computer Science, Economics",
      acceptanceRate: "Accessible",
      avgCost: "€1,400/year",
      researchFocus: "High",
      internationalStudents: "25%",
      accentColor: "from-indigo-600 to-purple-600"
    }
  };

  const name = decodeURIComponent(uniName);
  const data = eligibilityData[name.toLowerCase()] || {
    image: "assets/hero-germany.jpg",
    gpa: "3.0+ (or equivalent ECTS)",
    ielts: "6.5 or TOEFL 79+",
    gre_gmat: "Check university website",
    docs: ["Bachelor's Degree", "English Proficiency", "Statement of Purpose", "CV", "Academic References"],
    deadline: "Varies by semester",
    tuition: "€696/semester (EU) | €9,000-11,500/semester (Non-EU)",
    specializations: "Varies by university",
    acceptanceRate: "Competitive",
    avgCost: "€1,400/year",
    researchFocus: "High",
    internationalStudents: "30%",
    accentColor: "from-red-600 to-orange-600"
  };

  const stats = [
    { icon: <Users />, label: "Acceptance Rate", value: data.acceptanceRate, color: "bg-red-500" },
    { icon: <TrendingUp />, label: "Avg Annual Cost", value: data.avgCost, color: "bg-green-500" },
    { icon: <Award />, label: "Research Focus", value: data.researchFocus, color: "bg-amber-500" },
    { icon: <Globe />, label: "International Students", value: data.internationalStudents, color: "bg-blue-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 dark:bg-red-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative h-screen bg-gradient-to-br ${data.accentColor} overflow-hidden pt-24`}
      >
        {/* Hero Image */}
        <img 
          src={data.image} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.button
            onClick={() => navigate(-1)}
            className="absolute top-8 left-6 bg-white/20 dark:bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <ArrowLeft size={18} /> Back
          </motion.button>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-4 capitalize drop-shadow-lg"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-white/90 drop-shadow-md"
          >
            Excellence in Higher Education
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative z-20 -mt-32 px-6 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-800"
            >
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                {stat.icon}
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 uppercase font-bold mb-2">{stat.label}</p>
              <p className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative z-20 max-w-5xl mx-auto px-6 mt-20"
      >
        {/* Eligibility Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Academic Eligibility */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Eligibility</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-gray-500 dark:text-slate-400 uppercase mb-2">Minimum GPA</p>
                <p className="text-xl font-black text-gray-900 dark:text-white">{data.gpa}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 dark:text-slate-400 uppercase mb-2">Requirements</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">Bachelor's degree from recognized institution with strong academic background</p>
              </div>
            </div>
          </motion.div>

          {/* Standardized Tests */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl">
                <Globe className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Language Proficiency</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-gray-500 dark:text-slate-400 uppercase mb-2">IELTS / TOEFL</p>
                <p className="text-xl font-black text-gray-900 dark:text-white">{data.ielts}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 dark:text-slate-400 uppercase mb-2">Standardized Tests</p>
                <p className="text-sm text-gray-700 dark:text-slate-300">{data.gre_gmat}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Application Deadline & Tuition */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 border border-red-100 dark:border-slate-700 shadow-xl mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Application Timeline & Costs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-red-600 dark:text-red-400" />
                <p className="text-sm font-bold text-gray-500 dark:text-slate-400 uppercase">Deadline</p>
              </div>
              <p className="text-xl font-black text-gray-900 dark:text-white">{data.deadline}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-orange-600 dark:text-orange-400" />
                <p className="text-sm font-bold text-gray-500 dark:text-slate-400 uppercase">Tuition</p>
              </div>
              <p className="text-lg font-black text-gray-900 dark:text-white">{data.tuition}</p>
            </div>
          </div>
        </motion.div>

        {/* Required Documentation */}
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-xl mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FileText className="text-blue-600" /> Required Documentation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.docs.map((doc, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />
                <span className="font-semibold text-gray-700 dark:text-slate-300">{doc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div variants={itemVariants} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Specializations</h3>
          <p className="text-lg font-semibold text-gray-700 dark:text-slate-300">{data.specializations}</p>
        </motion.div>

        {/* CTA Button */}
        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/enquiry')}
          className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-6 rounded-3xl font-black text-lg hover:shadow-2xl shadow-xl shadow-red-500/20 transition-all"
        >
          Start Your Application
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AustriaEligibilityDetail;
