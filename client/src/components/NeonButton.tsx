import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "magenta" | "purple" | "outline";
  children: React.ReactNode;
}

export default function NeonButton({ 
  variant = "cyan", 
  className, 
  children, 
  ...props 
}: NeonButtonProps) {
  const variants = {
    cyan: "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-neon-cyan",
    magenta: "border-pink-500 text-pink-500 hover:bg-pink-500/10 hover:shadow-neon-magenta",
    purple: "border-purple-500 text-purple-500 hover:bg-purple-500/10 hover:shadow-neon-purple",
    outline: "border-foreground/30 text-foreground hover:bg-foreground/5",
  };

  return (
    <button
      className={cn(
        "px-6 py-3 border-2 rounded-sm font-mono uppercase tracking-wider text-sm transition-all duration-300 hover-elevate active-elevate-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
