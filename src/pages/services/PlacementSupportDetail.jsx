import React from 'react';
import ServiceDetail from './ServiceDetail';
import { Briefcase, Globe, Users, Calendar, TrendingUp } from 'lucide-react';

const PlacementSupportDetail = () => {
  return (
    <ServiceDetail
      serviceId="placement-support"
      title="Placement Opportunities"
      description="Connect with industry leaders. We bridge the gap between education and global employment."
      icon={Briefcase}
      gradient="from-purple-500 to-purple-800"
      color="purple"
      overview="Our Placement Opportunities service connects students and graduates with domestic and international job opportunities. We maintain partnerships with leading companies across various industries and help you find internships, part-time jobs, and full-time positions that align with your career goals."
      processSteps={[
        {
          title: "Career Assessment & Goal Setting",
          description: "We assess your skills, interests, and career aspirations to identify suitable job opportunities and career paths.",
          duration: "1 session"
        },
        {
          title: "Resume & Profile Optimization",
          description: "We create or optimize your resume, LinkedIn profile, and professional portfolio to attract employers.",
          duration: "1 week"
        },
        {
          title: "Job Matching & Recommendations",
          description: "We match you with relevant job openings from our partner companies and provide personalized recommendations.",
          duration: "Ongoing"
        },
        {
          title: "Application Support",
          description: "We assist with job applications, cover letters, and ensure your applications stand out to employers.",
          duration: "Ongoing"
        },
        {
          title: "Interview Preparation",
          description: "We prepare you for interviews with mock sessions, common questions, and industry-specific guidance.",
          duration: "As needed"
        },
        {
          title: "Offer Negotiation & Onboarding",
          description: "We help negotiate job offers and provide guidance during the onboarding process.",
          duration: "As needed"
        }
      ]}
      prerequisites={[
        "Completed or pursuing relevant education",
        "Clear career goals",
        "Willingness to relocate (for international opportunities)",
        "Professional attitude and commitment"
      ]}
      deliverables={[
        {
          title: "Optimized Resume & LinkedIn Profile",
          description: "Professional resume and online profile that attracts employers"
        },
        {
          title: "Job Match Report",
          description: "List of matched job opportunities with company details and requirements"
        },
        {
          title: "Interview Preparation Package",
          description: "Mock interviews, Q&A guides, and industry insights"
        },
        {
          title: "Career Mapping",
          description: "Long-term career roadmap with milestones and growth opportunities"
        }
      ]}
      timeline={{
        duration: "2-6 months",
        milestones: [
          {
            title: "Profile Setup",
            description: "Complete career assessment and optimize professional profiles",
            date: "Week 1"
          },
          {
            title: "Job Matching",
            description: "Receive matched job opportunities",
            date: "Weeks 2-4"
          },
          {
            title: "Application Phase",
            description: "Submit applications to selected positions",
            date: "Weeks 4-8"
          },
          {
            title: "Interview Phase",
            description: "Attend interviews with prepared confidence",
            date: "Weeks 8-12"
          },
          {
            title: "Job Offer",
            description: "Receive and accept job offer",
            date: "Weeks 12-24"
          }
        ]
      }}
      requiredDocuments={[
        "Updated resume/CV",
        "Academic transcripts",
        "Degree certificates",
        "Professional portfolio (if applicable)",
        "Work samples (if applicable)",
        "References list",
        "Cover letter templates",
        "LinkedIn profile"
      ]}
      outcomes={[
        "Access to exclusive job opportunities",
        "Professional resume and online presence",
        "Interview confidence and skills",
        "Job offers from leading companies",
        "Clear career growth path"
      ]}
      supportTouchpoints={[
        {
          title: "Career Counselor",
          description: "Dedicated support throughout your job search journey",
          icon: "message",
          contact: "Available via Email, Phone, WhatsApp"
        },
        {
          title: "Interview Coaching",
          description: "Expert interview preparation and mock sessions",
          icon: "message",
          contact: "Unlimited sessions"
        }
      ]}
      nextActions={[
        {
          label: "Book Free Consultation",
          path: "/enquiry",
          gradient: "from-purple-500 to-purple-800",
          icon: Calendar
        }
      ]}
    />
  );
};

export default PlacementSupportDetail;
