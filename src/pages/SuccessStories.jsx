import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Quote,
  Star,
  TrendingUp,
  Award,
  Globe2,
  ArrowRight,
  Users,
  Briefcase,
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [filterCountry, setFilterCountry] = useState('all');

  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      country: 'USA',
      university: 'Stanford University',
      program: 'MS in Computer Science',
      year: '2024',
      achievement: 'Full Scholarship + Research Assistant Position',
      testimonial:
        "Edvoy's guidance was instrumental in securing my place at Stanford. Their counselors helped me craft a compelling application and prepared me thoroughly for the interview process. The scholarship assistance was phenomenal!",
      stats: { applications: 8, acceptances: 5, scholarship: '$60,000' }
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      country: 'UK',
      university: 'University of Oxford',
      program: 'MBA',
      year: '2023',
      achievement: 'Secured Placement at McKinsey & Company',
      testimonial:
        'From application to placement, Edvoy was with me every step. Their career counseling and soft skills training gave me the edge I needed. Now working at my dream company!',
      stats: { applications: 6, acceptances: 4, scholarship: '£25,000' }
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      country: 'Canada',
      university: 'University of Toronto',
      program: "Master's in Data Science",
      year: '2024',
      achievement: 'Merit Scholarship + Co-op Placement',
      testimonial:
        "The language training and visa assistance provided by Edvoy made my journey smooth. I'm now excelling in my program and have already secured a co-op position at a leading tech firm.",
      stats: { applications: 7, acceptances: 6, scholarship: 'CAD 35,000' }
    },
    {
      id: 4,
      name: 'Vikram Singh',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      country: 'Germany',
      university: 'Technical University of Munich',
      program: 'MS in Mechanical Engineering',
      year: '2023',
      achievement: 'DAAD Scholarship Winner',
      testimonial:
        "Edvoy's German language coaching was exceptional. They also guided me through the complex admission process and helped me win the prestigious DAAD scholarship. Forever grateful!",
      stats: { applications: 5, acceptances: 4, scholarship: '€20,000' }
    },
    {
      id: 5,
      name: 'Sneha Patel',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      country: 'Australia',
      university: 'University of Melbourne',
      program: 'Master of Public Health',
      year: '2024',
      achievement: 'International Excellence Scholarship',
      testimonial:
        'The end-to-end support from Edvoy was outstanding. From selecting the right university to settling in Melbourne, they were there for me. The accommodation assistance was particularly helpful!',
      stats: { applications: 6, acceptances: 5, scholarship: 'AUD 30,000' }
    },
    {
      id: 6,
      name: 'Arjun Kumar',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      country: 'USA',
      university: 'MIT',
      program: 'PhD in Artificial Intelligence',
      year: '2023',
      achievement: 'Full Funding + Research Grant',
      testimonial:
        "Edvoy's profile building service was game-changing. They helped me present my research experience effectively, leading to full funding at MIT. Their mentorship continues to inspire me.",
      stats: { applications: 4, acceptances: 3, scholarship: '$80,000' }
    }
  ];

  const countries = ['all', 'USA', 'UK', 'Canada', 'Germany', 'Australia'];

  const filteredStories =
    filterCountry === 'all'
      ? stories
      : stories.filter((story) => story.country === filterCountry);

  const stats = {
    totalStudents: '5000+',
    successRate: '95%',
    scholarships: '$50M+',
    countries: '15+'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-14"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-full px-6 py-2"
            >
              <Sparkles size={16} className="text-red-600 dark:text-red-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                Real Stories, Real Success
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              <span className="text-slate-900 dark:text-slate-50">Success </span>
              <span className="text-red-600 dark:text-red-400">Stories</span>
            </h1>

            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Discover how Edvoy has transformed the dreams of thousands of students into reality,
              helping them secure placements at top universities worldwide.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          >
            <StatCard icon={<Users />} value={stats.totalStudents} label="Students Guided" />
            <StatCard icon={<TrendingUp />} value={stats.successRate} label="Success Rate" />
            <StatCard icon={<Award />} value={stats.scholarships} label="Scholarships Won" />
            <StatCard icon={<Globe2 />} value={stats.countries} label="Countries" />
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {countries.map((country) => (
              <motion.button
                key={country}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterCountry(country)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                  filterCountry === country
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {country === 'all' ? 'All Stories' : country}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story, index) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  index={index}
                  onClick={() => setSelectedStory(story)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedStory && <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shine_3s_linear_infinite]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Ready to Write Your <span className="text-red-500">Success Story?</span>
            </h2>
            <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their dreams with Edvoy&apos;s
              guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-600/30 transition-all text-sm uppercase tracking-widest"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Components

const StatCard = ({ icon, value, label }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-center group cursor-pointer shadow-md hover:shadow-xl transition-all"
  >
    <div className="text-red-600 dark:text-red-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 30 })}
    </div>
    <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-50 mb-1">
      {value}
    </div>
    <div className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
      {label}
    </div>
  </motion.div>
);

const StoryCard = ({ story, index, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -8, scale: 1.01 }}
    onClick={onClick}
    className="group cursor-pointer"
  >
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={story.image}
            alt={story.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Animated Shine Effect (triggered by hover) */}
          <motion.div
            initial={{ x: '-120%' }}
            whileHover={{ x: '180%' }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
          />

          <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/30 blur-3xl group-hover:bg-red-600/40 transition-colors duration-700" />
        </div>

        {/* Country Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
        >
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-red-600 dark:text-red-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-slate-50">
              {story.country}
            </span>
          </div>
        </motion.div>

        {/* Floating Star Badge */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 6, 0, -6, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
        >
          <Star size={18} fill="currentColor" />
        </motion.div>

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-black text-white mb-1">{story.name}</h3>
          <p className="text-xs text-white/90">{story.university}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Briefcase size={16} className="text-red-600 dark:text-red-400" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {story.program}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-green-600 dark:text-green-400" />
            <span className="text-sm font-bold text-green-600 dark:text-green-400">
              {story.achievement}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
          {story.testimonial}
        </p>

        <motion.button
          whileHover={{ gap: '0.75rem', x: 2 }}
          className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all"
        >
          Read Full Story
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const StoryModal = ({ story, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
  >
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
    >
      {/* Header Image */}
      <div className="relative h-80 overflow-hidden">
        <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-colors z-10 text-lg font-bold"
        >
          ×
        </button>

        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-50">
                {story.country}
              </span>
            </div>
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-50">
                {story.year}
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-1">{story.name}</h2>
          <p className="text-sm md:text-base text-white/90 font-semibold">
            {story.university}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-3">
          <Quote className="text-red-600 dark:text-red-400 shrink-0" size={22} />
          <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
            "{story.testimonial}"
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-5 border-y border-slate-200 dark:border-slate-800">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-black text-red-600 dark:text-red-400 mb-1">
              {story.stats.applications}
            </div>
            <div className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Applications
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-black text-green-600 dark:text-green-400 mb-1">
              {story.stats.acceptances}
            </div>
            <div className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Acceptances
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs md:text-lg font-black text-blue-600 dark:text-blue-400 mb-1">
              {story.stats.scholarship}
            </div>
            <div className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Scholarship
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <GraduationCap className="text-red-600 dark:text-red-400" size={22} />
            <div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Program
              </div>
              <div className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-50">
                {story.program}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <Award className="text-green-600 dark:text-green-400" size={22} />
            <div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Achievement
              </div>
              <div className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-50">
                {story.achievement}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default SuccessStories;
