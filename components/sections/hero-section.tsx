"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SectionContainer } from "@/components/layout/section-container";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <SectionContainer id="home" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="block">Hi, I&apos;m</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-purple-400">
              Mahesh
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            I create elegant, high-performance applications with beautiful
            interfaces and exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          <div className="flex items-center space-x-4 mt-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Mahesh3000/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/maheshsivangi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:mahesh.sivngi@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 dark:from-blue-500/10 dark:to-purple-500/10 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="https://multi-market-hub.s3.us-east-1.amazonaws.com/MyData/Mahesh_linkedIn_profile_pic.jpeg"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 dark:from-blue-500/10 dark:to-purple-500/10 p-1"
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <Image
                src="https://maheshpersonalbucket.s3.us-east-1.amazonaws.com/IMG_3827.png"
                alt="Professional headshot"
                width={500} // Set appropriate width & height
                height={500}
                className="w-full h-full object-cover"
                priority // optional: forces preload if it's above-the-fold
              />
            </div>
            {/* <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="https://maheshpersonalbucket.s3.us-east-1.amazonaws.com/IMG_3827.png"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div> */}
          </motion.div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-8 border-dashed border-primary/20 animate-spin-slow"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ChevronDown className="h-6 w-6" />
        </Link>
      </div>
    </SectionContainer>
  );
}