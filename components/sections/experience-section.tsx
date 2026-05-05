"use client";

import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer (Senior React Developer)",
    company: "SwedBank",
    location: "USA",
    duration: "Aug 2025 – Present",
    description: [
      "Designed and developed scalable React.js applications for a cloud-native trading analytics platform, building high-performance dashboards, login/authentication flows, and real-time data-driven UI systems.",
      "Built complex UI workflows for portfolio analytics, approvals, monitoring systems, and reusable component libraries using component-driven architecture to standardize UI development and improve scalability.",
      "Implemented advanced state management using Redux, Context API, and RxJS to handle complex asynchronous workflows and real-time event-driven updates.",
      "Integrated RESTful APIs and backend services to enable dynamic data synchronization, user-triggered actions, and seamless frontend-backend communication.",
      "Optimized frontend performance using lazy loading, memoization, and code splitting, improving dashboard responsiveness and user experience.",
      "Reduced latency by 50ms+ and improved response efficiency by 30% through optimized rendering strategies and efficient data handling.",
      "Collaborated with business stakeholders, backend teams, and QA in Agile/Scrum environments to translate requirements into scalable UI solutions."
    ],
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Context API",
      "RxJS",
      "REST APIs",
      "WebSockets",
      "Lazy Loading",
      "Memoization",
      "Code Splitting",
      "AWS",
      "Agile/Scrum"
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "63moons Technologies Limited",
    location: "India",
    duration: "Sep 2022 – Dec 2023",
    description: [
      "Designed and delivered high-performance React.js applications for fintech trading platforms, building scalable, data-intensive UI systems and reducing UI-related bugs by 30%.",
      "Built complex UI workflows for trading actions, approvals, and analytics dashboards, enabling real-time decision-making and seamless user interaction aligned with business processes.",
      "Integrated RESTful APIs and WebSocket streams to support real-time market data from NSE, BSE, and MCX, achieving sub-second updates critical for high-frequency trading environments.",
      "Implemented advanced state management using Redux and RxJS, handling complex asynchronous data flows, event-driven updates, and high-volume transactions with improved stability and responsiveness.",
      "Developed interactive dashboards using Chart.js and D3.js to visualize trading analytics, alerts, and market trends, increasing feature adoption by 40% among active users.",
      "Designed reusable component libraries and scalable UI architecture, improving development efficiency, maintainability, and consistency across multiple frontend modules.",
      "Collaborated with product managers, backend engineers, and QA teams in Agile/Scrum environments to translate business requirements into scalable, high-impact UI solutions."
    ],
    skills: [
      "React.js",
      "Angular",
      "TypeScript",
      "Redux",
      "RxJS",
      "WebSockets",
      "REST APIs",
      "Chart.js",
      "D3.js",
      "Tailwind CSS",
      "Component Libraries",
      "Scalable UI Architecture",
      "Agile/Scrum"
    ]
  },
  {
    id: 3,
    role: "Jr. Software Engineer",
    company: "Adons Softech",
    location: "India",
    duration: "Jan 2019 – Aug 2022",
    description: [
      "Developed and maintained enterprise UI dashboards using Angular and modern JavaScript frameworks, supporting large-scale internal systems and improving analytics visibility for business users.",
      "Migrated large portions of the frontend codebase from JavaScript to TypeScript, reducing runtime errors by 45%, improving code quality, scalability, and long-term maintainability.",
      "Integrated RESTful APIs to support real-time account management, onboarding workflows, and transactional systems, improving response times by 20% and enhancing user experience.",
      "Built reusable UI components and optimized frontend performance by refining API contracts, reducing payload sizes, and improving rendering efficiency across multiple modules.",
      "Collaborated with cross-functional teams to deliver features in Agile environments, contributing to sprint planning, debugging, and continuous improvement of frontend systems."
    ],
    skills: [
      "Angular",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "Reusable UI Components",
      "Performance Optimization",
      "Frontend Development",
      "Agile",
      "Debugging"
    ]
  }
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="experience">
      <div ref={ref}>
        <SectionHeading>Work Experience</SectionHeading>

        <div className="mt-12 relative">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-border hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 md:mb-24 relative md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center z-10">
                <div
                  className={`absolute ${index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                    } top-1/2 -translate-y-1/2`}
                >
                  <div className="w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>

              <Card
                className={`transition-transform duration-300 hover:-translate-y-2 ${index % 2 === 0 ? "md:text-right" : ""
                  }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground/80">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul
                    className={`space-y-2 mb-4 list-disc ${index % 2 === 0 ? "md:ml-6" : "ml-6"
                      }`}
                  >
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}