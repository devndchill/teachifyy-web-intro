import React from "react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="w-full bg-[#2C5481] py-24 px-6 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#DDE6F2] text-[#000000] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-8">
          TAKE THE FIRST STEP
        </div>

        {/* Heading */}
        <h2 className="text-white text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-tight mb-6 font-sans tracking-tight">
          Ready to Become the Teacher <br className="hidden md:block" />
          <span className="text-[#FF4D67]">You Were Meant to Be?</span>
        </h2>

        {/* Subheading */}
        <p className="text-white/90 text-[15px] md:text-[16px] max-w-[600px] leading-relaxed mb-12 font-[300] tracking-wide">
          Join thousands of educators who've turned their teaching potential
          into real-world impact. Let's build your capability together.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <button className="bg-white text-[#0F172A] font-[400] text-[16px] px-[60px] py-[10px] rounded-full hover:bg-slate-100 transition-colors shadow-sm">
            Talk to a Counsellor
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
