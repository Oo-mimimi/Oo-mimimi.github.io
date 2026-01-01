import { useState } from "react";
import { ExternalLink, Plus, X } from "lucide-react";
import NeonCard from "./NeonCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import artwork1 from "@assets/generated_images/Digital_art_work_sample_dafc728a.png";
import artwork2 from "@assets/generated_images/Cyberpunk_avatar_portrait_0d34f970.png";
import artwork3 from "@assets/generated_images/Abstract_neon_painting_9f7c488f.png";
import artwork4 from "@assets/generated_images/Holographic_interface_art_e487b82d.png";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export default function PortfolioSection() {
  const [items, setItems] = useState<PortfolioItem[]>([
    {
      id: "1",
      title: "數位藝術創作",
      description: "探索霓虹光與幾何圖形的結合，創造未來感的視覺體驗。",
      image: artwork1,
      tags: ["數位藝術", "設計"],
    },
    {
      id: "2",
      title: "電路板圖案",
      description: "靈感來自電路板的複雜線路，展現科技與美學的融合。",
      image: artwork2,
      tags: ["圖形設計", "科技"],
    },
    {
      id: "3",
      title: "抽象霓虹繪畫",
      description: "使用流動的霓虹色彩創作，表達情感與想像。",
      image: artwork3,
      tags: ["繪畫", "抽象"],
    },
    {
      id: "4",
      title: "全息介面設計",
      description: "未來感的UI設計概念，探索人機互動的可能性。",
      image: artwork4,
      tags: ["UI設計", "互動"],
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [formData, setFormData] = useState({ 
    title: "", 
    description: "", 
    tags: "",
    link: "" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      image: artwork1,
      tags: formData.tags.split(',').map(t => t.trim()),
      link: formData.link,
    };
    setItems([...items, newItem]);
    console.log('New portfolio item created:', newItem);
    setIsDialogOpen(false);
    setFormData({ title: "", description: "", tags: "", link: "" });
  };

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            作品分享 // WORKS
          </h2>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="border-2 border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500/10"
                onClick={() => setFormData({ title: "", description: "", tags: "", link: "" })}
                data-testid="button-add-work"
              >
                <Plus className="w-4 h-4 mr-2" />
                新增作品
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-2 border-purple-500/50 shadow-neon-purple">
              <DialogHeader>
                <DialogTitle className="font-orbitron text-purple-500">新增作品</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  填寫作品資訊以新增到作品集
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">標題</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="作品名稱..."
                    required
                    className="border-purple-500/30 focus:border-purple-500"
                    data-testid="input-work-title"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">描述</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="描述這個作品..."
                    required
                    rows={4}
                    className="border-purple-500/30 focus:border-purple-500"
                    data-testid="input-work-description"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">標籤 (用逗號分隔)</label>
                  <Input
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="設計, 藝術, 科技"
                    className="border-purple-500/30 focus:border-purple-500"
                    data-testid="input-work-tags"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">連結 (選填)</label>
                  <Input
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="https://..."
                    type="url"
                    className="border-purple-500/30 focus:border-purple-500"
                    data-testid="input-work-link"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full border-2 border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500/10"
                  data-testid="button-save-work"
                >
                  儲存
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <NeonCard 
              key={item.id} 
              glowColor={index % 2 === 0 ? "purple" : "magenta"}
              className="group cursor-pointer overflow-hidden"
              onClick={() => setSelectedItem(item)}
              data-testid={`work-card-${item.id}`}
            >
              <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
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
          ))}
        </div>

        {selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="bg-card border-2 border-purple-500/50 shadow-neon-purple max-w-3xl">
              <DialogHeader>
                <DialogTitle className="font-orbitron text-purple-500">{selectedItem.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full rounded-md"
                />
                <p className="text-foreground/80">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 border border-purple-500/50 text-purple-400 text-sm font-mono rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedItem.link && (
                  <a 
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    查看完整作品
                  </a>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
