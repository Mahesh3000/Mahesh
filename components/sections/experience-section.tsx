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
    role: "Frontend Developer",
    company: "63moons Technologies Ltd.",
    location: "Mumbai, India",
    duration: "2022 – 2024",
    description: [
      "Built and maintained high-performance trading dashboards for NSE, BSE, and MCX exchanges.",
      "Worked with real-time market data using WebSockets and RESTful APIs.",
      "Collaborated with backend teams to integrate secure, scalable features using JWT and Redis.",
      "Optimized UI responsiveness and accessibility using React, Redux, and Tailwind CSS."
    ],
    skills: ["React", "Redux", "TypeScript", "Tailwind CSS", "WebSockets", "REST APIs", "JWT"]
  },
  {
    id: 2,
    role: "Full Stack Developer (Personal Projects)",
    company: "Freelance / Self-Driven",
    location: "Remote, USA",
    duration: "2023 – Present",
    description: [
      "Developed LoginKit: a customizable authentication system supporting OTP, TOTP, and Google OAuth.",
      "Built CryptoTrack: a real-time cryptocurrency tracker with visual charts and AWS-integrated backend.",
      "Deployed full-stack applications using AWS EC2, S3, API Gateway, Lambda, and PostgreSQL.",
      "Implemented secure auth flows with Redis caching, rate-limiting, and token handling."
    ],
    skills: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Tailwind CSS", "TOTP", "Google OAuth"]
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Pythian Technologies",
    location: "Hyderabad, India",
    duration: "2021 – 2022",
    description: [
      "Assisted in creating responsive UI components and reusable design templates.",
      "Contributed to bug fixes, testing, and documentation across client-facing projects.",
      "Collaborated in Agile sprints, participated in team stand-ups and code reviews.",
      "Learned modern frontend practices and version control using Git."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Bootstrap"]
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