# Components Country Structure - Global Overview

This document provides a comprehensive overview of the **components-country/** structure, currently supporting multiple countries: 🇺🇸 **USA**, 🇦🇹 **Austria**, and 🇵🇱 **Poland**.

---

# 🇺🇸 USA Components Structure - Overview

## 📂 Directory Structure
```
components-country/us/
├── us.jsx                    (Main US universities listing page)
├── EligibilityDetail.jsx     (General eligibility details modal/page)
└── eligibility/              (Individual university eligibility components)
    ├── HarvardEligibility.jsx
    ├── StanfordEligibility.jsx
    ├── MITEligibility.jsx
    ├── CornellEligibility.jsx
    ├── CarnegiemellonEligibility.jsx
    ├── ColumbiaEligibility.jsx
    ├── PrincetonEligibility.jsx
    ├── YaleEligibility.jsx
    ├── PurdueEligibility.jsx
    ├── UTAustinEligibility.jsx
    ├── UWEligibility.jsx
    ├── UCBerkeleyEligibility.jsx
    ├── UCLAEligibility.jsx
    ├── WhartonEligibility.jsx
    └── eorgiaTechEligibility.jsx  (Note: Possibly "GeorgiaTechEligibility")
```

**Focus:** Undergraduate & Graduate (MS/PhD)

## 🎯 Component Breakdown

### 1. **us.jsx** - Main Landing Component
- **Purpose:** Displays all US universities in a card-based grid layout
- **Features:**
  - University cards showing rank, name, location
  - Quick stats (Average Salary, Acceptance Rate, etc.)
  - Search/Filter functionality
  - Navigation to individual university eligibility pages
- **Key Elements:** 
  - UniversityCard component for each university
  - Color-coded cards based on university
  - Hover effects and animations

### 2. **EligibilityDetail.jsx** - General Eligibility Page
- **Purpose:** Shows eligibility requirements for a selected university
- **Features:**
  - GPA requirements
  - IELTS/TOEFL scores
  - GRE/GMAT requirements
  - Required documents (LORs, SOP, etc.)
  - Application deadlines
  - Uses URL parameters to display different universities
- **Route:** Typically accessed via `/country/us/:uniName`

### 3. **eligibility/** - Individual University Components
- **Purpose:** Detailed eligibility pages for each specific university
- **Features Per Component:**
  - In-depth eligibility criteria
  - Program-specific requirements
  - Application timeline
  - Special requirements
  - Framer Motion animations for smooth UX
  - Mouse tracking for parallax effects
  - Responsive design with dark mode support
- **Pattern:** Each file follows naming convention `{UniversityName}Eligibility.jsx`

## 🔄 User Flow

1. User lands on **us.jsx** → sees all universities
2. User clicks on a university card → navigates to **EligibilityDetail.jsx** OR individual **{University}Eligibility.jsx**
3. Displays eligibility requirements, deadlines, and application info
4. User can navigate back or explore other universities

## 🎨 Design Patterns

- **Card-based Layout** for universities
- **Color-coded sections** for visual hierarchy
- **Responsive Grid** (2-3 columns based on screen size)
- **Dark mode support** using Tailwind dark classes
- **Animations** using Framer Motion
- **Icons** from lucide-react for visual cues

## 📊 Data Structure

Each university typically includes:
```javascript
{
  name: "University Name",
  rank: "Ranking",
  location: "City, State",
  color: "bg-color-class",
  gpa: "Min GPA",
  ielts: "IELTS Score",
  gre_gmat: "Test Requirements",
  docs: ["Required Documents"],
  deadline: "Application Deadline"
}
```

## 🚀 Key Features

✅ University comparison cards  
✅ Individual eligibility pages  
✅ Search/Filter functionality  
✅ Dark mode support  
✅ Responsive design  
✅ Smooth animations  
✅ Application deadline tracking  

---

# 🇦🇹 AUSTRIA Components Structure - Overview

*Higher Education: Master's / PhD / Research*

## 📂 Directory Structure
```
components-country/austria/
├── austria.jsx                         (Main Austria universities listing page)
├── EligibilityDetail.jsx               (General eligibility details modal/page)
└── eligibility/                        (Individual university eligibility components)
    ├── UniversityOfViennaEligibility.jsx
    ├── TUWienEligibility.jsx
    ├── TUGrazEligibility.jsx
    ├── JKUEligibility.jsx
    ├── UniversityOfInnsbruckEligibility.jsx
    ├── WUWienEligibility.jsx
    └── UniversityOfGrazEligibility.jsx
```

**Focus:** Master's / PhD / Research Programs | **Highlight:** Low-tuition, EU-friendly

## 🎯 Component Breakdown

### 1. **austria.jsx** - Main Landing Component
- **Purpose:** Displays Austria's top public universities for higher education
- **Features:**
  - Card-based university grid
  - Focus on research & MS/PhD suitability
  - Filter by domain (AI, Engineering, Physics, Business)
  - Low-tuition highlight badges
- **Key Elements:**
  - UniversityCard component
  - Research score indicator
  - Hover-based micro-animations (Framer Motion)

### 2. **EligibilityDetail.jsx** - General Eligibility Page
- **Purpose:** Central eligibility renderer for Austrian universities
- **Features:**
  - GPA (ECTS-aware)
  - IELTS / TOEFL (English-taught programs)
  - GRE (mostly optional)
  - SOP, LORs, CV, Research Proposal (for PhD)
  - Semester-wise deadlines
- **Route:** `/country/austria/:uniName`

### 3. **eligibility/** - Individual University Components
- **Purpose:** Deep-dive eligibility per university
- **Features Per Component:**
  - Program-specific eligibility (MS vs PhD)
  - Research groups & labs info
  - Tuition fee breakdown (EU vs Non-EU)
  - Admission process flow
  - Motion-based transitions
  - Fully responsive + dark mode
- **Pattern:** `{UniversityName}Eligibility.jsx`

## 🔄 User Flow (Austria)
1. User lands on **austria.jsx**
2. Filters by domain or degree level
3. Clicks a university card
4. Routed to **EligibilityDetail.jsx** or direct eligibility component
5. Reviews eligibility → navigates back or compares

---

# 🇵🇱 POLAND Components Structure - Overview

*Higher Education: Master's / PhD / Research*

## 📂 Directory Structure
```
components-country/poland/
├── poland.jsx                          (Main Poland universities listing page)
├── EligibilityDetail.jsx               (General eligibility details modal/page)
└── eligibility/                        (Individual university eligibility components)
    ├── UniversityOfWarsawEligibility.jsx
    ├── JagiellonianEligibility.jsx
    ├── WarsawTechEligibility.jsx
    ├── AGHEligibility.jsx
    ├── WroclawTechEligibility.jsx
    ├── GdanskTechEligibility.jsx
    └── AdamMickiewiczEligibility.jsx
```

**Focus:** Master's / PhD / Research Programs | **Highlight:** Affordable, Strong Engineering & AI

## 🎯 Component Breakdown

### 1. **poland.jsx** - Main Landing Component
- **Purpose:** Lists Poland's best universities for affordable higher education
- **Features:**
  - Strong engineering & AI emphasis
  - Cost-to-ROI indicators
  - English-taught program badges
  - Acceptance flexibility tags
- **Key Elements:**
  - UniversityCard
  - Tuition range display
  - Industry-alignment icons

### 2. **EligibilityDetail.jsx** - General Eligibility Page
- **Purpose:** Unified eligibility renderer for Polish universities
- **Features:**
  - GPA (percentage-based evaluation)
  - IELTS/TOEFL (mandatory for most)
  - GRE (rare, program-specific)
  - SOP, CV, Passport, Academic Transcripts
  - Intake-wise deadlines
- **Route:** `/country/poland/:uniName`

### 3. **eligibility/** - Individual University Components
- **Purpose:** University-specific eligibility intelligence
- **Features Per Component:**
  - MS vs PhD requirements
  - Research & industry collaboration info
  - Application steps timeline
  - Visa-friendly highlights
  - Smooth animations + parallax
- **Pattern:** `{UniversityName}Eligibility.jsx`

---

# 🎨 Shared Design Patterns

All country components follow consistent patterns:

- **Card-based grid system** for university listings
- **Domain-first filtering** (AI, CS, Physics, Business, Engineering)
- **Dark mode support** using Tailwind dark classes
- **Framer Motion animations** for smooth transitions
- **Lucide-react icons** for visual cues
- **Clean academic color palette**
- **Minimal but cinematic UX**

---

# 📊 Universal Data Structure

Each university component follows this consistent data model:

```javascript
{
  name: "University Name",
  country: "USA | Austria | Poland",
  rank: "QS / THE Rank",
  location: "City, Country",
  degree_focus: ["MS", "PhD"],
  domains: ["AI", "Engineering", "Physics", "Business"],
  gpa: "Minimum GPA",
  ielts: "IELTS Requirement",
  gre: "Optional / Not Required / Mandatory",
  tuition: "USD / EUR per year",
  docs: ["SOP", "LOR", "CV", "Transcripts", "Research Proposal"],
  deadline: "Intake-wise or Semester-based"
}
```

---

# 🚀 Key Features (All Countries)

✅ Country-specific university aggregations  
✅ Higher-education focused (no UG clutter)  
✅ Individual eligibility intelligence  
✅ Domain-driven discovery  
✅ Dark mode + smooth animations  
✅ Responsive design across all devices  
✅ Scalable modular architecture  
✅ Cost & ROI indicators  

---

**Note:** This structure is designed for scalability - new countries can be easily added by creating new country folders with the same `{country}.jsx → EligibilityDetail.jsx → eligibility/` pattern. Universities within each country can be added by creating new eligibility components and updating the country data source.
