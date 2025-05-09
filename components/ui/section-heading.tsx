import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {children}
      </h2>
      <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
    </div>
  );
}