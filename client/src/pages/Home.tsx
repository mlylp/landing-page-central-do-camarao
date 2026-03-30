/**
 * Home — Peixaria Central do Camarão
 * Landing page structure:
 * 1. Header (sticky)
 * 2. HeroSection (hero image + CTAs)
 * 3. LocationSection (map + hours)
 * 4. ReviewsSection (Google Maps reviews)
 * 5. ProductsSection (product cards)
 * 6. DifferentialsSection (why choose us)
 * 7. FAQSection (accordion)
 * 8. Footer
 * + WhatsAppButton (floating)
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProductsSection from "@/components/ProductsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <LocationSection />
        <ReviewsSection />
        <ProductsSection />
        <DifferentialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
