import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { drawings } from "@/data/content";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof drawings[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          圖畫展示 // GALLERY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {drawings.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-md border-2 border-transparent hover:border-cyan-400 transition-all duration-300 cursor-pointer hover:shadow-neon-cyan"
              onClick={() => setSelectedImage(image)}
              data-testid={`gallery-image-${image.id}`}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-mono text-cyan-400">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="bg-black/95 border-2 border-cyan-400/50 shadow-neon-cyan max-w-4xl p-0">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-colors"
                data-testid="button-close-gallery"
              >
                <X className="w-5 h-5" />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6 border-t border-cyan-400/30">
                <DialogHeader>
                  <DialogTitle className="font-orbitron text-xl text-cyan-400">{selectedImage.title}</DialogTitle>
                  <DialogDescription className="text-cyan-400/70">
                    圖畫展示
                  </DialogDescription>
                </DialogHeader>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
