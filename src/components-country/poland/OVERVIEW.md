# 🇵🇱 POLAND Components Structure – Overview

*Higher Education: Master's / PhD / Research*

## 📂 Directory Structure

```
components-country/poland/
├── poland.jsx                     (Main Poland universities listing page)
├── EligibilityDetail.jsx          (General eligibility details modal/page)
└── eligibility/
    ├── UniversityOfWarsawEligibility.jsx
    ├── JagiellonianEligibility.jsx
    ├── WarsawTechEligibility.jsx
    ├── AGHEligibility.jsx
    ├── WroclawTechEligibility.jsx
    ├── GdanskTechEligibility.jsx
    └── AdamMickiewiczEligibility.jsx
```

---

## 🎯 Component Breakdown

### 1. **poland.jsx** – Main Landing Component

**Purpose:** Lists Poland's best universities for affordable higher education

**Features:**
- Strong engineering & AI emphasis
- Cost-to-ROI indicators
- English-taught program badges
- Acceptance flexibility tags

**Key Elements:**
- UniversityCard
- Tuition range display
- Industry-alignment icons

---

### 2. **EligibilityDetail.jsx** – General Eligibility Page

**Purpose:** Unified eligibility renderer for Polish universities

**Features:**
- GPA (percentage-based evaluation)
- IELTS/TOEFL (mandatory for most)
- GRE (rare, program-specific)
- SOP, CV, Passport, Academic Transcripts
- Intake-wise deadlines

**Route Example:**
```
/country/poland/:uniName
```

---

### 3. **eligibility/** – Individual University Components

**Purpose:** University-specific eligibility intelligence

**Features Per Component:**
- MS vs PhD requirements
- Research & industry collaboration info
- Application steps timeline
- Visa-friendly highlights
- Smooth animations + parallax

**Pattern:**
```
{UniversityName}Eligibility.jsx
```

---

## 🔄 User Flow (Poland)

1. User lands on **poland.jsx**
2. Filters by domain or degree level
3. Clicks a university card
4. Routed to **EligibilityDetail.jsx** or direct eligibility component
5. Reviews eligibility → navigates back or compares

---

## 🎨 Design Pattern

- Card-based grid system
- Domain-first filtering (AI, CS, Physics, Business)
- Cost-to-ROI badges
- Visa & industry collaboration highlights
- Dark mode support
- Framer Motion animations
- Lucide-react icons

---

## 📊 Data Structure

```javascript
{
  name: "University Name",
  country: "Poland",
  rank: "QS / THE Rank",
  location: "City, Poland",
  degree_focus: ["MS", "PhD"],
  domains: ["AI", "Engineering", "Physics"],
  gpa: "Minimum GPA",
  ielts: "IELTS Requirement",
  gre: "Optional / Not Required",
  tuition: "€ per year",
  docs: ["SOP", "CV", "Transcripts"],
  deadline: "Intake-wise"
}
```

---

## 🚀 Key Features

✅ Affordable higher education (no UG clutter)  
✅ Cost-to-ROI indicators  
✅ Strong engineering & AI programs  
✅ Individual eligibility intelligence  
✅ Visa-friendly highlights  
✅ Dark mode + smooth animations  
✅ Fully responsive design  

---

**Note:** Poland component follows the same modular architecture as other country components for easy maintenance and scalability.
