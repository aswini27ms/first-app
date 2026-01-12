import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './components-home/Home';
import Services from './pages/Services'; 
import USUniversities from './components-country/us/us';
import USEligibilityDetail from './components-country/us/EligibilityDetail';
import AustriaUniversities from './components-country/austria/austria';
import AustriaEligibilityDetail from './components-country/austria/EligibilityDetail';
import PolandUniversities from './components-country/poland/poland';
import PolandEligibilityDetail from './components-country/poland/EligibilityDetail';

// Individual University Eligibility Imports (US)
// Make sure these files exist in your: src/components-country/us/eligibility/ directory
import HarvardEligibility from './components-country/us/eligibility/HarvardEligibility';
// Import other universities as you create them:
import StanfordEligibility from './components-country/us/eligibility/StanfordEligibility';
import MITEligibility from './components-country/us/eligibility/MITEligibility';
import PrincetonEligibility from './components-country/us/eligibility/PrincetonEligibility';
import YaleEligibility from './components-country/us/eligibility/YaleEligibility';
import CarnegiemellonEligibility from './components-country/us/eligibility/CarnegiemellonEligibility';
import UCBerkeleyEligibility from './components-country/us/eligibility/UCBerkeleyEligibility';
import WhartonEligibility from './components-country/us/eligibility/WhartonEligibility';
import ColumbiaEligibility from './components-country/us/eligibility/ColumbiaEligibility';
import CornellEligibility from './components-country/us/eligibility/CornellEligibility';
import GeorgiaTechEligibility from './components-country/us/eligibility/eorgiaTechEligibility';
import UCLAEligibility from './components-country/us/eligibility/UCLAEligibility';
import UTAustinEligibility from './components-country/us/eligibility/UTAustinEligibility';
import UWEligibility from './components-country/us/eligibility/UWEligibility';
import PurdueEligibility from './components-country/us/eligibility/PurdueEligibility';


// Placeholder for the Enquiry Page
const Enquiry = () => (
  <div className="pt-40 pb-20 text-center min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 transition-colors duration-500">
    <div className="max-w-2xl mx-auto px-6">
      <span className="text-[#e32926] font-bold tracking-widest text-xs uppercase">Get Started</span>
      <h1 className="text-5xl font-black mt-4 mb-6">Ready to Start Your Journey?</h1>
      <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed">
        Our specialized enrollment form is currently under construction. 
        Soon you'll be able to register for global counseling right here!
      </p>
      <div className="mt-12 p-8 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-[2rem]">
         <p className="text-sm font-medium italic text-gray-400">Registration Form Interface Coming Soon...</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors duration-500 selection:bg-[#e32926] selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            
            {/* USA Universities Landing & Eligibility Pages */}
            <Route path="/countries/us" element={<USUniversities />} />
            <Route path="/country/us/:uniName" element={<USEligibilityDetail />} />
            
            {/* Austria Universities Landing & Eligibility Pages */}
            <Route path="/countries/austria" element={<AustriaUniversities />} />
            <Route path="/country/austria/:uniName" element={<AustriaEligibilityDetail />} />
            
            {/* Poland Universities Landing & Eligibility Pages */}
            <Route path="/countries/poland" element={<PolandUniversities />} />
            <Route path="/country/poland/:uniName" element={<PolandEligibilityDetail />} />
            
            {/* Individual Eligibility Routes (US Legacy) */}
            {/* These paths MUST match the 'path' property in your USUniversities.jsx data array */}
            <Route path="/eligibility/harvard" element={<HarvardEligibility />} />
            <Route path="/eligibility/stanford" element={<StanfordEligibility />} />
            <Route path="/eligibility/mit" element={<MITEligibility />} /> 
            <Route path="/eligibility/princeton" element={<PrincetonEligibility />} />
            <Route path="/eligibility/yale" element={<YaleEligibility />} />
            <Route path="/eligibility/carnegie-mellon" element={<CarnegiemellonEligibility />} />
            <Route path="/eligibility/uc-berkeley" element={<UCBerkeleyEligibility />} />
            <Route path="/eligibility/wharton" element={<WhartonEligibility />} />
            <Route path="/eligibility/columbia" element={<ColumbiaEligibility />} />
            <Route path="/eligibility/cornell" element={<CornellEligibility />} />
            <Route path="/eligibility/georgia-tech" element={<GeorgiaTechEligibility />} />
            <Route path="/eligibility/ucla" element={<UCLAEligibility />} />
            <Route path="/eligibility/ut-austin" element={<UTAustinEligibility />} />
            <Route path="/eligibility/university-of-washington" element={<UWEligibility />} />
            <Route path="/eligibility/purdue" element={<PurdueEligibility />} />

            {/* Add more routes here as you build the files:
            
            
            */}
            
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>

        {/* Premium Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;