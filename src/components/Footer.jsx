import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  ArrowUp, Globe, ShieldCheck, Zap
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: ['About Us', 'Our Services', 'Success Stories', 'Contact Us'],
    destinations: ['Study in USA', 'Study in UK', 'Study in Germany', 'Study in Canada'],
    support: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Help Center']
  };

  return (
    <footer className="relative bg-white dark:bg-slate-950 pt-24 pb-12 overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-[120px]"></div>
        {/* Subtle Dot Grid */}
        <div className="absolute inset-0 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background-image:radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-flex items-center gap-1 group">
              <span className="text-4xl font-black text-[#e32926] tracking-tighter transition-transform group-hover:-rotate-2">
                edvoy
              </span>
              <div className="w-2 h-2 bg-[#ff7a1a] rounded-full mt-3 animate-bounce"></div>
            </Link>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed font-medium">
              We simplify the complex world of international education, making your dreams accessible.
            </p>
            {/* Trust Badges */}
            <div className="flex items-center gap-4 py-2">
              <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600">
                <ShieldCheck size={20} />
              </div>
              <div className="p-2 bg-orange-50 dark:bg-slate-800 rounded-lg text-orange-600">
                <Zap size={20} />
              </div>
              <div className="p-2 bg-green-50 dark:bg-slate-800 rounded-lg text-green-600">
                <Globe size={20} />
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#e32926] rounded-full"></span> {title}
              </h4>
              <ul className="space-y-5">
                {links.map((link) => {
                  // Map label to route
                  let to = '#';
                  if (title === 'company' && link === 'About Us') {
                    to = '/about'; // About page route
                  } else if (title === 'company' && link === 'Our Services') {
                    to = '/services';
                  } else if (title === 'company' && link === 'Success Stories') {
                    to = '/success-stories';
                  } else if (title === 'company' && link === 'Contact Us') {
                    to = '/contact';
                  } else if (title === 'destinations' && link === 'Study in USA') {
                    to = '/countries/us';
                  } else if (title === 'destinations' && link === 'Study in UK') {
                    to = '/countries/uk';
                  } else if (title === 'destinations' && link === 'Study in Germany') {
                    to = '/study/germany';
                  } else if (title === 'destinations' && link === 'Study in Canada') {
                    to = '/study/canada';
                  } else if (title === 'support' && link === 'Privacy Policy') {
                    to = '/privacy-policy';
                  } else if (title === 'support' && link === 'Terms of Service') {
                    to = '/terms-of-service';
                  } else if (title === 'support' && link === 'Cookie Policy') {
                    to = '/cookies';
                  } else if (title === 'support' && link === 'Help Center') {
                    to = '/help-center';
                  }

                  return (
                    <li key={link}>
                      <Link
                        to={to}
                        className="group text-gray-600 dark:text-slate-400 hover:text-[#e32926] dark:hover:text-white transition-all flex items-center"
                      >
                        <span className="relative">
                          {link}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e32926] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials & Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 dark:border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link
                key={i}
                to="#"
                className="relative group p-3 rounded-xl bg-gray-50 dark:bg-slate-900 text-gray-500 dark:text-slate-400 hover:text-white transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#e32926] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <Icon size={22} className="relative z-10 transition-transform group-hover:scale-110" />
              </Link>
            ))}
          </div>

          <p className="text-gray-500 dark:text-slate-500 text-sm font-medium text-center">
            © 2026 <span className="text-gray-900 dark:text-white font-bold tracking-tight">EDVOY</span>. Built for the future of education.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-slate-950 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#e32926] dark:hover:bg-[#e32926] dark:hover:text-white transition-all"
          >
            Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
