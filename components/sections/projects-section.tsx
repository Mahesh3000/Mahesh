"use client";

import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration for payments.",
    image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that displays current and forecasted weather data from multiple sources.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    tags: ["React", "Chart.js", "API Integration"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Personal Blog",
    description: "A personal blog with a custom CMS, SEO optimization, and dynamic content generation.",
    image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A mobile-first fitness tracking application that visualizes workout data and progress over time.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    tags: ["React Native", "D3.js", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe search application with filtering, favorites, and meal planning features.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    tags: ["Vue.js", "Vuex", "API Integration"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<"all" | "featured">("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <SectionContainer id="projects">
      <div ref={ref}>
        <SectionHeading>My Projects</SectionHeading>
        
        <div className="flex justify-center gap-4 mt-8 mb-12">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="min-w-[100px]"
          >
            All
          </Button>
          <Button 
            variant={filter === "featured" ? "default" : "outline"}
            onClick={() => setFilter("featured")}
            className="min-w-[100px]"
          >
            Featured
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}