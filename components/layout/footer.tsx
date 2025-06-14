import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold tracking-tight">
              MS
            </Link>
            <p className="text-muted-foreground mt-2">
              Creating beautiful digital experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
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
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mahesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}