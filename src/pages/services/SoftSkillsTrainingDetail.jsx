import React from 'react';
import ServiceDetail from './ServiceDetail';
import { Users, Mic, Award, Calendar, TrendingUp } from 'lucide-react';

const SoftSkillsTrainingDetail = () => {
  return (
    <ServiceDetail
      serviceId="soft-skills"
      title="Soft Skill Training"
      description="Technical skills get you the interview; soft skills get you the job. Polish your professional persona."
      icon={Users}
      gradient="from-cyan-500 to-blue-600"
      color="cyan"
      overview="Our Soft Skills Training program helps you develop essential professional skills including public speaking, corporate etiquette, leadership, communication, and teamwork. These skills are crucial for career success and are highly valued by employers worldwide."
      processSteps={[
        {
          title: "Skills Assessment",
          description: "We assess your current soft skills level and identify areas for improvement through interactive exercises and evaluations.",
          duration: "1 session"
        },
        {
          title: "Personalized Training Plan",
          description: "We create a customized training plan focusing on your specific needs and career goals.",
          duration: "2-3 days"
        },
        {
          title: "Interactive Training Sessions",
          description: "Engaging workshops and sessions covering public speaking, communication, leadership, teamwork, and professional etiquette.",
          duration: "4-8 weeks"
        },
        {
          title: "Practical Application",
          description: "Real-world practice scenarios, role-plays, and projects to apply learned skills in professional settings.",
          duration: "Ongoing"
        },
        {
          title: "Progress Evaluation & Certification",
          description: "Regular assessments and final evaluation leading to a professional certification in soft skills.",
          duration: "End of program"
        }
      ]}
      prerequisites={[
        "Basic communication skills",
        "Willingness to participate actively",
        "Openness to feedback",
        "Commitment to practice"
      ]}
      deliverables={[
        {
          title: "Soft Skills Assessment Report",
          description: "Detailed analysis of your current skills and improvement areas"
        },
        {
          title: "Training Materials & Resources",
          description: "Comprehensive guides, videos, and practice materials"
        },
        {
          title: "Professional Certification",
          description: "Certificate of completion in soft skills training"
        },
        {
          title: "Portfolio of Achievements",
          description: "Documented evidence of skill development and practical applications"
        }
      ]}
      timeline={{
        duration: "6-12 weeks",
        milestones: [
          {
            title: "Assessment & Planning",
            description: "Complete skills assessment and create training plan",
            date: "Week 1"
          },
          {
            title: "Core Skills Development",
            description: "Build foundation in communication and interpersonal skills",
            date: "Weeks 2-4"
          },
          {
            title: "Advanced Skills Training",
            description: "Develop leadership, public speaking, and professional etiquette",
            date: "Weeks 5-8"
          },
          {
            title: "Practical Application",
            description: "Apply skills in real-world scenarios and projects",
            date: "Weeks 9-10"
          },
          {
            title: "Certification",
            description: "Final evaluation and certification",
            date: "Weeks 11-12"
          }
        ]
      }}
      requiredDocuments={[
        "Basic profile information",
        "Career goals statement",
        "Current skill level assessment",
        "Availability schedule"
      ]}
      outcomes={[
        "Enhanced communication and presentation skills",
        "Improved confidence in professional settings",
        "Better leadership and teamwork abilities",
        "Professional certification",
        "Competitive edge in job market"
      ]}
      supportTouchpoints={[
        {
          title: "Expert Trainers",
          description: "Experienced professionals delivering interactive training",
          icon: "message",
          contact: "Available during scheduled sessions"
        },
        {
          title: "Practice Sessions",
          description: "Regular practice opportunities and feedback",
          icon: "message",
          contact: "Weekly practice sessions"
        }
      ]}
      nextActions={[
        {
          label: "Book Free Assessment",
          path: "/enquiry",
          gradient: "from-cyan-500 to-blue-600",
          icon: Calendar
        }
      ]}
    />
  );
};

export default SoftSkillsTrainingDetail;
