import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring
} from 'framer-motion';
import {
  Globe2,
  GraduationCap,
  Briefcase,
  PlaneTakeoff,
  MessageCircle,
  MapPin,
  Sparkles,
  ArrowRight,
  Languages,
  ShieldCheck,
  Search,
  Users,
  Target,
  Award,
  TrendingUp,
  FileText,
  Home,
  CheckCircle2
} from 'lucide-react';

// --- Animation Variants ---
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.08 }
  }
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const floatingVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
};

const AboutEdvoy = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const servicesScale = useTransform(scrollYProgress, [0.05, 0.25], [0.96, 1]);
  const servicesOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0.2, 1]);
  const heroImageY = useTransform(scrollYProgress, [0, 0.3], ['0%', '12%']);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-red-100 selection:text-red-600 overflow-hidden transition-colors duration-500"
    >
      {/* Dynamic background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </motion.div>

        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-100/60 dark:bg-red-500/20 blur-3xl mix-blend-multiply dark:mix-blend-soft-light"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-blue-50/60 dark:bg-sky-500/20 blur-3xl mix-blend-multiply dark:mix-blend-soft-light"
        />

        <FloatingParticle top="10%" left="10%" color="text-red-200 dark:text-red-300" delay={0} />
        <FloatingParticle top="30%" right="20%" color="text-blue-200 dark:text-sky-400" delay={1} />
        <FloatingParticle bottom="20%" left="15%" color="text-slate-300 dark:text-slate-500" delay={2} />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-16 lg:grid-cols-2 items-center"
          >
            <motion.div variants={fadeUp} className="space-y-10 relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 dark:border-red-500/40 bg-red-50/80 dark:bg-red-500/15 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-widest uppercase text-red-600 dark:text-red-300 shadow-sm group"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span className="relative">
                  End-to-End Study Abroad Support
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500 dark:bg-red-400" />
                </span>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-50"
                  variants={sentence}
                  initial="hidden"
                  animate="visible"
                >
                  {['Education', 'and', 'career', 'success'].map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-4"
                      variants={letter}
                    >
                      {word}
                    </motion.span>
                  ))}
                  <span className="block text-red-600 dark:text-red-400 italic relative">
                    starts with Edvoy.
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="absolute -bottom-2 left-0 w-full"
                      height="10"
                      viewBox="0 0 200 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6C50 2 150 2 198 6"
                        stroke="#e31e24"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-medium"
                >
                  We handle the entire process—from initial enquiry and registration to post-admission
                  settling—ensuring a transparent, accessible journey to your dream international career.
                </motion.p>
              </div>

              {/* Key Stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-6">
                <StatBadge icon={<Users size={20} />} label="Students Guided" />
                <StatBadge icon={<Globe2 size={20} />} label="Global Reach" />
                <StatBadge icon={<Award size={20} />} label="Success Rate" />
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <TiltCard>
              <motion.div
                style={{ y: heroImageY }}
                className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/80 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full w-full rounded-3xl bg-[conic-gradient(from_140deg,rgba(239,68,68,0.55),rgba(59,130,246,0.5),rgba(248,250,252,0.4),rgba(239,68,68,0.55))] blur-[28px]" />
                </div>

                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/assets/about.webp"
                    alt="Students exploring global education opportunities with Edvoy"
                    className="h-[480px] w-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent dark:from-slate-950/90 dark:via-slate-950/40 dark:to-transparent" />
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-6 left-6 right-6 p-5 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border border-white/60 dark:border-slate-700/80 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-red-600 dark:bg-red-500 p-3 rounded-xl text-white shadow-lg shadow-red-600/25">
                      <Target size={26} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-slate-50 uppercase text-sm tracking-widest">
                        Our Mission
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 mt-1 font-semibold text-sm">
                        Empowering students worldwide with comprehensive support for international education.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-32 bg-slate-50 dark:bg-slate-950/90 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-200 dark:via-red-500/50 to-transparent" />
        <motion.div
          style={{ scale: servicesScale, opacity: servicesOpacity }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-6 group"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            >
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100">
                  Comprehensive
                </span>
                <span className="pointer-events-none absolute inset-0 animate-[shine_2.8s_linear_infinite] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.7),transparent)] bg-[length:200%_100%] mix-blend-screen opacity-0 group-hover:opacity-100" />
              </span>
              <br />
              <span className="text-red-600 dark:text-red-400 relative inline-flex items-center gap-2">
                Service Offerings
                <motion.span
                  initial={false}
                  whileHover={{ rotate: [-2, 2, -1, 1, 0] }}
                  transition={{ duration: 0.6 }}
                  className="h-[2px] w-10 bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                />
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 text-lg">
              Specialized services to prepare you for international environments
            </motion.p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<GraduationCap size={32} className="text-red-600 dark:text-red-400" />}
              title="Academic Guidance"
              desc="Overseas education counseling and scholarship guidance tailored to your academic profile."
              features={['Education Counseling', 'Scholarship Guidance']}
            />
            <ServiceCard
              icon={<Briefcase size={32} className="text-blue-600 dark:text-sky-400" />}
              title="Career Preparation"
              desc="Domestic & international placement opportunities with comprehensive soft skill training."
              features={['Placement Assistance', 'Soft Skill Training', 'Career Development']}
              delay={0.1}
            />
            <ServiceCard
              icon={<Languages size={32} className="text-purple-600 dark:text-purple-400" />}
              title="Language Training"
              desc="Expert coaching for German, Japanese, IELTS, and LangCert to enhance your communication."
              features={['German & Japanese', 'IELTS Coaching', 'LangCert Preparation']}
              delay={0.2}
            />
            <ServiceCard
              icon={<ShieldCheck size={32} className="text-green-600 dark:text-green-400" />}
              title="Legal & Logistics"
              desc="Full visa guidance, accommodation support, and country registrations handled seamlessly."
              features={['Visa Assistance', 'Accommodation Help', 'Registration Support']}
              delay={0.3}
            />
          </div>
        </motion.div>
      </section>

      {/* Global Reach */}
      <section className="py-32 bg-white dark:bg-slate-950 px-6 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              <span className="text-slate-900 dark:text-slate-50">Global </span>
              <span className="text-red-600 dark:text-red-400">Reach</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Specialized placement assistance across high-demand international destinations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <RegionCard
              title="North America"
              countries={['United States', 'Canada']}
              icon={<MapPin className="text-red-500" size={40} />}
              gradient="from-red-500/20 to-orange-500/20"
            />
            <RegionCard
              title="Europe"
              countries={['United Kingdom', 'Germany', 'Austria', 'Poland']}
              icon={<Globe2 className="text-blue-500" size={40} />}
              gradient="from-blue-500/20 to-purple-500/20"
              delay={0.1}
            />
            <RegionCard
              title="Oceania"
              countries={['Australia', 'New Zealand']}
              icon={<PlaneTakeoff className="text-green-500" size={40} />}
              gradient="from-green-500/20 to-teal-500/20"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* USA Specialized Support */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/90 px-6 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/25 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -ml-48 -mb-48" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6"
                >
                  <Target size={16} className="text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-300">Specialized Support</span>
                </motion.div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                  USA Structural <span className="text-red-500">Guidance</span>
                </h3>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Comprehensive procedure support for navigating North American applications with confidence
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    What We Cover
                  </h4>
                  {[
                    { title: 'Admission Procedure', desc: 'Step-by-step guidance through the entire application process' },
                    { title: 'US Profile Building', desc: 'Creating competitive profiles for top universities' },
                    { title: 'Requirements Analysis', desc: 'Identifying specific requirements for your target schools' },
                    { title: 'Course Selection', desc: 'Discovering popular courses aligned with your goals' },
                    { title: 'Placement Opportunities', desc: 'Highlighting post-graduation career prospects' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 6, scale: 1.02 }}
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 90 }}
                        className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-sm mt-1"
                      >
                        <ArrowRight size={12} className="text-white" />
                      </motion.div>
                      <div>
                        <span className="font-bold text-white block">{item.title}</span>
                        <span className="text-slate-400 text-sm">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <InfoBox icon={<FileText size={28} />} title="Documentation" desc="Complete paperwork assistance" />
                  <InfoBox icon={<TrendingUp size={28} />} title="Success Rate" desc="Proven track record" />
                  <InfoBox icon={<Users size={28} />} title="Expert Team" desc="Experienced counselors" />
                  <InfoBox icon={<Award size={28} />} title="Scholarships" desc="Financial aid guidance" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

// Reusable Components

const FloatingParticle = ({ top, left, right, bottom, color, delay }) => (
  <motion.div
    variants={floatingVariant}
    initial="initial"
    animate="animate"
    transition={{ delay }}
    style={{
      position: 'absolute',
      top: top,
      left: left,
      right: right,
      bottom: bottom
    }}
    className="pointer-events-none"
  >
    <Sparkles className={color} size={24} opacity={0.3} />
  </motion.div>
);

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), {
    stiffness: 150,
    damping: 20
  });

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      style={{ perspective: 1000, rotateX, rotateY }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};

const StatBadge = ({ icon, label }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.05 }}
    className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-3 text-center group cursor-pointer"
  >
    <div className="text-red-600 dark:text-red-400 mb-1 flex justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{label}</p>
  </motion.div>
);

const ServiceCard = ({ icon, title, desc, features, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay }}
    whileHover="hover"
    whileTap={{ scale: 0.97 }}
    className="group relative bg-white dark:bg-slate-900 p-[2px] rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-900/70 transition-transform"
  >
    <motion.div
      variants={{ hover: { rotate: 360 } }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-[-45%] bg-[conic-gradient(from_90deg_at_50%_50%,#e31e24_0%,#3b82f6_50%,#e31e24_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
    />
    <motion.div
      variants={{ hover: { y: -4, scale: 1.02 } }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="h-full w-full bg-white dark:bg-slate-950 p-8 rounded-3xl relative z-10 overflow-hidden"
    >
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-50 dark:bg-red-900/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-20 space-y-4">
        <motion.div
          variants={{ hover: { scale: 1.1, rotate: -4 } }}
          className="w-16 h-16 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 group-hover:shadow-md transition-all"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-black text-slate-900 dark:text-slate-50 uppercase tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
          {desc}
        </p>
        {features && (
          <div className="pt-2 space-y-1">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <div className="w-1 h-1 rounded-full bg-red-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const RegionCard = ({ title, countries, icon, gradient, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative group cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-70 transition-opacity rounded-3xl blur-xl" 
         style={{ background: `linear-gradient(to bottom right, ${gradient})` }} />
    
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg group-hover:shadow-2xl transition-all overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity -mr-16 -mt-16`} />
      
      <div className="relative z-10 space-y-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200/50 dark:border-slate-700/50 group-hover:shadow-md transition-all"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-2xl font-black text-slate-900 dark:text-slate-50 uppercase tracking-tight">
          {title}
        </h3>
        
        <div className="space-y-2">
          {countries.map((country, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + idx * 0.1 }}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="font-medium">{country}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const InfoBox = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -4 }}
    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer group"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
      className="text-red-400 mb-3 flex justify-center group-hover:scale-110 transition-transform"
    >
      {icon}
    </motion.div>
    <span className="font-black text-sm uppercase block mb-1">{title}</span>
    <p className="text-xs text-slate-400">{desc}</p>
  </motion.div>
);

export default AboutEdvoy;