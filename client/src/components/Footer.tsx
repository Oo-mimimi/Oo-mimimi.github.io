import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-cyan-400/30 bg-card/20 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4">
          <p className="font-orbitron text-cyan-400">醉酒詩仙</p>
          <p className="text-muted-foreground font-mono text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> in the digital realm
          </p>
          <p className="text-muted-foreground font-mono text-xs">
            &copy; 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
