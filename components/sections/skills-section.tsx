"use client";

import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Angular", level: 82 },
      { name: "Tailwind CSS / Bootstrap", level: 90 },
      { name: "Material UI / Responsive Design", level: 88 },
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 78 },
      { name: "WebSockets", level: 88 },
      { name: "Redux / Context API / RxJS", level: 90 },
      { name: "PostgreSQL / MySQL", level: 84 },
      { name: "MongoDB / Redis", level: 80 },
    ],
  },
  {
    name: "Cloud & Engineering",
    skills: [
      { name: "AWS (EC2, S3, RDS, Lambda)", level: 82 },
      { name: "Docker / Kubernetes", level: 78 },
      { name: "Git / GitHub / GitLab", level: 90 },
      { name: "Jenkins / GitHub Actions", level: 80 },
      { name: "Jest / React Testing Library", level: 82 },
      { name: "Agile / Jira / Confluence", level: 88 },
      { name: "Microservices Architecture", level: 84 },
    ],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="skills">
      <div ref={ref}>
        <SectionHeading>My Skills</SectionHeading>

        <div className="mt-12">
          <Tabs defaultValue="Frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">{skill.name}</h3>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </SectionContainer>
  );
}