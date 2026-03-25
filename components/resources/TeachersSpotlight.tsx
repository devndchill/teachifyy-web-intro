"use client";

import Image from "next/image";

export default function TeachersSpotlight() {
  return (
    <section className="py-8 max-w-[1248px] mx-auto">
      <div className="bg-[#0B1225] rounded-[40px] md:rounded-[60px] p-8 md:p-12 lg:p-16 overflow-hidden relative group shadow-xl">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 relative z-10">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <div className="inline-block bg-[#DDE6F2] text-[#2E5478] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider mb-6 shadow-sm uppercase">
              TEACHERS SPOTLIGHT
            </div>

            <h2 className="text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Story Stones <br /> Retelling
            </h2>

            <div className="space-y-4 text-gray-300 text-[15px] md:text-[16px] leading-relaxed max-w-[480px] font-light">
              <p>
                Paint simple images onto smooth river stones or flat pebbles: a
                sun, a tree, a child, a home, a bird, a river.
              </p>
              <p>
                Place 5–6 stones in a pouch. Child pulls out stones one by one
                and creates or retells a story using each stone as a prompt.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-[400px] lg:max-w-none">
            <div className="relative aspect-[4/3] w-full rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-500">
              <Image
                src="/assets/teachersSpotlight.png"
                alt="Story Stones Retelling"
                fill
                className="object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
