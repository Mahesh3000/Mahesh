import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 min-h-screen flex items-center",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}