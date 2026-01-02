import { useRoute } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeonCard from "@/components/NeonCard";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { works } from "@/data/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function WorkDetail() {
  const [, params] = useRoute("/works/:slug");
  const work = works.find((w) => w.slug === params?.slug);

  if (!work) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">找不到作品</h2>
            <p className="text-muted-foreground">這篇作品可能不存在</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link href="/#portfolio">
            <Button variant="ghost" className="gap-2 border-2 border-purple-500/30 text-purple-500 hover:bg-purple-500/10">
              <ArrowLeft className="w-4 h-4" />
              返回作品集
            </Button>
          </Link>
        </div>

        <NeonCard glowColor="purple" className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">{work.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">{work.description}</p>
          
          {work.imageUrl && (
            <div className="aspect-video bg-accent rounded-lg overflow-hidden mb-6">
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-6">
            {work.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 border border-purple-500/50 text-purple-400 text-sm font-mono rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {work.link && work.link !== "#" && (
            <div className="mb-6">
              <a 
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                查看完整作品
              </a>
            </div>
          )}
          
          <div className="border-t border-purple-500/30 pt-6">
            <MarkdownContent content={work.content} />
          </div>
        </NeonCard>
      </div>
      <Footer />
    </div>
  );
}

