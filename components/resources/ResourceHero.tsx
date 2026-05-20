"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Users, Plane, ClipboardList } from "lucide-react";
import LeadDownloadModal from "./LeadDownloadModal";

export default function ResourceHero() {
  const [showModal, setShowModal] = useState(false);

  const heroResource: any = {
    id: null,
    name: "THE INTERNATIONAL OLYMPIAD",
    description: "Registration is open for standard 5-10th students across India",
    age: "V-X",
    category: "Brochure",
    thumbnailUrl: "/assets/resourcesHero1.png",
    documentUrl: "/assets/DownloadStaticFile.pdf",
    isSpotlight: false,
  };

  return (
    <section className="relative w-full overflow-hidden py-5 md:py-16">
      {/* Background Layer with subtle peach and light blue glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          {/* Left Content */}
          <div className="flex flex-col items-start w-full max-w-2xl">
            {/* Heading */}
            <h1 className="flex flex-col font-semibold tracking-tight mb-2 ">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-slate-900 font-light uppercase">
                THE INTERNATIONAL
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#ff4d67] font-bold uppercase mt-1 leading-[0.9] tracking-tighter">
                OLYMPIAD
              </span>
            </h1>

            {/* Features List */}
            <div className="flex flex-col gap-6 sm:gap-8 mb-8 md:mb-10 w-full">
              {/* Feature 1 */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex-1">
                  <p className="text-base sm:text-lg md:text-xl text-slate-800 font-light leading-snug">
                    Registration is open for{" "}
                    <span className="text-[#ff4d67] font-bold">standard 5–10th students</span>{" "}
                    across India.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex-1">
                  <p className="text-base sm:text-lg md:text-xl text-slate-800 font-light leading-snug">
                    Your child can now get a{" "}
                    <span className="text-[#ff4d67] font-bold">chance to experience</span>{" "}
                    an educational trip to London.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center rounded-2xl bg-[#ff4d67] px-6 py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-pink-500/20 gap-3 hover:bg-[#e63d57] transition-all hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
            >
              <ClipboardList className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>Register Here</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full max-w-[450px] h-[450px] mx-auto md:ml-auto rounded-[50px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-slate-200">
              <Image
                src="/assets/resourcesHero1.png"
                alt="The International Olympiad Registration"
                className="w-full h-full object-cover"
                width={1200}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <LeadDownloadModal
          resource={heroResource}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}

