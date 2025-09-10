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
    role: "Software Engineer",
    company: "Citigroup",
    location: "USA",
    duration: "Jun 2025 – Present",
    description: [
      "Designed and developed full-stack features using React and TypeScript with Go services for a cloud-native, microservices-based trading analytics platform.",
      "Built and integrated RESTful APIs and event-driven services to streamline portfolio analytics workflows, reducing latency by 50ms+ and boosting response efficiency by 30%.",
      "Deployed and optimized applications on AWS (EC2, RDS, S3, Lambda, API Gateway) with Docker & Kubernetes, improving release frequency by 40%.",
      "Automated client onboarding workflows across teams, cutting manual effort by 25% and accelerating time-to-value.",
      "Implemented caching strategies and asynchronous data handling (RxJS) to improve real-time dashboard responsiveness.",
      "Developed SQL/NoSQL data pipelines to clean and transform large datasets for analytics dashboards and automated reporting."
    ],
    skills: ["React",
      "TypeScript",
      "Go",
      "Microservices",
      "REST APIs",
      "RxJS",
      "AWS",
      "Docker",
      "Kubernetes",
      "EC2",
      "RDS",
      "S3",
      "Lambda",
      "API Gateway"]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "63moons Technologies Ltd.",
    location: "Mumbai, India",
    duration: "Sep 2022 – Dec 2023",
    description: [
      "Designed and delivered high-performance React.js and Angular front-end applications for fintech trading platforms, reducing UI-related bug reports by 30% and improving trader productivity.",
      "Built responsive, cross-browser UIs with React, TypeScript, HTML5, CSS3, and Tailwind CSS for desktop, tablet, and mobile.",
      "Integrated RESTful APIs and WebSocket streams for live market data (NSE, BSE, MCX) with sub-second updates for HFT use cases.",
      "Developed and deployed microservices on AWS (EC2, RDS, Lambda) to handle real-time data pipelines, improving scalability and reducing downtime by 20%.",
      "Leveraged Redux and RxJS Observables to manage complex async data flows, enhancing stability and responsiveness under heavy load.",
      "Built interactive dashboards with Chart.js and D3.js for analytics, alerts, and news, increasing feature adoption by 40%.",
      "Created reusable components/services to speed delivery and improve maintainability across multiple projects.",
      "Collaborated with QA and product in Agile sprints—backlog refinement, feature delivery, and cross-functional knowledge sharing."
    ],
    skills: ["React",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "RxJS",
      "WebSockets",
      "Chart.js",
      "D3.js",
      "AWS",
      "EC2",
      "RDS",
      "Lambda",
      "REST APIs"]
  },
  {
    id: 3,
    role: "Jr. Software Engineer",
    company: "Adons Softech",
    location: "Hyderabad, India",
    duration: "Aug 2019 – Aug 2022",
    description: [
      "Developed and maintained enterprise dashboards using Angular.js, Material UI, and Tailwind CSS for 400+ employees, improving analytics visibility.",
      "Migrated core JavaScript modules to TypeScript, reducing runtime errors by 45% and improving maintainability.",
      "Integrated RESTful APIs to support real-time onboarding and account management, improving transaction response times by 20%.",
      "Optimized UI performance by collaborating on API contracts, reducing payloads and accelerating page loads.",
      "Built modular, reusable UI components and responsive layouts for consistent cross-device experiences.",
      "Enhanced accessibility using semantic HTML, ARIA, and keyboard navigation aligned with WCAG guidelines."
    ],
    skills: ["Angular.js",
      "Material UI",
      "Tailwind CSS",
      "TypeScript",
      "REST APIs",
      "Performance Optimization",
      "Accessibility (WCAG/ARIA)"]
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
                <div className={`absolute ${index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                  } top-1/2 -translate-y-1/2`}>
                  <div className="w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>

              <Card className={`transition-transform duration-300 hover:-translate-y-2 ${index % 2 === 0 ? "md:text-right" : ""
                }`}>
                <CardHeader>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground/80">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 mb-4 list-disc ${index % 2 === 0 ? "md:ml-6" : "ml-6"
                    }`}>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
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