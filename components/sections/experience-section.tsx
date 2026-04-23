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
    role: "Software Engineer (Senior React Developer) - Contract",
    company: "SwedBank",
    location: "USA",
    duration: "Jun 2025 – Present",
    description: [
      "Owned end-to-end frontend architecture for a cloud-native trading analytics platform using React and TypeScript, building scalable component-driven systems for high-performance enterprise workflows.",
      "Implemented reusable UI workflows for portfolio analytics, approvals, monitoring, and onboarding, ensuring consistency, maintainability, and seamless user experience across modules.",
      "Engineered real-time, data-driven UI systems using WebSockets and RxJS Observables to handle high-frequency financial data streams with sub-second dashboard updates.",
      "Implemented secure authentication and authorization using JWT and OAuth2, protecting sensitive financial data and enforcing role-based access across multiple application modules.",
      "Optimized application performance using lazy loading, memoization (useMemo/useCallback), and code splitting to reduce load times and improve dashboard responsiveness.",
      "Collaborated closely with backend teams to design and optimize RESTful APIs, improving synchronization, reducing payload sizes, and strengthening microservices-based communication."
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "RxJS",
      "JWT",
      "OAuth2",
      "REST APIs",
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Microservices",
      "Frontend Architecture",
      "AWS"
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "63moons Technologies Ltd.",
    location: "India",
    duration: "Sep 2022 – Dec 2023",
    description: [
      "Designed and delivered high-performance React.js applications for fintech trading platforms, building scalable, data-intensive UI systems and reducing UI-related bugs by 30%.",
      "Built complex UI workflows for trading actions, approvals, and analytics dashboards, enabling real-time decision-making and seamless interaction aligned with business processes.",
      "Integrated RESTful APIs and WebSocket streams to support real-time market data from NSE, BSE, and MCX with sub-second updates.",
      "Implemented advanced state management using Redux and RxJS, handling complex asynchronous data flows and event-driven updates with improved stability and responsiveness.",
      "Developed interactive dashboards using Chart.js and D3.js to visualize trading analytics, alerts, and market trends, increasing feature adoption by 40%.",
      "Designed reusable component libraries and scalable UI architecture to improve development efficiency, maintainability, and consistency across frontend modules.",
      "Built scalable frontend patterns that supported high-volume transactions and responsive user experiences under heavy trading workloads.",
      "Collaborated with product managers, backend engineers, and QA teams in Agile/Scrum environments to translate requirements into high-impact UI solutions."
    ],
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "Redux",
      "RxJS",
      "WebSockets",
      "REST APIs",
      "Chart.js",
      "D3.js",
      "Tailwind CSS",
      "Scalable UI Architecture",
      "Component Libraries",
      "Agile/Scrum",
      "AWS"
    ]
  },
  {
    id: 3,
    role: "Jr. Software Engineer",
    company: "Adons Softech",
    location: "India",
    duration: "Mar 2021 – Aug 2022",
    description: [
      "Developed and maintained enterprise UI dashboards using Angular and modern JavaScript frameworks, supporting large-scale internal systems and improving analytics visibility.",
      "Migrated large portions of the frontend codebase from JavaScript to TypeScript, reducing runtime errors by 45% and improving scalability and long-term maintainability.",
      "Integrated RESTful APIs to support real-time account management, onboarding workflows, and transactional systems, improving response times by 20% and enhancing user experience.",
      "Built reusable UI components to improve consistency and maintainability across multiple internal modules and frontend workflows.",
      "Optimized frontend performance by refining API contracts, reducing payload sizes, and improving rendering efficiency across multiple screens.",
      "Collaborated with cross-functional teams in Agile environments, contributing to sprint planning, debugging, and continuous improvement of frontend systems."
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