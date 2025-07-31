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
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS / Bootstrap", level: 90 },
      { name: "Redux & State Mgmt", level: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Java Spring Boot", level: 90 },
      { name: "Node.js & Express", level: 85 },
      { name: "Spring Security / JWT", level: 85 },
      { name: "RESTful APIs", level: 95 },
      { name: "WebSockets / Kafka", level: 80 },
      { name: "PostgreSQL / MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Git / GitHub / GitLab", level: 90 },
      { name: "Docker & Kubernetes", level: 75 },
      { name: "CI/CD (Jenkins, GitHub Actions)", level: 70 },
      { name: "AWS (EC2, S3, RDS, Lambda)", level: 70 },
      { name: "Azure DevOps", level: 65 },
      { name: "Redis / Caching", level: 75 },
      { name: "Terraform / Infrastructure", level: 60 },
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