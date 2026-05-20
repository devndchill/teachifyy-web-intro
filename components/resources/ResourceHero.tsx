"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
          <div className="flex flex-col items-start max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-[#DDE6F2] px-4 py-1.5 shadow-sm mb-6">
              <span className="text-[9px] sm:text-[10px]">For IB/ISCE/CBSE Students</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-[1.1]">
              <span className="text-[#ff4d67] font-bold">THE INTERNATIONAL OLYMPIAD</span>
              <br />
              Registration is open for standard 5-10th students across India
            </h1>

            {/* Subtext */}
            <p className="text-md md:text-lg text-slate-600 mb-8 max-w-md">
              Your child can now get a chance to experience an educational trip to London
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center rounded-full bg-[#ff4d67] px-8 py-3.5 text-base font-medium text-white shadow-sm gap-2 hover:bg-[#e63d57] transition-all hover:shadow-md cursor-pointer"
            >
              Register Here
              <ArrowRight className="h-5 w-5" />
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

