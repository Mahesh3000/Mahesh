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
              Senior React Developer with 7+ years of experience building scalable,
              enterprise-grade frontend applications for fintech and trading platforms.
            </p>

            <p className="mt-2">
              I specialize in high-performance UI systems, complex workflows, and
              component-driven architecture using{" "}
              <strong>React.js, TypeScript, JavaScript, Angular</strong>, and{" "}
              <strong>Node.js</strong>. I build reusable UI libraries, real-time
              dashboards, authentication flows, and data-driven interfaces for
              production applications.
            </p>

            <p className="mt-2">
              My experience includes integrating <strong>RESTful APIs</strong>,{" "}
              <strong>WebSockets</strong>, and backend services to support dynamic
              data synchronization, user-triggered actions, and real-time trading
              workflows across high-throughput systems.
            </p>

            <p className="mt-2">
              I have hands-on experience with advanced state management using{" "}
              <strong>Redux, Context API, and RxJS</strong> to manage asynchronous
              workflows, event-driven updates, and complex frontend application state.
            </p>

            <p className="mt-2">
              Highlights include reducing UI-related bugs by <strong>30%</strong>,
              increasing feature adoption by <strong>40%</strong>, reducing latency by{" "}
              <strong>50ms+</strong>, and improving response efficiency by{" "}
              <strong>30%</strong> through optimized rendering and efficient data handling.
            </p>

            <p className="mt-2">
              I also work with <strong>AWS</strong> services including EC2, RDS, S3,
              Lambda, API Gateway, CloudFront, and CodePipeline, along with{" "}
              <strong>Docker, Kubernetes, GitHub Actions, and Jenkins</strong> for
              cloud-native delivery and CI/CD workflows.
            </p>

            <p className="mt-2">
              On the side, I build projects like{" "}
              <span className="italic">Breeze</span>, a real-time trading UI using
              React, TypeScript, RxJS, and WebSockets, and{" "}
              <span className="italic">CryptoTrack</span>, a Next.js and AWS-based
              cryptocurrency tracking application.
            </p>

            <div className="pt-4">
              <a
                href="https://maheshportfoliodata.s3.us-east-2.amazonaws.com/Mahesh_Frontend_Dev_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Mahesh Sivangi Resume PDF"
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
                  "M.S. in Computer Science from Southern Arkansas University. Focused on software engineering, cloud computing, full-stack development, and scalable frontend systems.",
              },
              {
                title: "Experience",
                content:
                  "7+ years building enterprise frontend applications across fintech and trading platforms, including InfoKeys, 63moons Technologies, and Adons Softech.",
              },
              {
                title: "Technical Skills",
                content:
                  "React.js, TypeScript, JavaScript, Angular, Node.js, Redux, Context API, RxJS, REST APIs, WebSockets, AWS, Docker, Kubernetes, SQL/NoSQL, and CI/CD.",
              },
              {
                title: "Achievements",
                content:
                  "Reduced UI bugs by 30%, improved feature adoption by 40%, reduced latency by 50ms+, and improved response efficiency by 30% in production systems.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-8 min-h-[200px] flex flex-col justify-start border border-gray-200 dark:border-gray-700 transition-colors duration-500"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {card.title}
                </h3>
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