import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DiarySection from "@/components/DiarySection";
import PortfolioSection from "@/components/PortfolioSection";
import GallerySection from "@/components/GallerySection";
import GuestbookSection from "@/components/GuestbookSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <DiarySection />
        <PortfolioSection />
        <GallerySection />
        <GuestbookSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
