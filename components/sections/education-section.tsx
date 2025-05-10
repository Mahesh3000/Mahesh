"use client";

import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  achievements?: string[];
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Southern Arkansas University",
    location: "Magnolia, AR",
    duration: "2023 – 2025",
    description: "Focused on Software Engineering, Cloud Computing, and Full Stack Development. Completed projects in AWS, authentication systems, and UI/UX engineering.",
    achievements: [
      "Graduate coursework in Cloud, Security, and AI",
      "Built LoginKit and CryptoTrack as capstone projects",
      "GPA: 3.9/4.0"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Electrical",
    institution: "Jawaharlal Nehru Technological University (JNTU)",
    location: "Kakinada, India",
    duration: "",
    description: "Studied data structures, algorithms, operating systems, and software development. Actively involved in coding contests and team-based academic projects.",
    achievements: [
      "Graduated with First Class",
    ]
  }
];


export function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="education">
      <div ref={ref}>
        <SectionHeading>Education</SectionHeading>

        <div className="mt-12 space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {edu.institution}, {edu.location}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}