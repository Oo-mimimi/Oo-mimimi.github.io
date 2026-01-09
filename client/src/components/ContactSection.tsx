import { Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    { icon: Mail, label: "Email", value: "student@example.com", link: "mailto:student@example.com" },
    { icon: Github, label: "GitHub", value: "Night_Stars", link: "https://github.com" },
    { icon: Twitter, label: "Twitter", value: "Night_Stars", link: "https://twitter.com" },
    { icon: Linkedin, label: "LinkedIn", value: "Night_Stars", link: "https://linkedin.com" },
    { icon: Instagram, label: "Instagram", value: "@huxiaoruihu", link: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-card/20 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          聯繫方式 // CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border-2 border-cyan-400/30 rounded-md bg-card/50 backdrop-blur-sm hover:border-cyan-400 hover:shadow-neon-cyan transition-all duration-300 hover-elevate"
                data-testid={`link-contact-${contact.label.toLowerCase()}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">{contact.label}</p>
                    <p className="text-foreground font-medium group-hover:text-cyan-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono">
            &gt; 感謝你的到訪！歡迎隨時聯繫我。
          </p>
        </div>
      </div>
    </section>
  );
}
