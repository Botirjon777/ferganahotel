import ReviewsView from "@/features/reviews/ReviewsView";
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
    title: t("reviewsTitle"),
    description: t("reviewsDesc"),
    openGraph: {
      title: t("reviewsTitle"),
      description: t("reviewsDesc"),
      url: `https://ferganahotel.uz/${locale}/reviews`,
      images: [
        {
          url: "/images/hotel/general/hotel-exterior.jpg",
          width: 1200,
          height: 630,
          alt: "Fergana Hotel Guest Reviews",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("reviewsTitle"),
      description: t("reviewsDesc"),
      images: ["/images/hotel/general/hotel-exterior.jpg"],
    },
    alternates: buildAlternates("/reviews", locale),
  };
}

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Fergana Hotel",
  url: "https://ferganahotel.uz/reviews",
  image: "https://ferganahotel.uz/images/hotel/general/hotel-exterior.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
    bestRating: "5",
  },
  // Review profiles where guests can read and write reviews
  sameAs: [
    "https://g.page/r/CcZVshSCrgGAEBM/review",
    "https://yandex.uz/maps/org/151678975237/",
    "https://www.tripadvisor.com/Hotel_Review-g788138-d23266096-Fergana_Hotel-Fergana_Fergana_Province.html",
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <ReviewsView />
    </>
  );
}
