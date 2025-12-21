import { lazy, Suspense } from "react";
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";

const SocialProofSection = lazy(() => import("@/components/social-proof-section"));
const ProjectsCarousel = lazy(() => import("@/components/projects-carousel"));
const ServicesSection = lazy(() => import("@/components/services-section"));
const AboutSection = lazy(() => import("@/components/about-section"));
const EquipmentSection = lazy(() => import("@/components/equipment-section"));
const BlogSection = lazy(() => import("@/components/blog-section"));
const FAQSection = lazy(() => import("@/components/faq-section"));
const ContactSection = lazy(() => import("@/components/contact-section"));
const Footer = lazy(() => import("@/components/footer"));

function BelowFoldLoader() {
  return <div className="min-h-[200px]" aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <StatisticsSection />
        <Suspense fallback={<BelowFoldLoader />}>
          <SocialProofSection />
          <ProjectsCarousel />
          <ServicesSection />
          <AboutSection />
          <EquipmentSection />
          <BlogSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<BelowFoldLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
