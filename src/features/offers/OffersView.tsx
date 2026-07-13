"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "@/i18n/navigation";
import { SpecialOffers } from "@/features/home/components/SpecialOffers";

export default function OffersView() {
  const tc = useTranslations("Common");

  return (
    <main className="min-h-screen bg-cream text-text-dark">
      <Navbar />
      <MobileSidebar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-25 pb-10 px-5 bg-[#1a1108] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-br from-[#1a1108] via-[#2d1f0a] to-[#3d2c12] opacity-50"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-[10px] uppercase tracking-[3px] font-bold mb-10 transition-all group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{tc("backToHome")}</span>
          </Link>
        </div>
      </section>

      {/* Special Offers Section */}
      <div className="-mt-16 relative z-20">
        <SpecialOffers />
      </div>

      <Footer />
    </main>
  );
}
