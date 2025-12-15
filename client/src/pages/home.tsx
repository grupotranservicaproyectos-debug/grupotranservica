import { lazy, Suspense } from "react";
import HeroSection from "@/components/hero-section";

const StatisticsSection = lazy(() => import("@/components/statistics-section"));
const ServicesSection = lazy(() => import("@/components/services-section"));
const ProjectsCarousel = lazy(() => import("@/components/projects-carousel"));
const AboutSection = lazy(() => import("@/components/about-section"));
const EquipmentSection = lazy(() => import("@/components/equipment-section"));
const BlogSection = lazy(() => import("@/components/blog-section"));
const FAQSection = lazy(() => import("@/components/faq-section"));
const ContactSection = lazy(() => import("@/components/contact-section"));
const Footer = lazy(() => import("@/components/footer"));

function SectionLoader() {
  return <div className="h-32 flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#155d29] border-t-transparent rounded-full animate-spin"></div></div>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <StatisticsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProjectsCarousel />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EquipmentSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
