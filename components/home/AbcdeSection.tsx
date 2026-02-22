import React from "react";
import Image from "next/image";

const AbcdeSection = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12 flex items-start gap-12 lg:gap-24 flex-col lg:flex-row">
        {/* Left Side (Text and Header) */}
        <div className="flex-1 lg:max-w-[380px] pt-8 lg:pt-20">
          <div className="inline-flex items-center bg-[#DDE6F2] text-[#111827] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-8">
            RETHINKING TEACHER TRAINING
          </div>
          <h2 className="text-[#111827] text-[40px] md:text-[54px] font-bold font-sans tracking-tight mb-8 leading-[1.15]">
            The{" "}
            <span className="bg-gradient-to-r from-[#FF4667] to-[#2A4C7A] text-transparent bg-clip-text">
              ABCDE's
            </span>
            <br />
            of Teacher <br />
            Development
          </h2>
          <p className="text-[#475569] text-[14px] md:text-[15px] font-sans pr-4 leading-relaxed">
            Most programs get this wrong. Here's how Teachifyy gets it right.
          </p>
        </div>

        {/* Right Side (Comparison Cards Image) */}
        <div className="flex-1 w-full flex flex-col sm:flex-row gap-6 lg:gap-0 lg:-ml-12 relative">
          <div className="w-full relative aspect-[1.15/1] max-w-[700px] mx-auto lg:ml-auto">
            <Image
              src="/assets/comparison-cards.png"
              alt="Teachifyy vs Others comparison"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbcdeSection;
