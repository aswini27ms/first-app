import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Search, 
  ChevronRight, 
  Star,
  Building2,
  Briefcase,
  Lightbulb,
  Award
} from 'lucide-react';

const UniversityCard = ({ uni }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Top Section: Visual Branding */}
      <div className={`h-32 ${uni.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-6 right-6">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
            {uni.rank}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {uni.name}
            </h3>
            <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mt-1">
              <MapPin size={14} />
              <span className="text-sm font-medium">{uni.location}</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Tuition/Year</p>
            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold">
              <DollarSign size={14} />
              <span>{uni.tuition}</span>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Research</p>
            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-bold">
              <Lightbulb size={14} />
              <span>{uni.research}</span>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Specializations</h4>
          <div className="flex flex-wrap gap-2">
            {uni.specializations.map((spec, idx) => (
              <span key={idx} className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full font-semibold">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Deep Dive Highlights */}
        <div className="space-y-4 mt-6">
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Why this University?</h4>
          <ul className="space-y-3">
            {uni.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 bg-blue-50 dark:bg-blue-900/30 p-1 rounded-md">
                  <Star size={12} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 pt-0 mt-auto">
        <button 
          onClick={() => navigate(uni.path)}
          className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all group-hover:scale-[1.02]"
        >
          Check Eligibility <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

const AustriaUniversities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const universities = [
    {
      name: "University of Vienna",
      location: "Vienna",
      country: "Austria",
      rank: "QS #173",
      tuition: "€696/sem",
      research: "Excellent",
      color: "bg-gradient-to-br from-red-600 to-orange-600",
      specializations: ["Research", "Physics", "Data Science", "AI", "Humanities"],
      highlights: [
        "Central Europe's oldest university with cutting-edge research",
        "Highly affordable EU tuition rates",
        "Strong international PhD programs",
        "World-class research facilities"
      ],
      path: "/country/austria/university-of-vienna"
    },
    {
      name: "TU Wien",
      location: "Vienna",
      country: "Austria",
      rank: "QS #169",
      tuition: "€696/sem",
      research: "Outstanding",
      color: "bg-gradient-to-br from-blue-600 to-cyan-600",
      specializations: ["AI", "CS", "Robotics", "Engineering", "Applied Sciences"],
      highlights: [
        "Top technical university in Central Europe",
        "Industry partnerships with global tech companies",
        "Cutting-edge AI & robotics labs",
        "Affordable tuition for high-quality education"
      ],
      path: "/country/austria/tu-wien"
    },
    {
      name: "TU Graz",
      location: "Graz",
      country: "Austria",
      rank: "QS #367",
      tuition: "€696/sem",
      research: "Very High",
      color: "bg-gradient-to-br from-green-600 to-emerald-600",
      specializations: ["Mechanical Eng.", "Electrical Eng.", "AI", "Automotive", "Research"],
      highlights: [
        "Heavy research focus with modern facilities",
        "Strong automotive & mechanical engineering programs",
        "Low student-to-faculty ratio",
        "EU cost benefits for non-EU citizens"
      ],
      path: "/country/austria/tu-graz"
    },
    {
      name: "JKU Linz",
      location: "Linz",
      country: "Austria",
      rank: "QS #545",
      tuition: "€696/sem",
      research: "High",
      color: "bg-gradient-to-br from-indigo-600 to-purple-600",
      specializations: ["AI", "Machine Learning", "Computer Science", "Economics"],
      highlights: [
        "Rising star in AI and machine learning research",
        "Growing tech ecosystem in Linz",
        "Strong CS programs at fraction of Western cost",
        "International student-friendly environment"
      ],
      path: "/country/austria/jku-linz"
    },
    {
      name: "University of Innsbruck",
      location: "Innsbruck",
      country: "Austria",
      rank: "QS #350",
      tuition: "€696/sem",
      research: "Very High",
      color: "bg-gradient-to-br from-sky-600 to-blue-600",
      specializations: ["Physics", "Mathematics", "Natural Sciences", "Research PhDs"],
      highlights: [
        "World-class research in physics and natural sciences",
        "Beautiful Alpine location with excellent quality of life",
        "Strong PhD programs with international recognition",
        "Highly affordable for world-class education"
      ],
      path: "/country/austria/university-of-innsbruck"
    },
    {
      name: "WU Wien",
      location: "Vienna",
      country: "Austria",
      rank: "QS #290",
      tuition: "€696/sem",
      research: "High",
      color: "bg-gradient-to-br from-amber-600 to-yellow-600",
      specializations: ["Management", "Economics", "Tech-driven Business", "Research"],
      highlights: [
        "Europe's leading business school",
        "Tech-integrated business programs",
        "Strong international network",
        "EU tuition rates for global education"
      ],
      path: "/country/austria/wu-wien"
    }
  ];

  const filtered = universities.filter(uni =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none">
              Elite <span className="text-red-600">Austria</span> Institutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
              Explore 6+ detailed profiles of top-ranked universities for your 2026 intake.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400 group-focus-within:text-red-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 bg-red-600 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><Building2 /></div>
                <div>
                    <div className="text-2xl font-black">6+</div>
                    <div className="text-sm opacity-80 font-bold">Top Public Universities</div>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 dark:bg-slate-800 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><DollarSign /></div>
                <div>
                    <div className="text-2xl font-black">€696/Sem</div>
                    <div className="text-sm opacity-80 font-bold">Low Tuition Rates</div>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-amber-500 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><Award /></div>
                <div>
                    <div className="text-2xl font-black">Research</div>
                    <div className="text-sm opacity-80 font-bold">World-Class Facilities</div>
                </div>
            </div>
        </div>

        {/* Dynamic Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((uni, idx) => (
              <UniversityCard key={idx} uni={uni} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-slate-800">
            <p className="text-2xl font-bold text-gray-400">No universities found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AustriaUniversities;
