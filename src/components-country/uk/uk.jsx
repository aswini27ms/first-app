// components-country/uk/uk-universities.jsx
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
              <span>{uni.salary}</span>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-2xl">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
              Tuition/Year
            </p>
            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold">
              <DollarSign size={14} />
              <span>{uni.fees}</span>
            </div>
          </div>
        </div>

        {/* Deep Dive Highlights */}
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
          className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all group-hover:scale-[1.02]"
        >
          Check Eligibility <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

const UKUniversities = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const universities = [
    {
      name: 'University of Oxford',
      location: 'Oxford',
      rank: '#1 UK Overall',
      salary: '£46k+',
      fees: '£30k–40k',
      color: 'bg-sky-900',
      path: '/eligibility/oxford',
      highlights: [
        'World’s oldest English‑speaking university with elite global reputation in Law, PPE, and Sciences.',
        'Exceptionally strong research output and tutorial‑style teaching across colleges.[web:250][web:252]',
        'Graduates command some of the highest earnings among UK universities five years after graduation.[web:251]'
      ]
    },
    {
      name: 'University of Cambridge',
      location: 'Cambridge',
      rank: '#2 UK Overall',
      salary: '£45k+',
      fees: '£30k–40k',
      color: 'bg-emerald-900',
      path: '/eligibility/cambridge',
      highlights: [
        'Global academic excellence, especially in Mathematics, Engineering, and Natural Sciences.[web:247][web:250]',
        'Collegiate system with intensive supervision‑based learning and strong research culture.',
        'Extensive track record of Nobel laureates, Fields Medallists, and tech founders.'
      ]
    },
    {
      name: 'Imperial College London',
      location: 'London',
      rank: '#1 UK STEM',
      salary: '£43k+',
      fees: '£32k–42k',
      color: 'bg-slate-800',
      path: '/eligibility/imperial',
      highlights: [
        'STEM powerhouse with top‑tier rankings in Engineering, AI, Data Science, and Medicine.[web:247][web:248]',
        'Central London campus with strong links to deep‑tech, finance, and healthcare sectors.',
        'Highly research‑intensive environment with cutting‑edge labs and spin‑out ecosystem.'
      ]
    },
    {
      name: 'London School of Economics (LSE)',
      location: 'London',
      rank: '#1 Social Sciences',
      salary: '£42k+',
      fees: '£28k–35k',
      color: 'bg-yellow-700',
      path: '/eligibility/lse',
      highlights: [
        'Global leader in Economics, Finance, Politics, and Social Policy with very high international student share.[web:250]',
        'Prime London location near government, banks, and consulting firms.',
        'Highly competitive but strong ROI for careers in policy, consulting, and financial services.'
      ]
    },
    {
      name: 'University College London (UCL)',
      location: 'London',
      rank: 'Top 10 UK',
      salary: '£40k+',
      fees: '£28k–38k',
      color: 'bg-purple-800',
      path: '/eligibility/ucl',
      highlights: [
        'Large research‑intensive university with strengths in Engineering, Architecture, and Life Sciences.[web:247][web:250]',
        'Located in central London with strong global diversity and interdisciplinary options.',
        'Major contributor to medical, AI, and built‑environment research.'
      ]
    },
    {
      name: 'University of Edinburgh',
      location: 'Edinburgh',
      rank: 'Top 10 UK',
      salary: '£38k+',
      fees: '£25k–35k',
      color: 'bg-indigo-800',
      path: '/eligibility/edinburgh',
      highlights: [
        'Historical research university with a strong focus on Informatics, AI, and Medicine.[web:247][web:250]',
        'Edinburgh’s AI and data ecosystem offers strong ties to research institutes and startups.',
        'Popular with international students seeking a balance of prestige and quality of life.'
      ]
    },
    {
      name: 'King’s College London',
      location: 'London',
      rank: 'Top 10 UK',
      salary: '£38k+',
      fees: '£27k–36k',
      color: 'bg-rose-800',
      path: '/eligibility/kings-college-london',
      highlights: [
        'Major London university with strong healthcare, law, and business schools.[web:250]',
        'Close partnerships with NHS hospitals and central London employers.',
        'Attractive for health sciences, international relations, and management aspirants.'
      ]
    },
    {
      name: 'University of Manchester',
      location: 'Manchester',
      rank: 'Top 10 UK',
      salary: '£37k+',
      fees: '£25k–33k',
      color: 'bg-red-700',
      path: '/eligibility/manchester',
      highlights: [
        'Large Russell Group university with high research output and excellent employability.[web:247][web:250]',
        'Strong in Engineering, Materials, and Data Science with links to northern UK industry.',
        'Vibrant city campus with relatively lower living costs than London.'
      ]
    },
    {
      name: 'University of Bristol',
      location: 'Bristol',
      rank: 'Top 15 UK',
      salary: '£36k+',
      fees: '£25k–33k',
      color: 'bg-orange-700',
      path: '/eligibility/bristol',
      highlights: [
        'Highly regarded for Engineering, Aerospace, and Business with strong academic reputation.[web:248]',
        'Bristol has a fast‑growing tech and creative scene supporting internships and placements.',
        'Good balance of research intensity, campus experience, and graduate outcomes.'
      ]
    },
    {
      name: 'University of Warwick',
      location: 'Coventry',
      rank: '#1 UK for Business',
      salary: '£40k+',
      fees: '£27k–35k',
      color: 'bg-emerald-700',
      path: '/eligibility/warwick',
      highlights: [
        'Renowned Warwick Business School with elite Management, Economics, and Analytics programs.[web:248]',
        'Quant‑heavy coursework ideal for consulting, finance, and data careers.',
        'Strong industrial partnerships and London finance connections via Warwick Business School London.'
      ]
    },
    {
      name: 'University of Glasgow',
      location: 'Glasgow',
      rank: 'Top 15 UK',
      salary: '£35k+',
      fees: '£23k–32k',
      color: 'bg-teal-800',
      path: '/eligibility/glasgow',
      highlights: [
        'One of the oldest UK universities with strong Medicine, Engineering, and Research portfolios.[web:248]',
        'Significant international community and established research institutes.',
        'Attractive for students seeking history, affordability, and solid academic standing.'
      ]
    },
    {
      name: 'University of Birmingham',
      location: 'Birmingham',
      rank: 'Top 20 UK',
      salary: '£34k+',
      fees: '£23k–32k',
      color: 'bg-blue-700',
      path: '/eligibility/birmingham',
      highlights: [
        'Russell Group university with strong Engineering, Business, and Life Sciences.[web:248]',
        'Excellent industry collaboration with Midlands manufacturing, logistics, and healthcare sectors.',
        'Good value proposition with strong graduate outcomes and a campus‑style environment.'
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
              Elite <span className="text-blue-600">UK</span> Institutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
              Explore detailed profiles of top‑ranked UK universities for your 2026 intake.
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
              <div className="text-sm opacity-80 font-bold">Total Universities</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-900 dark:bg-slate-800 p-6 rounded-[2.5rem] text-white">
            <div className="p-3 bg:white/20 rounded-2xl">
              <Briefcase />
            </div>
            <div>
              <div className="text-2xl font-black">2 Years</div>
              <div className="text-sm opacity-80 font-bold">Post‑Study Work (PSW)</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-amber-500 p-6 rounded-[2.5rem] text-white">
            <div className="p-3 bg-white/20 rounded-2xl">
              <GraduationCap />
            </div>
            <div>
              <div className="text-2xl font-black">STEM + Business</div>
              <div className="text-sm opacity-80 font-bold">Priority Tracks</div>
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

export default UKUniversities;
