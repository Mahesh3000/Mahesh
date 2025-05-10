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
              Hello! I'm <span className="font-semibold">Mahesh Sivangi</span>, a dedicated Frontend Developer with 2.5+ years of experience building high-performance trading dashboards and scalable web applications.
            </p>
            <p className="mt-2">
              I specialize in crafting responsive, accessible, and intuitive user interfaces using modern technologies like React, Redux, TypeScript, and Tailwind CSS. I have hands-on experience working with real-time data, authentication systems, and cloud deployments on AWS.
            </p>
            <p className="mt-2">
              I'm passionate about translating complex ideas into clean, efficient code and delightful user experiences. Whether it’s collaborating with teams or optimizing frontend performance, I strive to bring both creativity and precision to every project.
            </p>
            <p className="mt-2">
              Outside of coding, you’ll find me exploring UI/UX trends, refining personal projects like <span className="italic">LoginKit</span> and <span className="italic">CryptoTrack</span>, or catching up on the latest in tech and finance.
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

          <motion.div
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
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}