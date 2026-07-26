import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy text-cream flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-navy via-navy-light to-navy-lighter opacity-50"></div>
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Link href="/uz" className="flex items-center no-underline group">
              <div className="relative h-[64px] w-[129px] md:h-[92px] md:w-[185px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo/logo-fergana.png"
                  alt="Fergana Hotel Logo"
                  fill
                  className="object-contain brightness-0 invert opacity-90 drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 129px, 185px"
                />
              </div>
            </Link>
          </div>
          <h1 className="font-cormorant text-[clamp(100px,20vw,200px)] font-light leading-none text-gold mb-2 tracking-widest drop-shadow-[0_0_30px_rgba(184,135,43,0.3)]">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-jost font-light text-cream mb-6 tracking-wide">
            Page Not Found
          </h2>
          <p className="text-sm md:text-base font-light text-cream/60 tracking-[1px] leading-[1.7] max-w-[500px] mx-auto mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/uz"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark transition-all duration-300 text-white border-none h-[44px] px-7 font-jost text-[10px] tracking-[3px] uppercase cursor-pointer shadow-lg shadow-gold/20 font-bold active:scale-95 no-underline"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
