import { Link } from "wouter";
import { Calendar } from "lucide-react";
import NeonCard from "./NeonCard";
import { diaries } from "@/data/content";

export default function DiarySection() {
  return (
    <section id="diary" className="py-24 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            日記 // DIARY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {diaries.map((entry) => (
            <Link key={entry.id} href={`/diaries/${entry.slug}`}>
              <NeonCard glowColor="cyan" className="cursor-pointer" data-testid={`diary-entry-${entry.id}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm">{entry.date}</span>
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground" data-testid={`text-title-${entry.id}`}>
                  {entry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3" data-testid={`text-content-${entry.id}`}>
                  {entry.content.split('\n')[0]}
                </p>
              </NeonCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
