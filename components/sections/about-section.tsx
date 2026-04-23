"use client";

import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
              Senior React Developer with 7+ years building scalable, modern
              enterprise-grade applications across fintech and trading platforms.
            </p>

            <p className="mt-2">
              I specialize in high-performance frontend systems and modern UI architectures using{" "}
              <strong>React, TypeScript, Node.js, Angular</strong>, and{" "}
              <strong>AWS</strong>. I integrate <strong>real-time data</strong> via
              WebSockets, design scalable REST APIs, and work across{" "}
              <strong>MySQL, PostgreSQL, MongoDB, and Redis</strong>.
            </p>

            <p className="mt-2">
              Highlights include reducing UI-related bugs by <strong>30%</strong>,
              improving feature adoption by <strong>40%</strong> through interactive dashboards,
              and delivering sub-second updates with <strong>WebSockets, Redux, and RxJS</strong>
              for high-frequency trading workflows.
            </p>

            <p className="mt-2">
              I care about <strong>clean, maintainable code</strong>, secure auth{" "}
              (<strong>OAuth2, JWT</strong>), and collaborative delivery in Agile teams.
              Lately I’m strengthening <strong>frontend architecture</strong>, reusable
              component systems, and performance optimization patterns.
            </p>

            <p className="mt-2">
              On the side, I build{" "}
              <span className="italic">CryptoTrack</span> (Next.js + AWS) and{" "}
              <span className="italic">Breeze</span> (trading UI with RxJS/WebSockets).
            </p>

            <div className="pt-4">
              <a
                href="https://maheshportfoliodata.s3.us-east-2.amazonaws.com/Mahesh_FullStack_Dev_jjlResume.pdf"

                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Mahesh Sivangi Resume (PDF)"
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
                content:
                  "M.S. in Computer Science — Southern Arkansas University (AR). Focus on engineering, cloud, and scalable frontend systems.",
              },
              {
                title: "Experience",
                content:
                  "7+ years building fintech/trading frontends and systems (SwedBank, 63moons, Adons). Real-time applications at scale.",
              },
              {
                title: "Technical Skills",
                content:
                  "React, TypeScript, Next.js, Node.js, Angular, AWS (EC2, RDS, S3, Lambda, API Gateway, CloudFront), Docker, Kubernetes; Redux, RxJS; REST APIs; SQL/NoSQL; CI/CD.",
              },
              {
                title: "Achievements",
                content:
                  "30% fewer UI bugs, 40% higher feature adoption. Built Breeze and CryptoTrack. AWS Cloud Practitioner certified professional.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-8 min-h-[200px] flex flex-col justify-start border border-gray-200 dark:border-gray-700 transition-colors duration-500"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{card.title}</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {card.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
