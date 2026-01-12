import React from 'react';
import ServiceDetail from './ServiceDetail';
import { Search, FileText, Briefcase, Calendar, Users } from 'lucide-react';

const PlacementAssistanceDetail = () => {
  return (
    <ServiceDetail
      serviceId="placement-assist"
      title="Placement Assistance"
      description="Ready-to-work support focusing on the final miles of your job hunt journey."
      icon={Search}
      gradient="from-pink-500 to-rose-600"
      color="rose"
      overview="Our Placement Assistance service provides comprehensive support for job seekers ready to enter the workforce. We focus on resume building, interview preparation, job search strategy, and connecting you with the right opportunities. This service is designed for graduates and professionals seeking career advancement."
      processSteps={[
        {
          title: "Career Profile Analysis",
          description: "We analyze your background, skills, and career goals to create a targeted job search strategy.",
          duration: "1 session"
        },
        {
          title: "Resume & Cover Letter Development",
          description: "We create ATS-friendly resumes and compelling cover letters tailored to your target roles and industries.",
          duration: "1 week"
        },
        {
          title: "LinkedIn & Online Profile Optimization",
          description: "We optimize your LinkedIn profile and other professional online presence to attract recruiters.",
          duration: "3-5 days"
        },
        {
          title: "Job Search Strategy & Application",
          description: "We develop a strategic approach to job searching, identify target companies, and assist with applications.",
          duration: "Ongoing"
        },
        {
          title: "Interview Preparation & Coaching",
          description: "Comprehensive interview preparation including mock interviews, common questions, and industry-specific guidance.",
          duration: "As needed"
        },
        {
          title: "Offer Evaluation & Negotiation",
          description: "We help evaluate job offers, negotiate salary and benefits, and make informed career decisions.",
          duration: "As needed"
        }
      ]}
      prerequisites={[
        "Completed education or relevant work experience",
        "Clear career objectives",
        "Willingness to actively participate",
        "Professional attitude"
      ]}
      deliverables={[
        {
          title: "Professional Resume Package",
          description: "ATS-optimized resume, cover letter templates, and LinkedIn profile"
        },
        {
          title: "Job Search Strategy Plan",
          description: "Personalized job search roadmap with target companies and application timeline"
        },
        {
          title: "Interview Preparation Kit",
          description: "Mock interviews, Q&A guides, and industry insights"
        },
        {
          title: "Application Tracking System",
          description: "Dashboard to track applications, interviews, and offers"
        }
      ]}
      timeline={{
        duration: "2-4 months",
        milestones: [
          {
            title: "Profile Setup",
            description: "Complete resume and online profile optimization",
            date: "Week 1"
          },
          {
            title: "Job Search Launch",
            description: "Begin strategic job applications",
            date: "Week 2"
          },
          {
            title: "Interview Phase",
            description: "Attend interviews with prepared confidence",
            date: "Weeks 3-8"
          },
          {
            title: "Job Offer",
            description: "Receive and accept job offer",
            date: "Weeks 8-16"
          }
        ]
      }}
      requiredDocuments={[
        "Current resume",
        "Academic transcripts",
        "Work experience details",
        "Skills inventory",
        "Career goals statement",
        "Reference contacts"
      ]}
      outcomes={[
        "Professional, ATS-friendly resume",
        "Optimized online professional presence",
        "Confidence in interviews",
        "Multiple job opportunities",
        "Successful job placement"
      ]}
      supportTouchpoints={[
        {
          title: "Career Coach",
          description: "Dedicated support throughout your job search",
          icon: "message",
          contact: "Available via Email, Phone, WhatsApp"
        },
        {
          title: "Interview Coaching",
          description: "Unlimited mock interview sessions",
          icon: "message",
          contact: "Available on-demand"
        }
      ]}
      nextActions={[
        {
          label: "Book Free Consultation",
          path: "/enquiry",
          gradient: "from-pink-500 to-rose-600",
          icon: Calendar
        }
      ]}
    />
  );
};

export default PlacementAssistanceDetail;
