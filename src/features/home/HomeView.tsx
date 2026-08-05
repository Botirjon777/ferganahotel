import dynamic from "next/dynamic";
import { Hero } from "./components/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { ImageBanner } from "./components/ImageBanner";

const Recommendations = dynamic(() => import("./components/Recommendations").then(m => ({ default: m.Recommendations })));
const About = dynamic(() => import("./components/About").then(m => ({ default: m.About })));
const Gallery = dynamic(() => import("./components/Gallery").then(m => ({ default: m.Gallery })));
const Services = dynamic(() => import("./components/Services").then(m => ({ default: m.Services })));
const Location = dynamic(() => import("./components/Location").then(m => ({ default: m.Location })));
const Footer = dynamic(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })));
const FloatBookBtn = dynamic(() => import("@/components/ui/FloatBookBtn").then(m => ({ default: m.FloatBookBtn })));
const ServicePopup = dynamic(() => import("@/components/ui/ServicePopup").then(m => ({ default: m.ServicePopup })));
const WelcomePopup = dynamic(() => import("@/components/ui/WelcomePopup").then(m => ({ default: m.WelcomePopup })));
const SpecialOffers = dynamic(() => import("./components/SpecialOffers").then(m => ({ default: m.SpecialOffers })));

export default function HomeView() {
  return (
    <main>
      <Navbar />
      <MobileSidebar />

      <Hero />
      <ImageBanner />
      <SpecialOffers />
      <Recommendations />
      <About />

      <Gallery />
      <Services />
      <Location />

      <Footer />


      {/*<FloatBookBtn />*/}
      <ServicePopup />
      <WelcomePopup />
    </main>
  );
}
