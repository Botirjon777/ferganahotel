"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "@/i18n/navigation";

const SECTION_IDS = [
  "privacy-policy",
  "personal-data-consent",
  "newsletter-consent",
  "user-agreement",
] as const;

const SECTION_KEYS = {
  "privacy-policy": "privacyPolicy",
  "personal-data-consent": "personalDataConsent",
  "newsletter-consent": "newsletterConsent",
  "user-agreement": "userAgreement",
} as const;

const COMPANY_DETAIL_ROWS = [
  "nameLabel",
  "addressLabel",
  "innLabel",
  "vatLabel",
  "accountLabel",
  "bankLabel",
  "mfoLabel",
  "okedLabel",
  "directorLabel",
] as const;

const COMPANY_DETAIL_VALUE_KEYS: Record<(typeof COMPANY_DETAIL_ROWS)[number], string> = {
  nameLabel: "name",
  addressLabel: "address",
  innLabel: "inn",
  vatLabel: "vat",
  accountLabel: "account",
  bankLabel: "bank",
  mfoLabel: "mfo",
  okedLabel: "oked",
  directorLabel: "director",
};

export default function LegalView() {
  const t = useTranslations("LegalPage");
  const tc = useTranslations("Common");

  return (
    <main className="min-h-screen bg-cream text-text-dark">
      <Navbar />
      <MobileSidebar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-10 px-5 bg-navy text-white relative overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-[10px] uppercase tracking-[3px] font-bold mb-8 transition-all group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{tc("backToHome")}</span>
          </Link>
          <div className="text-center">
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-gold mb-6 animate-[fadeUp_0.8s_ease-out]">
              {t("title")}
            </h1>
            <p className="font-jost text-sand/70 tracking-[2px] uppercase text-xs md:text-sm max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-5 max-w-[900px] mx-auto space-y-10">
        {/* Company Details */}
        <div className="bg-white border border-sand/20 shadow-sm p-6 md:p-8">
          <h2 className="font-cormorant text-2xl md:text-3xl text-gold font-light mb-6">
            {t("companyDetails.heading")}
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {COMPANY_DETAIL_ROWS.map((labelKey) => (
              <div key={labelKey}>
                <dt className="text-[10px] uppercase tracking-[1.5px] text-text-mid/60 font-medium mb-1">
                  {t(`companyDetails.${labelKey}`)}
                </dt>
                <dd className="font-jost text-sm text-text-dark break-words">
                  {t(`companyDetails.${COMPANY_DETAIL_VALUE_KEYS[labelKey]}`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Legal Documents */}
        {SECTION_IDS.map((id) => {
          const key = SECTION_KEYS[id];
          return (
            <div key={id} id={id} className="bg-white border border-sand/20 shadow-sm p-6 md:p-8">
              <h2 className="font-cormorant text-2xl md:text-3xl text-text-dark font-light mb-5">
                {t(`sections.${key}.title`)}
              </h2>
              <div className="prose prose-gold max-w-none">
                {t(`sections.${key}.content`)
                  .split("\n\n")
                  .map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-jost text-text-mid text-sm leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
