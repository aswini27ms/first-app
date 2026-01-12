import React from 'react';
import ServiceDetail from './ServiceDetail';
import { Languages, BookOpen, Award, Calendar, Users } from 'lucide-react';

const LanguageTrainingDetail = () => {
  return (
    <ServiceDetail
      serviceId="language-training"
      title="Language Training"
      description="Master the global tongue. Specialized coaching modules for professional and academic success."
      icon={Languages}
      gradient="from-[#e32926] to-red-700"
      color="red"
      overview="Our Language Training service offers comprehensive language preparation for academic and professional success. We provide specialized coaching for IELTS, TOEFL, German, Japanese, and other languages. Our expert instructors use proven methodologies to help you achieve your target scores and language proficiency goals."
      processSteps={[
        {
          title: "Language Assessment & Goal Setting",
          description: "We assess your current language level and help you set realistic target scores based on your university and program requirements.",
          duration: "1 session"
        },
        {
          title: "Customized Learning Plan",
          description: "We create a personalized study plan tailored to your learning style, schedule, and target score. This includes focus areas and practice schedules.",
          duration: "2-3 days"
        },
        {
          title: "Structured Training Sessions",
          description: "Regular training sessions covering all test sections (Reading, Writing, Listening, Speaking) with expert guidance and feedback.",
          duration: "4-12 weeks"
        },
        {
          title: "Practice Tests & Performance Analysis",
          description: "Regular mock tests to track progress, identify weaknesses, and refine strategies. Detailed performance analysis after each test.",
          duration: "Ongoing"
        },
        {
          title: "Final Preparation & Test Strategy",
          description: "Intensive final preparation focusing on test-taking strategies, time management, and confidence building before your actual test.",
          duration: "1-2 weeks"
        }
      ]}
      prerequisites={[
        "Basic understanding of the target language",
        "Commitment to regular practice",
        "Clear target score/goal",
        "Availability for scheduled sessions"
      ]}
      deliverables={[
        {
          title: "Personalized Study Plan",
          description: "Customized learning roadmap with daily/weekly goals and milestones"
        },
        {
          title: "Training Materials",
          description: "Comprehensive study materials, practice tests, and resources"
        },
        {
          title: "Progress Reports",
          description: "Regular performance tracking and improvement recommendations"
        },
        {
          title: "Test Score Guarantee",
          description: "Support until you achieve your target score (terms apply)"
        }
      ]}
      timeline={{
        duration: "4-16 weeks (varies by target score)",
        milestones: [
          {
            title: "Assessment & Planning",
            description: "Initial assessment and learning plan creation",
            date: "Week 1"
          },
          {
            title: "Foundation Building",
            description: "Core language skills development",
            date: "Weeks 2-4"
          },
          {
            title: "Test-Specific Training",
            description: "Focused preparation for test format and strategies",
            date: "Weeks 5-10"
          },
          {
            title: "Intensive Practice",
            description: "Mock tests and performance improvement",
            date: "Weeks 11-14"
          },
          {
            title: "Final Preparation",
            description: "Test readiness and confidence building",
            date: "Weeks 15-16"
          }
        ]
      }}
      requiredDocuments={[
        "Previous test scores (if any)",
        "Target university/program requirements",
        "Available study schedule",
        "Learning preferences"
      ]}
      outcomes={[
        "Achieve target language test scores",
        "Improved language proficiency",
        "Confidence in all test sections",
        "Better understanding of test format",
        "Enhanced communication skills"
      ]}
      supportTouchpoints={[
        {
          title: "Expert Language Instructors",
          description: "Experienced teachers specialized in test preparation",
          icon: "message",
          contact: "Available during scheduled sessions"
        },
        {
          title: "Practice Test Support",
          description: "Unlimited mock tests with detailed feedback",
          icon: "message",
          contact: "Available on-demand"
        },
        {
          title: "Study Group Access",
          description: "Join study groups for peer learning and practice",
          icon: "message",
          contact: "Weekly group sessions"
        }
      ]}
      nextActions={[
        {
          label: "Book Free Assessment",
          path: "/enquiry",
          gradient: "from-[#e32926] to-red-700",
          icon: Calendar
        }
      ]}
    />
  );
};

export default LanguageTrainingDetail;
