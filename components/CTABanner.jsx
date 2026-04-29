import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function CTABanner({ title, description, description2, buttonText, bgImage }) {
  const style = bgImage
    ? {
        background: `linear-gradient(135deg, rgba(11,45,78,0.92) 0%, rgba(17,55,95,0.92) 40%, rgba(22,63,107,0.92) 70%, rgba(26,74,122,0.92) 100%), url('${bgImage}') center/cover no-repeat`,
      }
    : {
        background: "linear-gradient(135deg, #0b2d4e 0%, #11375F 40%, #163f6b 70%, #1a4a7a 100%)",
      };

  return (
    <section
      className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 overflow-hidden"
      style={style}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <FadeUp className="relative z-10 mx-auto max-w-2xl text-center flex flex-col items-center gap-3">
        <h2 className="text-white 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-white/65 md:text-base text-sm leading-relaxed">{description}</p>
        )}
        {description2 && (
          <p className="text-white/65 md:text-base text-sm leading-relaxed">{description2}</p>
        )}
        <Link
          href="/contact"
          className="mt-3 rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
        >
          {buttonText}
        </Link>
      </FadeUp>
    </section>
  );
}
