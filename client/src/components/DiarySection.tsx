import { useState } from "react";
import { Calendar, Plus, Edit2, Trash2 } from "lucide-react";
import NeonCard from "./NeonCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  content: string;
}

export default function DiarySection() {
  const [entries, setEntries] = useState<DiaryEntry[]>([
    {
      id: "1",
      date: "2024-11-07",
      title: "第一天的開始",
      content: "今天開始建立我的個人網站，感覺很興奮！這將是記錄我生活和想法的地方。",
    },
    {
      id: "2",
      date: "2024-11-06",
      title: "學習新技術",
      content: "深入研究了賽博朋克風格的設計，霓虹光效果真的很酷！",
    },
  ]);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<DiaryEntry | null>(null);
  const [formData, setFormData] = useState({ title: "", content: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEntry) {
      setEntries(entries.map(entry => 
        entry.id === editingEntry.id 
          ? { ...entry, ...formData }
          : entry
      ));
      console.log('Diary entry updated:', formData);
    } else {
      const newEntry: DiaryEntry = {
        id: Date.now().toString(),
        ...formData,
        date: formData.date || new Date().toISOString().split('T')[0],
      };
      setEntries([newEntry, ...entries]);
      console.log('New diary entry created:', newEntry);
    }
    setIsDialogOpen(false);
    setFormData({ title: "", content: "", date: "" });
    setEditingEntry(null);
  };

  const handleEdit = (entry: DiaryEntry) => {
    setEditingEntry(entry);
    setFormData({ title: entry.title, content: entry.content, date: entry.date });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
    console.log('Diary entry deleted:', id);
  };

  return (
    <section id="diary" className="py-24 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            日記 // DIARY
          </h2>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10"
                onClick={() => {
                  setEditingEntry(null);
                  setFormData({ title: "", content: "", date: new Date().toISOString().split('T')[0] });
                }}
                data-testid="button-add-diary"
              >
                <Plus className="w-4 h-4 mr-2" />
                新增日記
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-2 border-cyan-400/50 shadow-neon-cyan">
              <DialogHeader>
                <DialogTitle className="font-orbitron text-cyan-400">
                  {editingEntry ? "編輯日記" : "新增日記"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">日期</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="border-cyan-400/30 focus:border-cyan-400"
                    data-testid="input-diary-date"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">標題</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="輸入標題..."
                    required
                    className="border-cyan-400/30 focus:border-cyan-400"
                    data-testid="input-diary-title"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">內容</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="寫下你的想法..."
                    required
                    rows={6}
                    className="border-cyan-400/30 focus:border-cyan-400"
                    data-testid="input-diary-content"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10"
                  data-testid="button-save-diary"
                >
                  儲存
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {entries.map((entry) => (
            <NeonCard key={entry.id} glowColor="cyan" data-testid={`diary-entry-${entry.id}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">{entry.date}</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(entry)}
                    className="text-purple-500 hover:text-purple-400 transition-colors"
                    data-testid={`button-edit-${entry.id}`}
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(entry.id)}
                    className="text-pink-500 hover:text-pink-400 transition-colors"
                    data-testid={`button-delete-${entry.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground" data-testid={`text-title-${entry.id}`}>
                {entry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-content-${entry.id}`}>
                {entry.content}
              </p>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
}
