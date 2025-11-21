import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "首頁", href: "#hero" },
    { label: "關於", href: "#about" },
    { label: "日記", href: "#diary" },
    { label: "作品", href: "#portfolio" },
    { label: "圖畫", href: "#gallery" },
    { label: "留言", href: "#guestbook" },
    { label: "聯繫", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-cyan-400/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('#hero')}
            className="font-orbitron font-bold text-xl text-cyan-400 hover:text-cyan-300 transition-colors"
            data-testid="link-logo"
          >
            NEON_STUDENT
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-mono text-sm text-foreground/80 hover:text-cyan-400 transition-colors relative group"
                data-testid={`link-nav-${item.label}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-cyan-400 text-cyan-400 rounded-sm hover:bg-cyan-400/10 transition-colors"
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-cyan-400/30">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="font-mono text-left text-foreground/80 hover:text-cyan-400 transition-colors py-2"
                  data-testid={`link-mobile-${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
