import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import NeonCard from "./NeonCard";
import { works } from "@/data/content";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            作品分享 // WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((item, index) => (
            <Link key={item.id} href={`/works/${item.slug}`}>
              <NeonCard 
                glowColor={index % 2 === 0 ? "purple" : "magenta"}
                className="group cursor-pointer overflow-hidden"
                data-testid={`work-card-${item.id}`}
              >
                {item.imageUrl && (
                  <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                <h3 className="font-orbitron font-bold text-xl mb-2 text-foreground" data-testid={`text-work-title-${item.id}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-work-description-${item.id}`}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 border border-purple-500/50 text-purple-400 text-xs font-mono rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </NeonCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
