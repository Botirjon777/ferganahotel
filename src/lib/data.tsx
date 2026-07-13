import {
  LiaBedSolid,
  LiaWineGlassSolid,
  LiaSpaSolid,
  LiaSwimmingPoolSolid,
  LiaUsersSolid,
  LiaConciergeBellSolid,
} from "react-icons/lia";

export const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Offers", href: "/offers" },
  {
    label: "Services",
    href: "/services",
    subLinks: [
      { label: "Meetings & Events", href: "/services/meetings" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contacts", href: "/contacts" },
  { label: "Reviews", href: "/reviews" },
];

export interface NewsItem {
  id: string;
  date: string;
  image: string;
  pdfUrl?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "smart-in-room-service",
    date: "2026-01-01",
    image: "/news/safir-news-3.png",
  },
  {
    id: "quality-management-cert",
    date: "2025-09-05",
    image: "/images/hotel/general/reception.jpg",
    pdfUrl: "/news/safir-news-2.pdf",
  },
  {
    id: "food-safety-cert",
    date: "2025-09-10",
    image: "/images/hotel/general/lobby.jpg",
    pdfUrl: "/news/safir-news-1.pdf",
  },
];

export const stats = [
  { num: "63", key: "rooms" },
  { num: "4", key: "dining" },
  { num: "★★★", key: "stars" },
  { num: "∞", key: "views" },
];

export const roomCategories = [
  {
    id: "standart",
    label: "Standard Single Room",
    hopenId: 5039972,
    mainImage: "/images/hotel/rooms/standart-1/1.jpg",
    images: [
      "/images/hotel/rooms/standart-1/1.jpg",
      "/images/hotel/rooms/standart-1/2.jpg",
      "/images/hotel/rooms/standart-1/3.jpg",
      "/images/hotel/rooms/standart-1/4.jpg",
      "/images/hotel/rooms/standart-1/5.jpg",
      "/images/hotel/rooms/standart-1/6.jpg",
      "/images/hotel/rooms/standart-1/7.jpg",
    ],
  },
  {
    id: "superior-twin",
    label: "Superior Twin Room",
    hopenId: 5074929,
    bestseller: true,
    mainImage: "/images/hotel/rooms/standart-2/1.jpg",
    images: [
      "/images/hotel/rooms/standart-2/1.jpg",
      "/images/hotel/rooms/standart-2/2.jpg",
      "/images/hotel/rooms/standart-2/3.jpg",
      "/images/hotel/rooms/standart-2/4.jpg",
      "/images/hotel/rooms/standart-2/5.jpg",
      "/images/hotel/rooms/standart-2/6.jpg",
      "/images/hotel/rooms/standart-2/7.jpg",
    ],
  },
  {
    id: "deluxe-twin",
    label: "Deluxe Twin Room",
    hopenId: 5036645,
    mainImage: "/images/hotel/rooms/standart-3/1.jpg",
    images: [
      "/images/hotel/rooms/standart-3/1.jpg",
      "/images/hotel/rooms/standart-3/2.jpg",
      "/images/hotel/rooms/standart-3/3.jpg",
      "/images/hotel/rooms/standart-3/4.jpg",
      "/images/hotel/rooms/standart-3/5.jpg",
      "/images/hotel/rooms/standart-3/6.jpg",
      "/images/hotel/rooms/standart-3/7.jpg",
    ],
  },
  {
    id: "superior-king",
    label: "Superior King Room",
    hopenId: 5036647,
    mainImage: "/images/hotel/rooms/lux/1.jpg",
    images: [
      "/images/hotel/rooms/lux/1.jpg",
      "/images/hotel/rooms/lux/2.jpg",
      "/images/hotel/rooms/lux/3.jpg",
      "/images/hotel/rooms/lux/4.jpg",
      "/images/hotel/rooms/lux/5.jpg",
      "/images/hotel/rooms/lux/6.jpg",
      "/images/hotel/rooms/lux/7.jpg",
      "/images/hotel/rooms/lux/8.jpg",
    ],
  },
  {
    id: "deluxe-king",
    label: "Deluxe King Room",
    hopenId: 5036646,
    mainImage: "/images/hotel/rooms/lux-2/1.jpg",
    images: [
      "/images/hotel/rooms/lux-2/1.jpg",
      "/images/hotel/rooms/lux-2/2.jpg",
      "/images/hotel/rooms/lux-2/3.jpg",
      "/images/hotel/rooms/lux-2/4.jpg",
      "/images/hotel/rooms/lux-2/5.jpg",
    ],
  },
  {
    id: "apartment",
    label: "Apartment",
    hopenId: 5036649,
    mainImage: "/images/hotel/rooms/apartament/1.jpg",
    images: [
      "/images/hotel/rooms/apartament/1.jpg",
      "/images/hotel/rooms/apartament/2.jpg",
      "/images/hotel/rooms/apartament/3.jpg",
      "/images/hotel/rooms/apartament/4.jpg",
    ],
  },
  {
    id: "conference",
    label: "Conference Hall",
    mainImage: "/images/hotel/conference-rooms/32-person/1.webp",
    images: [
      "/images/hotel/conference-rooms/32-person/1.webp",
      "/images/hotel/conference-rooms/22-person/1.webp",
      "/images/hotel/conference-rooms/52-person/1.webp",
    ],
  },
];

export const generalGallery = [
  "/images/hotel/general/hotel-exterior.jpg",
  "/images/hotel/general/hotel-night.jpg",
  "/images/hotel/general/reception.jpg",
  "/images/hotel/general/lobby.jpg",
  "/images/hotel/general/outdoor-terrace.jpg",
  "/images/hotel/general/garden.jpg",
  "/images/hotel/general/billiard.jpg",
  "/images/hotel/general/hammam.jpg",
  "/images/hotel/general/conference-hall.jpg",
  "/images/hotel/general/conference-small.jpg",
];

export const servicesItems = [
  {
    icon: <LiaUsersSolid />,
    key: "meetings",
    href: "/services/meetings",
  },
  {
    icon: <LiaBedSolid />,
    key: "amenities",
    href: "/services",
  },
  {
    icon: <LiaConciergeBellSolid />,
    key: "guest_services",
    href: "/services",
  },
  {
    icon: <LiaSwimmingPoolSolid />,
    key: "pool",
    href: "/services/spa",
  },
];
