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
              Full-Stack Software Engineer with 4+ years building scalable web and
              enterprise applications across fintech and trading.
            </p>

            <p className="mt-2">
              I specialize in cloud-native microservices and high-performance UIs using{" "}
              <strong>React, TypeScript, Spring Boot, Node.js, Go</strong>, and{" "}
              <strong>AWS</strong>. I integrate <strong>real-time data</strong> via
              WebSockets/Kafka, design robust REST APIs, and work across{" "}
              <strong>MySQL, PostgreSQL, MongoDB, and Redis</strong>.
            </p>

            <p className="mt-2">
              Highlights include reducing request latency by <strong>50ms+</strong>,
              cutting deployment time by <strong>70%</strong> with CI/CD{" "}
              (Jenkins, GitHub Actions, CodePipeline), and increasing feature adoption by{" "}
              <strong>30–40%</strong> through interactive, data-rich dashboards.
            </p>

            <p className="mt-2">
              I care about <strong>clean, maintainable code</strong>, secure auth{" "}
              (<strong>OAuth2, JWT</strong>), and collaborative delivery in Agile teams.
              Lately I’m deepening <strong>Go</strong> and <strong>Spring Boot</strong>{" "}
              microservices and data engineering patterns.
            </p>

            <p className="mt-2">
              On the side, I build{" "}
              <span className="italic">CryptoTrack</span> (Next.js + AWS) and{" "}
              <span className="italic">Breeze</span> (trading UI with RxJS/WebSockets).
            </p>

            <div className="pt-4">
              <a
                href="https://maheshpersonalbucket.s3.us-east-1.amazonaws.com/Mahesh_Dev_Resume.pdf"

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
                  "M.S. in Computer Science — Southern Arkansas University (AR). Focus on full-stack engineering, cloud, and data-intensive systems.",
              },
              {
                title: "Experience",
                content:
                  "4+ years shipping fintech/trading dashboards and microservices (Citigroup, 63moons, Adons). Real-time systems at scale.",
              },
              {
                title: "Technical Skills",
                content:
                  "React, TypeScript, Next.js, Node.js, Java/Spring Boot, Go; AWS (EC2, RDS, S3, Lambda, API Gateway, CloudFront), Docker, Kubernetes; Kafka, ELK; SQL/NoSQL; CI/CD.",
              },
              {
                title: "Achievements",
                content:
                  "−50ms+ latency, −70% deploy time, +30–40% feature adoption. Built & deployed Breeze and CryptoTrack. AWS Cloud Practitioner certified.",
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
