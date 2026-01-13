import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  TrendingUp,
  DollarSign,
  Search,
  ChevronRight,
  Star,
  Building2,
  Briefcase
} from "lucide-react";

/* ---------- Reusable Card ---------- */
const UniversityCard = ({ uni }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      
      {/* Header */}
      <div className={`h-32 ${uni.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-6 right-6">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
            {uni.rank}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
          {uni.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mb-6">
          <MapPin size={14} />
          <span className="text-sm">{uni.location}</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">
              Avg Salary
            </p>
            <div className="flex items-center gap-1 text-green-600 font-bold">
              <TrendingUp size={14} />
              <span>{uni.salary}</span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">
              Tuition / Year
            </p>
            <div className="flex items-center gap-1 text-blue-600 font-bold">
              <DollarSign size={14} />
              <span>{uni.fees}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
          Engineering Strengths
        </h4>
        <ul className="space-y-3">
          {uni.highlights.map((item, i) => (
            <li key={i} className="flex gap-3">
              <Star size={14} className="text-blue-600 mt-1" />
              <span className="text-sm text-gray-600 dark:text-slate-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action */}
      <div className="p-6 pt-0 mt-auto">
        <button
          onClick={() => navigate(uni.path)}
          className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
        >
          Check Eligibility <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

/* ---------- New Zealand Universities Page ---------- */
const NewZealand = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const universities = [
    {
      name: "University of Auckland",
      location: "Auckland",
      rank: "#1 New Zealand",
      salary: "NZD 80k+",
      fees: "NZD 9–13k",
      color: "bg-blue-700",
      path: "/eligibility/auckland",
      highlights: [
        "Top-ranked engineering university in NZ",
        "Strong civil, mechanical & software engineering",
        "Excellent industry and research collaboration"
      ]
    },
    {
      name: "University of Canterbury",
      location: "Christchurch",
      rank: "#2 New Zealand",
      salary: "NZD 78k+",
      fees: "NZD 8–12k",
      color: "bg-green-700",
      path: "/eligibility/canterbury",
      highlights: [
        "Best known for civil & structural engineering",
        "Washington Accord accredited programs",
        "Strong research-driven masters programs"
      ]
    },
    {
      name: "Victoria University of Wellington",
      location: "Wellington",
      rank: "#3 New Zealand",
      salary: "NZD 75k+",
      fees: "NZD 8–12k",
      color: "bg-purple-700",
      path: "/eligibility/victoria",
      highlights: [
        "Strong electrical & electronics engineering",
        "Good research focus in data & systems engineering",
        "Close ties with government & tech sector"
      ]
    },
    {
      name: "University of Otago",
      location: "Dunedin",
      rank: "#4 New Zealand",
      salary: "NZD 72k+",
      fees: "NZD 7–11k",
      color: "bg-red-700",
      path: "/eligibility/otago",
      highlights: [
        "Applied engineering & research-based masters",
        "Affordable living costs",
        "Strong student support and research culture"
      ]
    },
    {
      name: "Massey University",
      location: "Auckland / Palmerston North",
      rank: "#5 New Zealand",
      salary: "NZD 70k+",
      fees: "NZD 7–11k",
      color: "bg-amber-600",
      path: "/eligibility/massey",
      highlights: [
        "Specialized in mechatronics & aerospace",
        "Flexible campus and online research options",
        "Good employability for international students"
      ]
    },
    {
      name: "Auckland University of Technology",
      location: "Auckland",
      rank: "#3 New Zealand",
      salary: "NZD 68k+",
      fees: "NZD 7–10k",
      color: "bg-indigo-600",
      path: "/eligibility/auckland-university-of-technology",
      highlights: [
        "Industry-focused and practice-oriented programs",
        "Strong links with New Zealand employers",
        "Modern campus with applied research strengths"
      ]
    }
  ];

  const filteredUnis = universities.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
              Engineering <span className="text-blue-600">Masters</span> in New Zealand
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400">
              Globally accredited engineering degrees with strong post-study work options.
            </p>
          </div>

          {/* Search Bar Fixed Alignment */}
          <div className="relative w-full md:w-96 flex items-center group self-center">
            <Search 
              size={20} 
              className="absolute left-5 text-gray-400 group-focus-within:text-blue-500 transition-colors z-10" 
            />
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="flex items-center gap-4 bg-blue-600 p-6 rounded-3xl text-white">
            <Building2 />
            <div>
              <div className="text-2xl font-black">8</div>
              <div className="text-sm">Public Universities</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-900 p-6 rounded-3xl text-white">
            <Briefcase />
            <div>
              <div className="text-2xl font-black">3 Years</div>
              <div className="text-sm">Post-Study Work Visa</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-amber-500 p-6 rounded-3xl text-white">
            <GraduationCap />
            <div>
              <div className="text-2xl font-black">Washington Accord</div>
              <div className="text-sm">Engineering Recognition</div>
            </div>
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnis.map((uni, i) => (
            <UniversityCard key={i} uni={uni} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewZealand;