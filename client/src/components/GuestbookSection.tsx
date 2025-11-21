import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import NeonCard from "./NeonCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

export default function GuestbookSection() {
  const [messages, setMessages] = useState<GuestbookMessage[]>([
    {
      id: "1",
      name: "訪客A",
      message: "很酷的網站！霓虹光效果做得很棒。",
      timestamp: "2024-11-07 14:30",
    },
    {
      id: "2",
      name: "設計師B",
      message: "賽博朋克風格超讚，繼續加油！",
      timestamp: "2024-11-06 20:15",
    },
  ]);

  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage: GuestbookMessage = {
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toLocaleString('zh-TW', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
    };
    setMessages([newMessage, ...messages]);
    console.log('New guestbook message:', newMessage);
    setFormData({ name: "", message: "" });
  };

  return (
    <section id="guestbook" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          留言板 // GUESTBOOK
        </h2>

        <NeonCard glowColor="magenta" className="mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">暱稱</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="你的名字..."
                required
                className="border-pink-500/30 focus:border-pink-500"
                data-testid="input-guestbook-name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">留言</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="寫下你的留言..."
                required
                rows={4}
                className="border-pink-500/30 focus:border-pink-500"
                data-testid="input-guestbook-message"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full border-2 border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500/10"
              data-testid="button-submit-guestbook"
            >
              <Send className="w-4 h-4 mr-2" />
              送出留言
            </Button>
          </form>
        </NeonCard>

        <div className="space-y-4">
          {messages.map((msg) => (
            <NeonCard key={msg.id} glowColor="cyan" data-testid={`guestbook-message-${msg.id}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-orbitron font-bold text-cyan-400" data-testid={`text-name-${msg.id}`}>
                      {msg.name}
                    </h4>
                    <span className="text-xs text-muted-foreground font-mono" data-testid={`text-time-${msg.id}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="text-foreground/80 break-words" data-testid={`text-message-${msg.id}`}>
                    {msg.message}
                  </p>
                </div>
              </div>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
}
