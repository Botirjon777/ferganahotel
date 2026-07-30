"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  /** "dark" uses the version drawn for dark backgrounds: white wordmark,
   *  gold monogram on a transparent badge. Filtering the default logo with
   *  brightness-0/invert turns the badge into a solid white block. */
  variant?: "default" | "dark";
}) {
  return (
    <Link href="/" className={`flex items-center no-underline group ${className}`}>
      <div className="relative h-[46px] md:h-[58px] w-[92px] md:w-[117px] transition-transform duration-300 group-hover:scale-105">
        <Image
          src={
            variant === "dark"
              ? "/images/logo/logo-fergana-dark.png"
              : "/images/logo/logo-fergana.png"
          }
          alt="Fergana Hotel Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 92px, 117px"
        />
      </div>
    </Link>
  );
}
