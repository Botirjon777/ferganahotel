import LegalView from "@/features/legal/LegalView";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t("legalTitle"),
    description: t("legalDesc"),
    openGraph: {
      title: t("legalTitle"),
      description: t("legalDesc"),
      url: `https://ferganahotel.uz/${locale}/legal`,
    },
    alternates: buildAlternates("/legal", locale),
  };
}

export default function LegalPage() {
  return <LegalView />;
}
