import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Briefcase, Award, Users, 
  Languages, ShieldCheck, Home, ArrowRight,
  CheckCircle2, Globe, Search, BookOpen, Sparkles
} from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      id: "overseas-edu",
      icon: GraduationCap,
      title: "Overseas Education",
      desc: "Navigate the global academic landscape with ease. We help you find the perfect match for your career goals.",
      features: ["Country Selection", "University Matching", "Course Guidance"],
      color: "blue", // Used for dynamic class mapping
      gradient: "from-blue-500 to-indigo-600",
      glow: "group-hover:shadow-blue-500/20"
    },
    {
      id: "scholarships",
      icon: Award,
      title: "Scholarship Guidance",
      desc: "Don't let finances hold you back. We identify and assist with global scholarship applications.",
      features: ["Merit-based Awards", "Grant Identification", "Application Support"],
      color: "amber",
      gradient: "from-amber-400 to-orange-600",
      glow: "group-hover:shadow-amber-500/20"
    },
    {
      id: "visa-assistance",
      icon: ShieldCheck,
      title: "Visa Assistance",
      desc: "Our 98% success rate in visa approvals comes from meticulous documentation and mock interviews.",
      features: ["Documentation Review", "Interview Prep", "File Submission"],
      color: "emerald",
      gradient: "from-green-500 to-emerald-700",
      glow: "group-hover:shadow-emerald-500/20"
    },
    {
      id: "language-training",
      icon: Languages,
      title: "Language Training",
      desc: "Master the global tongue. Specialized coaching modules for professional and academic success.",
      subServices: ["German", "Japanese", "IELTS", "LangCert"],
      color: "red",
      gradient: "from-[#e32926] to-red-700",
      glow: "group-hover:shadow-red-500/20"
    },
    {
      id: "placement-support",
      icon: Briefcase,
      title: "Placement Opportunities",
      desc: "Connect with industry leaders. We bridge the gap between education and global employment.",
      features: ["Domestic Jobs", "International Internships", "Career Mapping"],
      color: "purple",
      gradient: "from-purple-500 to-purple-800",
      glow: "group-hover:shadow-purple-500/20"
    },
    {
      id: "soft-skills",
      icon: Users,
      title: "Soft Skill Training",
      desc: "Technical skills get you the interview; soft skills get you the job. Polish your professional persona.",
      features: ["Public Speaking", "Corporate Etiquette", "Leadership"],
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      glow: "group-hover:shadow-cyan-500/20"
    },
    {
      id: "placement-assist",
      icon: Search,
      title: "Placement Assistance",
      desc: "Ready-to-work support focusing on the final miles of your job hunt journey.",
      features: ["Resume Building", "Interview Prep", "Job Search Strategy"],
      color: "rose",
      gradient: "from-pink-500 to-rose-600",
      glow: "group-hover:shadow-rose-500/20"
    },
    {
      id: "post-admission",
      icon: Home,
      title: "Post-Admission Services",
      desc: "Our support doesn't end at the airport. We ensure you're settled and compliant in your new home.",
      features: ["Accommodation Help", "Country Registration", "Local Orientation"],
      color: "slate",
      gradient: "from-slate-700 to-slate-900",
      glow: "group-hover:shadow-slate-500/20"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 selection:bg-[#e32926] selection:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="assets/services.jpg"
            alt="Services"
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark overlay ONLY (no blur, no gradient fade) */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white text-sm font-bold tracking-widest uppercase mb-10 shadow-xl">
            <Sparkles size={16} className="text-[#e32926]" />
            Elite Student Services
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Excellence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e32926] to-[#ff7a1a]">
              Simplified.
            </span>
          </h1>

          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            Empowering your global education journey with precision, care, and industry-leading expertise.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allServices.map((service) => (
            <div 
              key={service.id}
              className={`group relative bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-gray-100 dark:border-slate-800 shadow-xl hover:shadow-2xl ${service.glow} transition-all duration-500 hover:-translate-y-4 flex flex-col overflow-hidden`}
            >
              {/* Subtle Spotlight Background Effect */}
              <div className="absolute -inset-x-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700 blur-3xl pointer-events-none" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), transparent)` }}></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box with Magnetic Effect */}
                <div className="mb-10 inline-block">
                  <div className={`p-5 rounded-3xl bg-gradient-to-br ${service.gradient} text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out inline-flex`}>
                    <service.icon size={32} strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-5 tracking-tight group-hover:text-[#e32926] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-10 flex-grow font-medium">
                  {service.desc}
                </p>

                {/* Tags or Feature List */}
                <div className="mb-10">
                  {service.subServices ? (
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((sub) => (
                        <span key={sub} className="px-4 py-2 bg-gray-50 dark:bg-slate-800/50 text-gray-700 dark:text-slate-300 text-[11px] font-black uppercase tracking-widest rounded-xl border border-gray-100 dark:border-slate-700 group-hover:border-[#e32926]/30 transition-colors">
                          {sub}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {service.features?.map((feat) => (
                        <div key={feat} className="flex items-center gap-3 text-sm font-bold text-gray-500 dark:text-slate-400">
                          <div className={`p-1 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-100 transition-opacity`}>
                             <CheckCircle2 size={12} className="text-white" />
                          </div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced Learn More Button */}
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-3 text-sm font-black text-gray-900 dark:text-white group/btn mt-auto"
                >
                  <span className="relative">
                    EXPLORE NOW
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#e32926] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center group-hover/btn:bg-[#e32926] group-hover/btn:border-[#e32926] group-hover/btn:text-white transition-all duration-300 group-hover/btn:translate-x-2">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PREMIUM CALL TO ACTION */}
      <section className="relative py-28 px-6 overflow-hidden">

{/* 🔹 Background Image (slightly blurred for depth) */}
<div className="absolute inset-0 z-0">
  <img
    src="assets/cta-bg.avif"
    alt="Study Abroad Background"
    className="w-full h-full object-cover blur-sm md:blur dark:brightness-75 transition-all duration-300"
  />
</div>



{/* 🔹 Dark Readability Overlay */}
<div className="absolute inset-0 z-10 bg-black/20 dark:bg-black/40 transition-colors duration-300"></div>

{/* 🔹 Ambient Glow Blobs */}
<div className="absolute inset-0 z-20 opacity-15 dark:opacity-10 pointer-events-none transition-opacity duration-300">
  <div className="absolute top-0 left-0 w-96 h-96 bg-white dark:bg-slate-800 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white dark:bg-slate-800 rounded-full blur-3xl"></div>
</div>

{/* 🔹 Content */}
<div className="relative z-30 max-w-4xl mx-auto text-center">
  <h2 className="text-5xl md:text-6xl font-black text-black dark:text-white mb-6 leading-tight transition-colors duration-300">
  Your Future is Calling. <br /> 
  <span className="text-[#ff7a1a]">Will You Answer?</span>
  </h2>
  <p className="text-xl text-black/90 dark:text-slate-200 mb-12 max-w-2xl mx-auto transition-colors duration-300">
    Join thousands of students who achieved their dreams with our guidance
  </p>

  {/* CTA Button */}
  <button
    className="relative group bg-white dark:bg-slate-800 text-[#e32926] dark:text-orange-400
    px-14 py-6 rounded-full font-black text-lg
    shadow-[0_20px_60px_rgba(255,255,255,0.35)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
    hover:shadow-[0_25px_80px_rgba(255,255,255,0.7)] dark:hover:shadow-[0_25px_80px_rgba(227,41,38,0.3)]
    ring-2 ring-white/60 dark:ring-slate-700/60 hover:ring-[#e32926]/60 dark:hover:ring-orange-400/60
    transition-all duration-500
    hover:-translate-y-2 hover:scale-110 active:scale-95 overflow-hidden"
  >
    {/* Shine sweep */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-slate-600/60 to-transparent
      translate-x-[-120%] group-hover:translate-x-[120%]
      transition-transform duration-700 ease-out opacity-70"></span>

    <span className="relative z-10 text-black dark:text-white transition-colors duration-300">Book Free Consultation</span>
  </button>
</div>
</section>
    </div>
  );
};

export default Services;