export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          關於我 // ABOUT
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-full border-4 border-cyan-400 p-1 shadow-neon-cyan">
              <img 
                src="/attached_assets/generated_images/Cyberpunk_avatar_portrait_0d34f970.png" 
                alt="Avatar" 
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20" />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="font-orbitron font-bold text-2xl text-cyan-400 mb-2">NEON_STUDENT</h3>
              <p className="text-muted-foreground font-mono">學生 | 創作者 | 技術愛好者</p>
            </div>

            <div className="space-y-3 text-foreground/80">
              <p>
                你好！我是一名熱愛科技與藝術的學生。這個空間是我記錄生活、分享創作、
                探索數位世界的個人領地。
              </p>
              <p>
                在這裡，你可以看到我的日常思考、藝術作品、技術筆記，以及各種奇思妙想。
                歡迎來到我的賽博空間！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 border border-cyan-400/50 text-cyan-400 text-xs font-mono rounded-sm">
                設計
              </span>
              <span className="px-3 py-1 border border-pink-500/50 text-pink-500 text-xs font-mono rounded-sm">
                編程
              </span>
              <span className="px-3 py-1 border border-purple-500/50 text-purple-500 text-xs font-mono rounded-sm">
                藝術
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
