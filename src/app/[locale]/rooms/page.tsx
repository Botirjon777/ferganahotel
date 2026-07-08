import RoomsView from "@/features/rooms/RoomsView";
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
    title: t("roomsTitle"),
    description: t("roomsDesc"),
    openGraph: {
      title: t("roomsTitle"),
      description: t("roomsDesc"),
      url: `https://safirhotel.uz/${locale}/rooms`,
      images: [
        {
          url: "/images/hotel/rooms/lux/1.jpg",
          width: 1200,
          height: 630,
          alt: t("metaTitle"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: ["/images/hotel/rooms/lux/1.jpg"],
    },
    alternates: buildAlternates("/rooms", locale),
  };
}

export default function RoomsPage() {
  return <RoomsView />;
}
