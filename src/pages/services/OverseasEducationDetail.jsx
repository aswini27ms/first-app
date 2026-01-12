import React from 'react';
import ServiceDetail from './ServiceDetail';
import { GraduationCap, Globe, MapPin, BookOpen, FileCheck, Users, Calendar } from 'lucide-react';

const OverseasEducationDetail = () => {
  return (
    <ServiceDetail
      serviceId="overseas-edu"
      title="Overseas Education"
      description="Navigate the global academic landscape with ease. We help you find the perfect match for your career goals."
      icon={GraduationCap}
      gradient="from-blue-500 to-indigo-600"
      color="blue"
      overview="Our Overseas Education service provides comprehensive guidance for students seeking to study abroad. We help you navigate through country selection, university matching, course guidance, and the entire application process. Our expert counselors work closely with you to identify the best-fit programs based on your academic background, career aspirations, and personal preferences."
      processSteps={[
        {
          title: "Initial Consultation & Profile Assessment",
          description: "We conduct a detailed assessment of your academic background, career goals, preferences, and budget. This helps us understand your unique needs and aspirations.",
          duration: "1-2 hours"
        },
        {
          title: "Country & University Selection",
          description: "Based on your profile, we recommend suitable countries and universities that align with your goals. We provide detailed information about each option including rankings, programs, costs, and career prospects.",
          duration: "1-2 weeks"
        },
        {
          title: "Course Selection & Application Strategy",
          description: "We help you choose the right course and develop a strategic application plan. This includes identifying multiple backup options and creating a timeline for applications.",
          duration: "1 week"
        },
        {
          title: "Application Preparation & Submission",
          description: "We assist with preparing all application materials including SOPs, LORs, CVs, and portfolios. Our team reviews and refines your documents before submission.",
          duration: "2-4 weeks"
        },
        {
          title: "Admission Follow-up & Decision Support",
          description: "We track your applications, follow up with universities, and help you make informed decisions when offers arrive. We also assist with deferrals if needed.",
          duration: "Ongoing"
        }
      ]}
      prerequisites={[
        "Completed high school or undergraduate degree",
        "Academic transcripts and certificates",
        "English proficiency test scores (IELTS/TOEFL)",
        "Clear career goals and study objectives",
        "Financial capacity documentation"
      ]}
      deliverables={[
        {
          title: "Personalized Country & University Report",
          description: "Detailed analysis of 5-10 best-fit universities with rankings, programs, costs, and career outcomes"
        },
        {
          title: "Application Package",
          description: "Polished SOP, LORs, CV, and all required documents ready for submission"
        },
        {
          title: "Application Timeline & Checklist",
          description: "Customized timeline with deadlines and action items for each university"
        },
        {
          title: "Admission Decision Support",
          description: "Guidance on evaluating offers, negotiating scholarships, and making final decisions"
        }
      ]}
      timeline={{
        duration: "6-12 months",
        milestones: [
          {
            title: "Profile Assessment & Planning",
            description: "Complete consultation and develop personalized strategy",
            date: "Month 1"
          },
          {
            title: "Application Preparation",
            description: "Prepare and refine all application documents",
            date: "Months 2-3"
          },
          {
            title: "Application Submission",
            description: "Submit applications to selected universities",
            date: "Months 3-5"
          },
          {
            title: "Admission Decisions",
            description: "Receive and evaluate admission offers",
            date: "Months 6-8"
          },
          {
            title: "Final Enrollment",
            description: "Accept offer, pay deposits, and prepare for departure",
            date: "Months 8-12"
          }
        ]
      }}
      requiredDocuments={[
        "Academic transcripts (all years)",
        "Degree certificates",
        "English proficiency test scores",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Updated CV/Resume",
        "Passport copy",
        "Financial documents",
        "Portfolio (for design/arts programs)",
        "Research proposal (for PhD programs)"
      ]}
      outcomes={[
        "Admission to top-ranked universities matching your profile",
        "Clear understanding of study abroad process and requirements",
        "Polished application materials that stand out",
        "Multiple admission offers to choose from",
        "Confidence in your academic and career path"
      ]}
      supportTouchpoints={[
        {
          title: "Dedicated Counselor",
          description: "One-on-one support throughout your journey",
          icon: "message",
          contact: "Available via WhatsApp, Email, Phone"
        },
        {
          title: "Application Review Sessions",
          description: "Regular check-ins to review progress and documents",
          icon: "message",
          contact: "Weekly/bi-weekly meetings"
        },
        {
          title: "Emergency Support",
          description: "24/7 support for urgent queries and deadlines",
          icon: "phone",
          contact: "Hotline: Available 24/7"
        }
      ]}
      nextActions={[
        {
          label: "Book Free Consultation",
          path: "/enquiry",
          gradient: "from-blue-500 to-indigo-600",
          icon: Calendar
        },
        {
          label: "Explore Universities",
          path: "/",
          gradient: "from-indigo-500 to-purple-600",
          icon: Globe
        }
      ]}
    />
  );
};

export default OverseasEducationDetail;
