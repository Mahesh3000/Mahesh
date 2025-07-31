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
    duration: "Jan 2025 – Present",
    description: [
      "Designed and developed a cloud-native microservices-based trading analytics platform using React.js, Spring Boot, and AWS.",
      "Reduced latency by 50ms per request and improved client portfolio analysis speed by 35%.",
      "Implemented JWT-based authentication with Spring Security, achieving 100% compliance with internal cybersecurity standards.",
      "Built a real-time trade monitoring dashboard with ELK Stack and Kafka, reducing anomaly detection time from 30 min to under 5 min.",
      "Automated CI/CD pipelines using Jenkins and AWS CodePipeline, cutting deployment time by 70% and enabling weekly releases."
    ],
    skills: ["React.js", "Spring Boot", "AWS", "Kafka", "ELK Stack", "JWT", "Jenkins", "Microservices"]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "63moons Technologies Ltd.",
    location: "Mumbai, India",
    duration: "Sep 2022 – Dec 2023",
    description: [
      "Developed high-performance ReactJS trading applications for NSE, BSE, and MCX with live market data feeds via WebSockets.",
      "Delivered dynamic dashboards with Chart.js and D3.js, increasing feature usage by 40%.",
      "Optimized backend queries in MySQL and implemented JWT authentication to enhance security and compliance.",
      "Improved application performance and reduced API calls with efficient Redux state management.",
      "Deployed microservices to AWS with a 20% improvement in release cycle efficiency."
    ],
    skills: ["React", "Redux", "WebSockets", "Chart.js", "D3.js", "JWT", "MySQL", "AWS"]
  },
  {
    id: 3,
    role: "Jr. Software Engineer",
    company: "Adons Softech",
    location: "Hyderabad, India",
    duration: "Aug 2019 – Aug 2022",
    description: [
      "Contributed to enterprise web applications using Angular.js, Material UI, and Node.js APIs.",
      "Migrated core JavaScript modules to TypeScript, reducing runtime errors by 45%.",
      "Implemented Redis caching for high-read APIs, improving backend throughput by 35%.",
      "Collaborated in Agile sprints, handled bug fixes, and supported test-driven development."
    ],
    skills: ["Angular.js", "Material UI", "Node.js", "TypeScript", "Redis", "MySQL", "Agile"]
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