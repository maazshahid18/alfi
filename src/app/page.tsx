import BrandLogo from "@/components/BrandLogo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroCta from "@/components/HeroCta";
import Services from "@/components/Services";
import WhyAlfi from "@/components/WhyAlfi";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Animations from "@/components/Animations";
import LayoutFix from "@/components/LayoutFix";

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <BrandLogo />
      <Header />
      <main>
        <Hero />
        <HeroCta />
        <Services />
        <WhyAlfi />
        <Contact />
      </main>
      <Footer />
      <LayoutFix />
      <SmoothScroll />
      <Animations />
    </>
  );
}