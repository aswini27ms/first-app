import React from 'react';
import ServiceDetail from './ServiceDetail';
import { Home, MapPin, FileCheck, Calendar, Users } from 'lucide-react';

const PostAdmissionDetail = () => {
  return (
    <ServiceDetail
      serviceId="post-admission"
      title="Post-Admission Services"
      description="Our support doesn't end at the airport. We ensure you're settled and compliant in your new home."
      icon={Home}
      gradient="from-slate-700 to-slate-900"
      color="slate"
      overview="Our Post-Admission Services ensure a smooth transition to your new country and university. We help with accommodation, country registration, local orientation, bank account setup, and all essential services needed to settle in comfortably. Our support continues even after you arrive, ensuring you're fully integrated and compliant."
      processSteps={[
        {
          title: "Pre-Departure Briefing",
          description: "Comprehensive briefing about your destination country, university, and essential preparations before departure.",
          duration: "1-2 sessions"
        },
        {
          title: "Accommodation Assistance",
          description: "Help finding suitable accommodation options including university housing, private rentals, and homestays.",
          duration: "2-4 weeks"
        },
        {
          title: "Airport Pickup & Initial Setup",
          description: "Arrange airport pickup, initial accommodation check-in, and immediate needs assistance upon arrival.",
          duration: "Day 1"
        },
        {
          title: "Country Registration & Documentation",
          description: "Assistance with residence registration, bank account setup, SIM card, and all essential local documentation.",
          duration: "Week 1"
        },
        {
          title: "Local Orientation & Integration",
          description: "City tours, university orientation, local culture introduction, and community integration support.",
          duration: "Weeks 1-2"
        },
        {
          title: "Ongoing Support",
          description: "Continuous support for any issues, questions, or additional needs during your stay.",
          duration: "Ongoing"
        }
      ]}
      prerequisites={[
        "Confirmed admission and visa",
        "Travel dates confirmed",
        "Basic understanding of destination country",
        "Financial arrangements completed"
      ]}
      deliverables={[
        {
          title: "Pre-Departure Guide",
          description: "Comprehensive guide covering everything you need to know before leaving"
        },
        {
          title: "Accommodation Options",
          description: "List of verified accommodation options with details and recommendations"
        },
        {
          title: "Local Setup Checklist",
          description: "Step-by-step checklist for all essential local registrations and setups"
        },
        {
          title: "24/7 Support Access",
          description: "Round-the-clock support for emergencies and urgent needs"
        }
      ]}
      timeline={{
        duration: "Ongoing (first 3 months critical)",
        milestones: [
          {
            title: "Pre-Departure",
            description: "Complete briefing and preparations",
            date: "2-4 weeks before departure"
          },
          {
            title: "Arrival & Initial Setup",
            description: "Airport pickup, accommodation, and immediate needs",
            date: "Day 1"
          },
          {
            title: "Registration & Documentation",
            description: "Complete all local registrations and documentation",
            date: "Week 1"
          },
          {
            title: "Orientation & Integration",
            description: "University and city orientation, community integration",
            date: "Weeks 1-2"
          },
          {
            title: "Settled & Independent",
            description: "Fully settled and comfortable in new environment",
            date: "Month 3"
          }
        ]
      }}
      requiredDocuments={[
        "Visa and passport",
        "University admission letter",
        "Accommodation confirmation",
        "Travel insurance",
        "Financial documents",
        "Medical records",
        "Emergency contacts"
      ]}
      outcomes={[
        "Smooth transition to new country",
        "Comfortable accommodation arranged",
        "All local registrations completed",
        "Familiarity with local area and culture",
        "Confidence and independence in new environment"
      ]}
      supportTouchpoints={[
        {
          title: "Local Support Team",
          description: "Dedicated team in your destination country",
          icon: "phone",
          contact: "Available 24/7 via Phone, WhatsApp"
        },
        {
          title: "Emergency Hotline",
          description: "24/7 emergency support for urgent situations",
          icon: "phone",
          contact: "Emergency hotline available"
        },
        {
          title: "Online Support Portal",
          description: "Access to resources, guides, and FAQ",
          icon: "message",
          contact: "Available online 24/7"
        }
      ]}
      nextActions={[
        {
          label: "Book Pre-Departure Consultation",
          path: "/enquiry",
          gradient: "from-slate-700 to-slate-900",
          icon: Calendar
        }
      ]}
    />
  );
};

export default PostAdmissionDetail;
