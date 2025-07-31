"use client";

import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionContainer id="about">
      <div ref={ref}>
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg">
              Hello! I’m <span className="font-semibold">Mahesh Sivangi</span>, a
              Full-Stack Software Engineer with 5 years of experience building
              scalable web and enterprise applications across fintech and
              trading domains.
            </p>
            <p className="mt-2">
              I specialize in developing cloud-native microservices and
              high-performance UIs using <strong>React, TypeScript, Spring
                Boot, Node.js,</strong> and <strong>AWS</strong>. My expertise
              includes integrating <strong>real-time data streams</strong>,
              optimizing backend performance, and implementing secure
              authentication with <strong>JWT</strong>.
            </p>
            <p className="mt-2">
              Over the years, I've worked on complex fintech applications, integrating real-time data via WebSockets, implementing secure authentication flows (JWT, OTP, TOTP), and deploying full-stack applications on AWS infrastructure.
            </p>
            <p className="mt-2">
              I bring a balance of technical skill and product thinking—collaborating cross-functionally to translate business goals into elegant, user-focused solutions. Whether optimizing load times or improving code maintainability, I focus on delivering robust and thoughtful results.
            </p>
            <p className="mt-2">
              My focus is delivering <strong>clean, maintainable code</strong> in
              Agile environments, reducing downtime, and improving application
              performance. Outside of work, I explore cloud architecture, UI/UX
              patterns, and build side projects like{" "}
              <span className="italic">CryptoTrack</span> and{" "}
              <span className="italic">Breeze</span>.
            </p>


            <div className="pt-4">
              <a
                href="https://maheshpersonalbucket.s3.us-east-1.amazonaws.com/Mahesh_Software_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-9"
          >
            {[
              {
                title: "Education",
                content: "Master’s in Computer Science with a strong foundation in full-stack development, cloud computing, and UI/UX design.",
              },
              {
                title: "Experience",
                content: "5 years of experience delivering scalable applications, microservices, and real- time trading dashboards for web and enterprise platforms.",

              },

              {
                title: "Technical Skills",
                content: "React, TypeScript, Spring Boot, Node.js, AWS, Docker, CI/CD, Kafka, WebSockets, and microservices architecture.",
              },
              {
                title: "Achievements",
                content: "Built and deployed LoginKit and CryptoTrack. AWS certified, published projects, and recognized for contributions to trading platforms.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-lg 
             bg-white dark:bg-gray-900 
             p-8 min-h-[200px] 
             flex flex-col justify-start 
             border border-gray-200 dark:border-gray-700 
             transition-colors duration-500"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {card.title}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}