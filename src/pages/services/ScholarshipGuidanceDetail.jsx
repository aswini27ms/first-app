import React from 'react';
import ServiceDetail from './ServiceDetail';
import { Award, DollarSign, FileCheck, Calendar, TrendingUp } from 'lucide-react';

const ScholarshipGuidanceDetail = () => {
  return (
    <ServiceDetail
      serviceId="scholarships"
      title="Scholarship Guidance"
      description="Don't let finances hold you back. We identify and assist with global scholarship applications."
      icon={Award}
      gradient="from-amber-400 to-orange-600"
      color="amber"
      overview="Our Scholarship Guidance service helps students identify and secure financial aid opportunities worldwide. We maintain an extensive database of scholarships, grants, and funding options across different countries and universities. Our team assists with scholarship research, application preparation, and submission to maximize your chances of receiving financial support."
      processSteps={[
        {
          title: "Scholarship Research & Matching",
          description: "We analyze your profile and identify all eligible scholarships, grants, and funding opportunities that match your background and goals.",
          duration: "1 week"
        },
        {
          title: "Scholarship Application Strategy",
          description: "We prioritize scholarships based on eligibility, award amount, and success probability. We create a strategic application plan.",
          duration: "3-5 days"
        },
        {
          title: "Application Document Preparation",
          description: "We help prepare scholarship-specific documents including essays, financial statements, and recommendation letters tailored to each scholarship.",
          duration: "2-3 weeks"
        },
        {
          title: "Application Submission & Follow-up",
          description: "We ensure timely submission of all scholarship applications and follow up with scholarship committees when needed.",
          duration: "Ongoing"
        },
        {
          title: "Award Management & Negotiation",
          description: "We help you understand award terms, negotiate better packages when possible, and manage multiple scholarship offers.",
          duration: "As needed"
        }
      ]}
      prerequisites={[
        "Admission offer or pending application",
        "Strong academic record (varies by scholarship)",
        "Financial need documentation",
        "Extracurricular achievements",
        "Leadership and community service records"
      ]}
      deliverables={[
        {
          title: "Scholarship Match Report",
          description: "List of 10-20 eligible scholarships with eligibility criteria, award amounts, and deadlines"
        },
        {
          title: "Scholarship Essays",
          description: "Well-crafted, personalized scholarship essays for each application"
        },
        {
          title: "Financial Aid Package",
          description: "Analysis of total financial aid received and remaining costs"
        },
        {
          title: "Scholarship Application Tracker",
          description: "Dashboard tracking all applications, deadlines, and status updates"
        }
      ]}
      timeline={{
        duration: "3-6 months",
        milestones: [
          {
            title: "Scholarship Research",
            description: "Identify and match eligible scholarships",
            date: "Week 1"
          },
          {
            title: "Application Preparation",
            description: "Prepare all required documents and essays",
            date: "Weeks 2-4"
          },
          {
            title: "Application Submission",
            description: "Submit scholarship applications before deadlines",
            date: "Weeks 4-12"
          },
          {
            title: "Award Notifications",
            description: "Receive and evaluate scholarship offers",
            date: "Months 3-6"
          }
        ]
      }}
      requiredDocuments={[
        "Academic transcripts",
        "Admission letter (if available)",
        "Financial need statement",
        "Income certificates",
        "Bank statements",
        "Scholarship essays",
        "Letters of recommendation",
        "CV highlighting achievements",
        "Proof of extracurricular activities",
        "Community service certificates"
      ]}
      outcomes={[
        "Access to comprehensive scholarship database",
        "Multiple scholarship applications submitted",
        "Increased chances of receiving financial aid",
        "Reduced financial burden on education",
        "Better understanding of funding options"
      ]}
      supportTouchpoints={[
        {
          title: "Scholarship Counselor",
          description: "Expert guidance on scholarship opportunities and applications",
          icon: "message",
          contact: "Available via Email, Phone"
        },
        {
          title: "Essay Review Service",
          description: "Professional review and editing of scholarship essays",
          icon: "message",
          contact: "Unlimited revisions"
        }
      ]}
      nextActions={[
        {
          label: "Book Free Consultation",
          path: "/enquiry",
          gradient: "from-amber-400 to-orange-600",
          icon: Calendar
        }
      ]}
    />
  );
};

export default ScholarshipGuidanceDetail;
