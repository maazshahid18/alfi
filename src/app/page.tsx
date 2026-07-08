import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Capacity from "@/components/Capacity";
import Gallery from "@/components/Gallery";
import BageechaBanner from "@/components/BageechaBanner";

import Categories from "@/components/Categories";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Animations from "@/components/Animations";
import LayoutFix from "@/components/LayoutFix";

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Capacity />
        <Gallery />
        <BageechaBanner />
        <Categories />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <LayoutFix />
      <SmoothScroll />
      <Animations />
    </>
  );
}