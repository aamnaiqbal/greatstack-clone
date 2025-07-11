import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProgramSection from "@/components/ProgramSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProgramSection />
      <About />
      <GallerySection />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
