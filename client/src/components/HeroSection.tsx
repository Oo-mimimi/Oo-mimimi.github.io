import { useState } from "react";

export default function HeroSection() {
  const [screenName] = useState("醉酒詩仙");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/attached_assets/generated_images/Cyberpunk_hero_background_66e69e1f.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-cyan-400 animate-neon-pulse">
          {screenName}
        </h1>
        <p className="font-mono text-lg md:text-xl text-foreground/80 mb-8 tracking-wide">
          &gt; 學生 / 創作者 / 數位記錄者
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-sm font-mono uppercase tracking-wider hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-neon-cyan"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-explore"
          >
            探索更多
          </button>
          <button 
            className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-sm font-mono uppercase tracking-wider hover:bg-pink-500/10 transition-all duration-300 hover:shadow-neon-magenta"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-contact"
          >
            聯繫我
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
