import { useRoute } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeonCard from "@/components/NeonCard";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { diaries } from "@/data/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DiaryDetail() {
  const [, params] = useRoute("/diaries/:slug");
  const diary = diaries.find((d) => d.slug === params?.slug);

  if (!diary) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">找不到日記</h2>
            <p className="text-muted-foreground">這篇日記可能不存在</p>
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
          <Link href="/#diary">
            <Button variant="ghost" className="gap-2 border-2 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
              <ArrowLeft className="w-4 h-4" />
              返回日記列表
            </Button>
          </Link>
        </div>

        <NeonCard glowColor="cyan" className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-cyan-400 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="font-mono text-sm">{diary.date}</span>
          </div>
          
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">{diary.title}</h1>
          
          <div className="border-t border-cyan-400/30 pt-6">
            <MarkdownContent content={diary.content} />
          </div>
        </NeonCard>
      </div>
      <Footer />
    </div>
  );
}

