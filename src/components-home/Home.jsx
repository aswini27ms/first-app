import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Globe,
  Plane,
  GraduationCap,
  Languages,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Calendar,
  DollarSign
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredDestination, setHoveredDestination] = useState(null);
  const navigate = useNavigate();

  const slides = [
    {
      image: 'assets/hero-germany.jpg',
      title: 'Study in Germany',
      subtitle: 'Career Without Borders: International placement and visa assistance.',
      gradient: 'from-blue-600/80 to-purple-600/80'
    },
    {
      image: 'assets/hero-uk.jpg',
      title: 'Study in the UK',
      subtitle: 'Your future is Here. Study Abroad. Simplified.',
      gradient: 'from-red-600/80 to-orange-600/80'
    },
    {
      image: 'assets/hero-us.jpg',
      title: 'Explore the US',
      subtitle: 'Join top-tier universities with expert scholarship guidance.',
      gradient: 'from-indigo-600/80 to-pink-600/80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const services = [
    { icon: GraduationCap, title: 'University Selection', desc: 'Find your perfect match' },
    { icon: Languages, title: 'Language Training', desc: 'IELTS, TOEFL & more' },
    { icon: Plane, title: 'Visa Assistance', desc: 'End-to-end support' },
    { icon: Award, title: 'Scholarships', desc: 'Financial aid guidance' }
  ];

  const destinations = [
    {
      name: 'United States',
      code: 'US',
      image: 'assets/destinations/us.webp',
      universities: '4000+',
      programs: 'Business, Tech, Medicine',
      fees: '$15k - $60k/Year',
      intake: 'Fall / Spring'
    },
    {
      name: 'United Kingdom',
      code: 'UK',
      image: 'assets/destinations/uk.jpeg',
      universities: '160+',
      programs: 'Law, Arts, Engineering',
      fees: '£12k - £35k/Year',
      intake: 'Sept / Jan'
    },
    {
      name: 'Canada',
      code: 'CA',
      image: 'assets/destinations/canada.jpg',
      universities: '220+',
      programs: 'Tech, Business, Healthcare',
      fees: '$13k - $30k/Year',
      intake: 'Sept / Jan / May'
    },
    {
      name: 'Germany',
      code: 'DE',
      image: 'assets/destinations/germany.jpg',
      universities: '380+',
      programs: 'Engineering, Sciences, Arts',
      fees: '€0 - €3k/Sem',
      intake: 'Oct / April'
    },
    {
      name: 'New Zealand',
      code: 'NZ',
      image: 'assets/destinations/newzealand.avif',
      universities: '40+',
      programs: 'Tourism, Agriculture, Tech',
      fees: '$18k - $35k/Year',
      intake: 'Feb / July'
    },
    {
      name: 'Australia',
      code: 'AU',
      image: 'assets/destinations/australia.jpg',
      universities: '150+',
      programs: 'Business, Engineering, Health',
      fees: '$20k - $45k/Year',
      intake: 'Feb / July'
    },
    {
      name: 'Austria',
      code: 'AT',
      image: 'assets/destinations/austria.jpg',
      universities: '70+',
      programs: 'Music, Tech, Economics',
      fees: '€700 - €1500/Sem',
      intake: 'Oct / March'
    },
    {
      name: 'Poland',
      code: 'PL',
      image: 'assets/destinations/poland.webp',
      universities: '130+',
      programs: 'Medicine, Engineering, IT',
      fees: '€2k - €8k/Year',
      intake: 'Oct / Feb'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 font-sans text-gray-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
      {/* Floating Assistance Button */}
      <button className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-[#e32926] to-red-600 dark:from-red-700 dark:to-red-800 text-white px-7 py-4 rounded-full shadow-2xl hover:shadow-red-500/50 dark:hover:shadow-red-600/50 transition-all transform hover:scale-110 active:scale-95 animate-pulse">
        <MessageCircle size={22} fill="white" />
        <span className="font-bold text-sm tracking-wide">Get Help Now</span>
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 dark:bg-green-500 rounded-full border-2 border-white animate-ping"></span>
      </button>

      {/* Hero Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} z-10 mix-blend-multiply`}
            ></div>
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
              <div
                className={`mb-6 transition-all duration-1000 delay-200 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-12 opacity-0'
                }`}
              >
                <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-sm font-semibold mb-6">
                  ✨ Your Global Education Partner
                </div>
              </div>

              <h1
                className={`text-white text-6xl md:text-8xl font-black mb-6 tracking-tight transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
              >
                {slide.title}
              </h1>

              <p
                className={`text-white/95 text-xl md:text-3xl font-light max-w-4xl mb-12 transition-all duration-1000 delay-500 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Fixed CTA Buttons */}
        <div className="pointer-events-none absolute left-1/2 bottom-20 -translate-x-1/2 z-30">
          <div className="pointer-events-auto flex flex-wrap justify-center gap-8">
            <button className="relative group px-16 py-6 rounded-full font-black text-lg text-white overflow-hidden bg-gradient-to-r from-[#ff7a1a] via-orange-500 to-[#ff3d00] shadow-[0_0_40px_rgba(255,122,26,0.6)] hover:shadow-[0_0_80px_rgba(255,122,26,0.9)] transition-shadow duration-500 ease-out">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="absolute inset-0 rounded-full border-2 border-orange-300 opacity-0 group-hover:opacity-100 animate-ping"></span>
              <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></span>
              <span className="relative z-10 tracking-wide">Enquire Now</span>
            </button>

            <button className="relative group px-16 py-6 rounded-full font-black text-lg text-white backdrop-blur-xl border-2 border-white/40 bg-white/10 hover:bg-white hover:text-gray-900 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_70px_rgba(255,255,255,0.6)] transition-shadow duration-500 ease-out">
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/30 to-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
              <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-100 transition-transform duration-300"></span>
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle size={22} className="group-hover:animate-pulse" />
                Chat with Us
              </span>
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-5 bg-white/20 dark:bg-slate-800/30 backdrop-blur-lg rounded-full text-white hover:bg.white hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-white transition-all group shadow-xl border border-white/30 dark:border-slate-600/30"
        >
          <ChevronLeft
            size={28}
            className="group-hover:-translate-x-1 transition-transform"
            strokeWidth={3}
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-5 bg-white/20 dark:bg-slate-800/30 backdrop-blur-lg rounded-full text-white hover:bg.white hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-white transition-all group shadow-xl border border-white/30 dark:border-slate-600/30"
        >
          <ChevronRight
            size={28}
            className="group-hover:translate-x-1 transition-transform"
            strokeWidth={3}
          />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === currentSlide
                  ? 'w-12 bg-white dark:bg-orange-400'
                  : 'w-6 bg-white/40 dark:bg-white/20 hover:bg.white/60 dark:hover:bg.white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#e32926]/5 dark:bg-[#e32926]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e32926] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e32926]"></span>
              </span>
              <span className="text-[#e32926] dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                Expert Solutions
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              Comprehensive support tailored for your international education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-10 border border-gray-100 dark:border-slate-700 shadow-sm dark:shadow-slate-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e32926]/10 dark:hover:shadow-[#e32926]/20 hover:-translate-y-3 overflow-hidden"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-[#e32926]/5 to-orange-500/5 dark:from-[#e32926]/10 dark:to-orange-500/10 transition-all duration-700 group-hover:scale-[4]" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-slate-700 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-[#e32926] group-hover:to-orange-600 group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500 shadow-inner">
                      <Icon
                        size={30}
                        className="text-gray-700 dark:text-slate-300 group-hover:text-white transition-colors duration-500"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-[#e32926] dark:group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                      {service.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gray-50 dark:from-slate-700 to-transparent opacity-50 group-hover:opacity-0 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
              STUDY DESTINATIONS
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore world-class education opportunities across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, idx) => (
              <div
                key={destination.name}
                onMouseEnter={() => setHoveredDestination(destination.code)}
                onMouseLeave={() => setHoveredDestination(null)}
                className="group relative bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer h-[480px]"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  transform:
                    hoveredDestination === destination.code ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                <div className="absolute inset-0">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform:
                        hoveredDestination === destination.code ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        hoveredDestination === destination.code
                          ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)'
                          : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)'
                    }}
                  ></div>
                </div>

                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                    <span className="text-2xl font-black text-gray-900">{destination.code}</span>
                  </div>
                </div>

                <div
                  className="absolute top-6 right-6 z-20 text-5xl transition-transform duration-300"
                  style={{
                    transform:
                      hoveredDestination === destination.code
                        ? 'scale(1.2) rotate(5deg)'
                        : 'scale(1)'
                  }}
                >
                  {destination.flag}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3
                    className="text-white text-3xl font-black mb-3 transition-all duration-300"
                    style={{
                      transform:
                        hoveredDestination === destination.code ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                  >
                    {destination.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap size={18} className="text-orange-400" />
                    <span className="text-white/90 text-base font-semibold">
                      {destination.universities} Universities
                    </span>
                  </div>

                  <div
                    className="space-y-3 transition-all duration-500"
                    style={{
                      opacity: hoveredDestination === destination.code ? 1 : 0,
                      maxHeight: hoveredDestination === destination.code ? '200px' : '0px',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <BookOpen size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm leading-relaxed">
                        {destination.programs}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm font-medium">
                        {destination.fees}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">
                        Next Intake: {destination.intake}
                      </span>
                    </div>

                    <button
                      className="w-full mt-4 bg-gradient-to-r from-[#e32926] to-red-600 hover:from-red-600 hover:to-[#e32926] text-white py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                      onClick={() => {
                        if (destination.code === 'US') {
                          navigate('/countries/us');
                        } else if (destination.code === 'AU') {
                          navigate('/countries/australia');
                        } else if (destination.code === 'AT') {
                          navigate('/countries/austria');
                        } else if (destination.code === 'PL') {
                          navigate('/countries/poland');
                        }
                        else if (destination.code === 'DE') {
                          navigate('/countries/germany');
                        }
                        else if (destination.code === 'CA') {
                          navigate('/countries/canada');
                        }
                        else if (destination.code === 'NZ') {
                          navigate('/countries/newzealand');
                        } else if (destination.code === 'UK') {
                          // UK route -> connect to components-country/uk/uk.jsx
                          navigate('/countries/uk');
                        }
                      }}
                    >
                      Explore Programs
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 z-10"
                  style={{
                    transform:
                      hoveredDestination === destination.code
                        ? 'translateX(100%)'
                        : 'translateX(-100%)'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="assets/cta-bg.avif"
            alt="Study Abroad Background"
            className="w-full h-full object-cover blur-sm md:blur dark:brightness-75 transition-all duration-300"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-black/20 dark:bg-black/40 transition-colors duration-300"></div>

        <div className="absolute inset-0 z-20 opacity-15 dark:opacity-10 pointer-events-none transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white dark:bg-slate-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white dark:bg-slate-800 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-30 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-black dark:text-white mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-black/90 dark:text-slate-200 mb-12 max-w-2xl mx-auto">
            Join thousands of students who achieved their dreams with our guidance
          </p>

          <button className="relative group bg-white dark:bg-slate-800 text-[#e32926] dark:text-orange-400 px-14 py-6 rounded-full font-black text-lg shadow-[0_20px_60px_rgba(255,255,255,0.35)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_80px_rgba(255,255,255,0.7)] dark:hover:shadow-[0_25px_80px_rgba(227,41,38,0.3)] ring-2 ring-white/60 dark:ring-slate-700/60 hover:ring-[#e32926]/60 dark:hover:ring-orange-400/60 transition-all duration-500 hover:-translate-y-2 hover:scale-110 active:scale-95 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via.white/60 dark:via-slate-600/60 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out opacity-70"></span>
            <span className="relative z-10 text-black dark:text-white">
              Book Free Consultation
            </span>
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;