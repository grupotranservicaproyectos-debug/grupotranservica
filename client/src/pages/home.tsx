import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";
import ServicesSection from "@/components/services-section";
import ProjectsGallery from "@/components/projects-gallery";
import AboutSection from "@/components/about-section";
import EquipmentSection from "@/components/equipment-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <StatisticsSection />
        <ServicesSection />
        <ProjectsGallery />
        <AboutSection />
        <EquipmentSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
