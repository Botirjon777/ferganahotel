"use client";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { useTranslations } from "next-intl";
import { FiArrowRight } from "react-icons/fi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRouter } from "next/navigation";

export function SpecialOffers() {
  const t = useTranslations("SpecialOffers");
  const router = useRouter();

  const handleBook = (offerId: string) => {
    router.push(`/booking?special-offer=${offerId}`);
  };

  const offers = [
    {
      id: "earlyBooking",
      title: t("earlyBooking"),
      desc: t("earlyBookingDesc"),
      image: "/images/hotel/general/hotel-exterior.jpg",
      offerId: "10068264",
    },
    {
      id: "longStay",
      title: t("longStay"),
      desc: t("longStayDesc"),
      image: "/images/hotel/general/outdoor-terrace.jpg",
      offerId: "10068766",
    },
  ];

  return (
    <section id="special-offers" className="py-10 md:py-16 px-5 bg-white">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="font-cormorant text-3xl md:text-5xl text-text-dark font-light">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="flex flex-col bg-cream shadow-[0_20px_40px_rgba(26,17,8,0.05)] overflow-hidden group hover:shadow-[0_30px_60px_rgba(26,17,8,0.08)] transition-all duration-700 animate-[fadeUp_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] relative overflow-hidden shrink-0">
                <ResponsiveImage
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-2000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-cormorant text-2xl md:text-3xl text-text-dark font-light group-hover:text-gold transition-colors duration-500 mb-4">
                    {offer.title}
                  </h3>
                  <p className="text-text-mid text-sm font-light leading-relaxed mb-8">
                    {offer.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/20 flex justify-end">
                  <button
                    onClick={() => handleBook(offer.offerId)}
                    className="flex items-center gap-2 group/btn text-[10px] tracking-[3px] uppercase font-bold text-text-dark hover:text-gold transition-all duration-300"
                  >
                    {t("bookNow")}
                    <FiArrowRight className="group-hover/btn:translate-x-1.5 transition-transform duration-300 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
