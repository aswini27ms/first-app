# 🇦🇹 AUSTRIA Components Structure – Overview

*Higher Education: Master's / PhD / Research*

## 📂 Directory Structure

```
components-country/austria/
├── austria.jsx                    (Main Austria universities listing page)
├── EligibilityDetail.jsx          (General eligibility details modal/page)
└── eligibility/
    ├── UniversityOfViennaEligibility.jsx
    ├── TUWienEligibility.jsx
    ├── TUGrazEligibility.jsx
    ├── JKUEligibility.jsx
    ├── UniversityOfInnsbruckEligibility.jsx
    ├── WUWienEligibility.jsx
    └── UniversityOfGrazEligibility.jsx
```

---

## 🎯 Component Breakdown

### 1. **austria.jsx** – Main Landing Component

**Purpose:** Displays Austria's top public universities for higher education

**Features:**
- Card-based university grid
- Focus on research & MS/PhD suitability
- Filter by domain (AI, Engineering, Physics, Business)
- Low-tuition highlight badges

**Key Elements:**
- UniversityCard component
- Research score indicator
- Hover-based micro-animations (Framer Motion)

---

### 2. **EligibilityDetail.jsx** – General Eligibility Page

**Purpose:** Central eligibility renderer for Austrian universities

**Features:**
- GPA (ECTS-aware)
- IELTS / TOEFL (English-taught programs)
- GRE (mostly optional)
- SOP, LORs, CV, Research Proposal (for PhD)
- Semester-wise deadlines

**Route Example:**
```
/country/austria/:uniName
```

---

### 3. **eligibility/** – Individual University Components

**Purpose:** Deep-dive eligibility per university

**Features Per Component:**
- Program-specific eligibility (MS vs PhD)
- Research groups & labs info
- Tuition fee breakdown (EU vs Non-EU)
- Admission process flow
- Motion-based transitions
- Fully responsive + dark mode

**Naming Convention:**
```
{UniversityName}Eligibility.jsx
```

---

## 🔄 User Flow (Austria)

1. User lands on **austria.jsx**
2. Filters by domain or degree level
3. Clicks a university card
4. Routed to **EligibilityDetail.jsx** or direct eligibility component
5. Reviews eligibility → navigates back or compares

---

## 🎨 Design Pattern

- Card-based university grid
- Domain filtering (AI, Engineering, Physics, Business)
- Research score badges
- EU/Non-EU tuition indicators
- Dark mode support
- Framer Motion animations
- Lucide-react icons

---

## 📊 Data Structure

```javascript
{
  name: "University Name",
  country: "Austria",
  rank: "QS / THE Rank",
  location: "City, Austria",
  degree_focus: ["MS", "PhD"],
  domains: ["AI", "Engineering", "Physics"],
  gpa: "Minimum GPA",
  ielts: "IELTS Requirement",
  gre: "Optional / Not Required",
  tuition: "€ per year",
  docs: ["SOP", "LOR", "CV", "Transcripts"],
  deadline: "Semester-wise"
}
```

---

## 🚀 Key Features

✅ Higher-education focused (no UG clutter)  
✅ EU/Non-EU tuition breakdowns  
✅ Individual eligibility intelligence  
✅ Domain-driven discovery  
✅ Research collaboration highlights  
✅ Dark mode + smooth animations  
✅ Fully responsive design  

---

**Note:** Austria component follows the same modular architecture as other country components for easy maintenance and scalability.
