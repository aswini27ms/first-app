import React from 'react';
import ServiceDetail from './ServiceDetail';
import { ShieldCheck, FileCheck, Calendar, CheckCircle2 } from 'lucide-react';

const VisaAssistanceDetail = () => {
  return (
    <ServiceDetail
      serviceId="visa-assistance"
      title="Visa Assistance"
      description="Our 98% success rate in visa approvals comes from meticulous documentation and mock interviews."
      icon={ShieldCheck}
      gradient="from-green-500 to-emerald-700"
      color="emerald"
      overview="Our Visa Assistance service provides end-to-end support for student visa applications. With a 98% success rate, we ensure meticulous documentation, thorough interview preparation, and seamless submission processes. Our experienced team stays updated with the latest visa regulations and requirements for all major study destinations."
      processSteps={[
        {
          title: "Visa Eligibility Assessment",
          description: "We assess your profile against visa requirements, identify potential issues, and create a strategy to strengthen your application.",
          duration: "1-2 days"
        },
        {
          title: "Document Collection & Verification",
          description: "We provide a comprehensive checklist and help collect all required documents. Our team verifies each document for accuracy and completeness.",
          duration: "1-2 weeks"
        },
        {
          title: "Application Form Preparation",
          description: "We fill out visa application forms accurately, ensuring all information is consistent and error-free across all documents.",
          duration: "2-3 days"
        },
        {
          title: "Financial Documentation",
          description: "We help organize financial documents including bank statements, sponsorship letters, and proof of funds to meet visa requirements.",
          duration: "1 week"
        },
        {
          title: "Interview Preparation",
          description: "We conduct mock visa interviews, provide sample questions, and train you on how to present yourself confidently to visa officers.",
          duration: "2-3 sessions"
        },
        {
          title: "Application Submission & Follow-up",
          description: "We submit your application, track its status, and follow up with the embassy/consulate. We also prepare you for any additional requests.",
          duration: "Ongoing until decision"
        }
      ]}
      prerequisites={[
        "Valid passport (minimum 6 months validity)",
        "University admission letter",
        "Financial capacity proof",
        "Medical examination certificate (if required)",
        "Police clearance certificate (if required)"
      ]}
      deliverables={[
        {
          title: "Complete Visa Application Package",
          description: "All documents organized, verified, and ready for submission"
        },
        {
          title: "Interview Preparation Materials",
          description: "Mock interview sessions, sample Q&A, and confidence-building training"
        },
        {
          title: "Application Tracking Dashboard",
          description: "Real-time status updates and timeline tracking"
        },
        {
          title: "Visa Approval Support",
          description: "Guidance on visa collection and next steps after approval"
        }
      ]}
      timeline={{
        duration: "4-8 weeks",
        milestones: [
          {
            title: "Document Collection",
            description: "Gather and verify all required documents",
            date: "Weeks 1-2"
          },
          {
            title: "Application Preparation",
            description: "Complete forms and organize application package",
            date: "Week 2"
          },
          {
            title: "Interview Preparation",
            description: "Mock interviews and training sessions",
            date: "Week 3"
          },
          {
            title: "Application Submission",
            description: "Submit application to embassy/consulate",
            date: "Week 3-4"
          },
          {
            title: "Visa Decision",
            description: "Receive visa approval and collect passport",
            date: "Weeks 4-8"
          }
        ]
      }}
      requiredDocuments={[
        "Valid passport",
        "Visa application form",
        "University admission letter",
        "Financial documents (bank statements, sponsorship letters)",
        "Academic transcripts and certificates",
        "English proficiency test scores",
        "Medical examination report",
        "Police clearance certificate",
        "Passport-sized photographs",
        "Travel insurance (if required)",
        "Proof of accommodation",
        "Return flight tickets"
      ]}
      outcomes={[
        "98% visa approval success rate",
        "Complete, error-free application package",
        "Confidence in visa interview",
        "Timely visa approval",
        "Peace of mind throughout the process"
      ]}
      supportTouchpoints={[
        {
          title: "Visa Specialist",
          description: "Dedicated expert handling your visa application",
          icon: "message",
          contact: "Available via WhatsApp, Email, Phone"
        },
        {
          title: "Mock Interview Sessions",
          description: "Multiple practice sessions before actual interview",
          icon: "message",
          contact: "2-3 sessions included"
        },
        {
          title: "24/7 Application Support",
          description: "Round-the-clock assistance for urgent queries",
          icon: "phone",
          contact: "Emergency hotline available"
        }
      ]}
      nextActions={[
        {
          label: "Book Free Consultation",
          path: "/enquiry",
          gradient: "from-green-500 to-emerald-700",
          icon: Calendar
        }
      ]}
    />
  );
};

export default VisaAssistanceDetail;
