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
  Zap,
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
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold">
              <DollarSign size={14} />
              <span>{uni.tuition}</span>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Value</p>
            <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-bold">
              <TrendingUp size={14} />
              <span>{uni.value}</span>
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

const PolandUniversities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const universities = [
    {
      name: "University of Warsaw",
      location: "Warsaw",
      country: "Poland",
      rank: "QS #352",
      tuition: "€1,500-3,000/year",
      value: "Excellent",
      color: "bg-gradient-to-br from-red-600 to-pink-600",
      specializations: ["Research", "AI", "Data Science", "Mathematics", "PhD Tracks"],
      highlights: [
        "Poland's top university with strong research foundation",
        "Excellent PhD programs in STEM fields",
        "Growing AI and data science reputation",
        "Affordable compared to Western Europe"
      ],
      path: "/country/poland/university-of-warsaw"
    },
    {
      name: "Jagiellonian University",
      location: "Kraków",
      country: "Poland",
      rank: "QS #430",
      tuition: "€1,200-2,500/year",
      value: "Outstanding",
      color: "bg-gradient-to-br from-blue-600 to-indigo-600",
      specializations: ["Physics", "Life Sciences", "Humanities", "Research Legacy"],
      highlights: [
        "Europe's second-oldest university with historic prestige",
        "Exceptional physics and life sciences programs",
        "Strong international research collaborations",
        "Vibrant student life in Kraków"
      ],
      path: "/country/poland/jagiellonian-university"
    },
    {
      name: "Warsaw University of Technology",
      location: "Warsaw",
      country: "Poland",
      rank: "QS #420",
      tuition: "€2,000-3,500/year",
      value: "Very High",
      color: "bg-gradient-to-br from-green-600 to-emerald-600",
      specializations: ["Engineering", "AI", "Robotics", "Applied Research"],
      highlights: [
        "Leading engineering university in Central Europe",
        "Strong industry partnerships with tech companies",
        "Cutting-edge AI and robotics labs",
        "High employability rates"
      ],
      path: "/country/poland/warsaw-tech"
    },
    {
      name: "AGH University of Science & Technology",
      location: "Kraków",
      country: "Poland",
      rank: "QS #450",
      tuition: "€1,500-3,000/year",
      value: "High",
      color: "bg-gradient-to-br from-purple-600 to-violet-600",
      specializations: ["AI", "ML", "Computer Science", "Industry-focused"],
      highlights: [
        "Strong focus on practical industry-aligned education",
        "Excellent CS and AI programs at affordable cost",
        "Tech-forward curriculum and labs",
        "Growing reputation in AI research"
      ],
      path: "/country/poland/agh-university"
    },
    {
      name: "Wrocław University of Science & Technology",
      location: "Wrocław",
      country: "Poland",
      rank: "QS #500",
      tuition: "€1,500-3,000/year",
      value: "Excellent",
      color: "bg-gradient-to-br from-orange-600 to-amber-600",
      specializations: ["Engineering", "Data Science", "Applied Sciences"],
      highlights: [
        "Modern engineering programs with industry focus",
        "Emerging tech hub in Wrocław",
        "Strong data science and applied research",
        "Affordable education with quality outcomes"
      ],
      path: "/country/poland/wroclaw-tech"
    },
    {
      name: "Gdańsk University of Technology",
      location: "Gdańsk",
      country: "Poland",
      rank: "QS #550",
      tuition: "€1,200-2,800/year",
      value: "Outstanding",
      color: "bg-gradient-to-br from-cyan-600 to-blue-600",
      specializations: ["Engineering", "Technology", "Research Masters"],
      highlights: [
        "Quality engineering education at fraction of Western cost",
        "Beautiful Baltic port city location",
        "Strong maritime technology programs",
        "Growing international recognition"
      ],
      path: "/country/poland/gdansk-tech"
    },
    {
      name: "Adam Mickiewicz University",
      location: "Poznań",
      country: "Poland",
      rank: "QS #600",
      tuition: "€1,000-2,500/year",
      value: "Excellent",
      color: "bg-gradient-to-br from-teal-600 to-green-600",
      specializations: ["Research", "Sciences", "Humanities", "PhD Programs"],
      highlights: [
        "Poland's third-oldest university",
        "Strong research tradition and funding",
        "Excellent PhD programs across disciplines",
        "Very affordable tuition rates"
      ],
      path: "/country/poland/adam-mickiewicz"
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
              Elite <span className="text-blue-600">Poland</span> Institutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
              Explore 7+ detailed profiles of top-ranked universities for your 2026 intake.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 bg-blue-600 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><Building2 /></div>
                <div>
                    <div className="text-2xl font-black">7+</div>
                    <div className="text-sm opacity-80 font-bold">Top Public Universities</div>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 dark:bg-slate-800 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><DollarSign /></div>
                <div>
                    <div className="text-2xl font-black">€1-3k/Year</div>
                    <div className="text-sm opacity-80 font-bold">Affordable Tuition</div>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-amber-500 p-6 rounded-[2.5rem] text-white">
                <div className="p-3 bg-white/20 rounded-2xl"><Award /></div>
                <div>
                    <div className="text-2xl font-black">Engineering</div>
                    <div className="text-sm opacity-80 font-bold">Priority Programs</div>
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

export default PolandUniversities;
