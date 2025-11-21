import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NeonCardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: "cyan" | "magenta" | "purple" | "none";
  children: React.ReactNode;
}

export default function NeonCard({ 
  glowColor = "cyan", 
  className, 
  children,
  ...props 
}: NeonCardProps) {
  const glowVariants = {
    cyan: "border-cyan-400/50 hover:shadow-neon-cyan",
    magenta: "border-pink-500/50 hover:shadow-neon-magenta",
    purple: "border-purple-500/50 hover:shadow-neon-purple",
    none: "border-border",
  };

  return (
    <div
      className={cn(
        "p-6 border-2 rounded-md bg-card/50 backdrop-blur-sm transition-all duration-300 hover-elevate",
        glowVariants[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
