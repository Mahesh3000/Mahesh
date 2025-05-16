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
              Hello! I'm <span className="font-semibold">Mahesh Sivangi</span>, a Frontend Developer with nearly 5 years of experience building dynamic, high-performance web applications and trading platforms.
            </p>
            <p className="mt-2">
              I specialize in developing responsive, accessible, and scalable user interfaces using modern technologies like React, TypeScript, Redux, and Tailwind CSS. My work is driven by clean architecture, reusable components, and a deep understanding of frontend performance.
            </p>
            <p className="mt-2">
              Over the years, I've worked on complex fintech applications, integrating real-time data via WebSockets, implementing secure authentication flows (JWT, OTP, TOTP), and deploying full-stack applications on AWS infrastructure.
            </p>
            <p className="mt-2">
              I bring a balance of technical skill and product thinking—collaborating cross-functionally to translate business goals into elegant, user-focused solutions. Whether optimizing load times or improving code maintainability, I focus on delivering robust and thoughtful results.
            </p>
            <p className="mt-2">
              Outside of work, I actively build personal projects like <span className="italic">LoginKit</span> and <span className="italic">CryptoTrack</span>, explore evolving UI/UX patterns, and stay updated on the latest in web technologies and financial systems.
            </p>

            <div className="pt-4">
              <a
                href="https://maheshpersonalbucket.s3.us-east-1.amazonaws.com/Mahesh_Front_End_Web_Developer.pdf"
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

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Working on laptop"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-lg"></div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-9"
          >
            {[
              {
                title: "Education",
                content: "MS in Computer Science from Southern Arkansas University, with a strong foundation in UI/UX and software development.",
              },
              {
                title: "Experience",
                content: "Nearly 5 years as a Frontend Developer building trading dashboards, real-time data applications, and scalable user interfaces using React, TypeScript, and modern web technologies.",
              },

              {
                title: "Technical Skills",
                content: "React, Redux, TypeScript, Tailwind CSS, Node.js, PostgreSQL, AWS, Git, Authentication flows, and real-time data handling.",
              },
              {
                title: "Achievements",
                content: "Built and deployed LoginKit and CryptoTrack. AWS certified, published projects, and recognized for contributions to trading platforms.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-lg bg-white p-8 min-h-[200px] flex flex-col justify-start border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {card.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}