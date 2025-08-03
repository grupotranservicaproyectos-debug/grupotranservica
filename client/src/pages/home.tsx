// import Navigation from "@/components/navigation"; // Netflix style navigation now in hero
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";
import ServicesSection from "@/components/services-section";
import ProjectsCarousel from "@/components/projects-carousel";
import AboutSection from "@/components/about-section";
import EquipmentSection from "@/components/equipment-section";

import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> Netflix style navigation now integrated in hero */}
      <main>
        <HeroSection />
        <StatisticsSection />
        <ProjectsCarousel />
        <ServicesSection />
        <AboutSection />
        <EquipmentSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
