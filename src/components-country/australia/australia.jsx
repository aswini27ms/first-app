// components-country/australia/australia.jsx
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
  Briefcase
} from 'lucide-react';

const UniversityCard = ({ uni }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Top Section: Visual Branding */}
      <div className={`h-32 ${uni.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
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
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
              Avg Salary
            </p>
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold">
              <TrendingUp size={14} />
              {/* A$ only here, data is numeric */}
              <span>~ A${uni.salary}+</span>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
              Tuition/Year
            </p>
            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold">
              <DollarSign size={14} />
              {/* A$ only here, data is numeric/range */}
              <span>A${uni.fees}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">
            Why this University?
          </h4>
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
          className="
            w-full
            text-sm md:text-base
            font-bold
            py-4
            rounded-2xl
            flex items-center justify-center gap-2
            transition-all
            group-hover:scale-[1.02]
            shadow-md

            bg-blue-600 text-white
            hover:bg-blue-500

            dark:bg-blue-500 dark:text-white
            dark:hover:bg-blue-400
          "
        >
          Check Eligibility <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

const AustraliaUniversities = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // salary & fees: no A$ prefix, ranges as plain text
  const universities = [
    {
      name: 'University of Melbourne',
      location: 'Melbourne',
      rank: '#1 Prestige AU',
      salary: '70k',
      fees: '45k–60k',
      color: 'bg-blue-900',
      path: '/eligibility/unimelb',
      highlights: [
        'Australia’s most prestigious research university with global rankings across Engineering, Business, and Medicine.',
        'Located in central Melbourne with strong industry links and internship opportunities.',
        'Part of the Group of Eight (Go8) with extensive research funding and international collaborations.'
      ]
    },
    {
      name: 'Australian National University',
      location: 'Canberra',
      rank: 'Top Research AU',
      salary: '65k',
      fees: '45k–55k',
      color: 'bg-amber-700',
      path: '/eligibility/anu',
      highlights: [
        'National research university with strong focus on Public Policy, Data Science, and Engineering.',
        'Close ties with Australian government and policy think-tanks in Canberra.',
        'Excellent pathway for research-led master’s and PhD aspirants.'
      ]
    },
    {
      name: 'University of Sydney',
      location: 'Sydney',
      rank: 'Oldest in AU',
      salary: '70k',
      fees: '50k–60k',
      color: 'bg-red-700',
      path: '/eligibility/usyd',
      highlights: [
        'Australia’s oldest university with a strong brand in Engineering, Business, Law, and Healthcare.',
        'Located in Sydney with access to finance, tech, and consulting opportunities.',
        'High-quality teaching hospitals and clinical networks for health-related programs.'
      ]
    },
    {
      name: 'University of Queensland',
      location: 'Brisbane',
      rank: 'Top Go8 Member',
      salary: '65k',
      fees: '45k–55k',
      color: 'bg-purple-700',
      path: '/eligibility/uq',
      highlights: [
        'Strong in Engineering, Biotechnology, and fundamental research.',
        'Brisbane location offers comparatively lower living cost with good lifestyle.',
        'Active collaboration with industry and government labs.'
      ]
    },
    {
      name: 'Monash University',
      location: 'Melbourne',
      rank: 'Popular with Internationals',
      salary: '65k',
      fees: '40k–55k',
      color: 'bg-teal-700',
      path: '/eligibility/monash',
      highlights: [
        'Highly popular among international students with strong Engineering, IT, Pharmacy, and Business.',
        'Multiple campuses including Clayton and Caulfield with strong industry‑embedded programs.',
        'Known for co‑ops, internships, and applied research projects.'
      ]
    },
    {
      name: 'UNSW Sydney',
      location: 'Sydney',
      rank: 'Tech & Innovation',
      salary: '70k',
      fees: '45k–60k',
      color: 'bg-yellow-600',
      path: '/eligibility/unsw',
      highlights: [
        'Tech and innovation leader with strengths in Engineering, AI, Cybersecurity, and Business.',
        'Close partnerships with startups and tech companies in Sydney.',
        'Project‑heavy curricula aligned with emerging technology skills.'
      ]
    },
    {
      name: 'University of Western Australia',
      location: 'Perth',
      rank: 'Mining & Energy Hub',
      salary: '65k',
      fees: '40k–50k',
      color: 'bg-emerald-700',
      path: '/eligibility/uwa',
      highlights: [
        'Strong research reputation with focus on mining, energy, and earth sciences.',
        'Perth location offers direct access to resources and energy sector employers.',
        'Good balance of campus lifestyle and employability outcomes.'
      ]
    },
    {
      name: 'University of Adelaide',
      location: 'Adelaide',
      rank: 'Go8 • Affordable',
      salary: '60k',
      fees: '40k–50k',
      color: 'bg-rose-700',
      path: '/eligibility/adelaide',
      highlights: [
        'Go8 member known for research, AI, defence tech, and engineering disciplines.',
        'Relatively affordable city with lower living costs and calm student environment.',
        'Strong defence sector linkages and government‑backed research projects.'
      ]
    },
    {
      name: 'RMIT University',
      location: 'Melbourne',
      rank: 'Industry‑Focused',
      salary: '60k',
      fees: '35k–45k',
      color: 'bg-red-600',
      path: '/eligibility/rmit',
      highlights: [
        'Highly industry‑focused with practical learning in Engineering, Design, IT, and Architecture.',
        'Inner‑city Melbourne campus with direct access to startups and creative industries.',
        'Hands‑on curriculum with studios, labs, and work‑integrated learning.'
      ]
    },
    {
      name: 'UTS Sydney',
      location: 'Sydney',
      rank: 'High Employability',
      salary: '60k',
      fees: '38k–48k',
      color: 'bg-blue-600',
      path: '/eligibility/uts',
      highlights: [
        'Known for high graduate employability, especially in Data Science, Engineering, and Business Analytics.',
        'Modern city campus near Sydney CBD and tech corridors.',
        'Strong co‑op style industry projects and capstones.'
      ]
    },
    {
      name: 'Deakin University',
      location: 'Geelong / Melbourne',
      rank: 'Internship Powerhouse',
      salary: '55k',
      fees: '35k–45k',
      color: 'bg-indigo-700',
      path: '/eligibility/deakin',
      highlights: [
        'Reputation for internships, placements, and flexible learning in IT, Engineering, and Analytics.',
        'Campuses in Geelong and Melbourne with access to both regional and metro opportunities.',
        'Student‑friendly teaching style with strong support services.'
      ]
    },
    {
      name: 'Macquarie University',
      location: 'Sydney',
      rank: 'Tech & Finance Hub',
      salary: '60k',
      fees: '38k–48k',
      color: 'bg-slate-700',
      path: '/eligibility/macquarie',
      highlights: [
        'Located near major tech and finance hubs in North Ryde and Macquarie Park.',
        'Strong programs in Business, IT, Cybersecurity, and Data Science.',
        'Good industry networking via on‑campus corporate offices and research parks.'
      ]
    }
  ];

  const filteredUnis = universities.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none">
              Top <span className="text-blue-600">Australian</span> Universities
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
              Explore 12 leading Australian institutions ideal for Engineering, IT, Business, and research‑driven careers.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search
                size={20}
                className="text-gray-400 group-focus-within:text-blue-500 transition-colors"
              />
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
            <div className="p-3 bg-white/20 rounded-2xl">
              <Building2 />
            </div>
            <div>
              <div className="text-2xl font-black">12</div>
              <div className="text-sm opacity-80 font-bold">Featured Universities</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-900 dark:bg-slate-800 p-6 rounded-[2.5rem] text-white">
            <div className="p-3 bg-white/20 rounded-2xl">
              <Briefcase />
            </div>
            <div>
              <div className="text-2xl font-black">2–4 Years</div>
              <div className="text-sm opacity-80 font-bold">
                Post‑Study Work Rights (485)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-amber-500 p-6 rounded-[2.5rem] text-white">
            <div className="p-3 bg-white/20 rounded-2xl">
              <GraduationCap />
            </div>
            <div>
              <div className="text-2xl font-black">STEM</div>
              <div className="text-sm opacity-80 font-bold">
                Priority Degrees for Longer PSW
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        {filteredUnis.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUnis.map((uni, idx) => (
              <UniversityCard key={idx} uni={uni} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-slate-800">
            <p className="text-2xl font-bold text-gray-400">
              No universities found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AustraliaUniversities;
