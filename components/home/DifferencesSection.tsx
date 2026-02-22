import React from "react";
import Image from "next/image";

const DifferencesSection = () => {
  const differences = [
    {
      icon: "/assets/diff-icon-1.png",
      text: "Built on UK Classroom Research",
      width: 128,
      height: 119,
    },
    {
      icon: "/assets/diff-icon-2.png",
      text: "Solving NEP 2020 Skilled Teacher Shortage",
      width: 117,
      height: 105,
    },
    {
      icon: "/assets/diff-icon-3.png",
      text: "Guided by Leaders of Indian Education",
      width: 72,
      height: 72,
    },
    {
      icon: "/assets/diff-icon-4.png",
      text: "Building a Teacher Network",
      width: 117,
      height: 105,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#fafcff] py-24">
      {/* Background Layer with subtle peach and light blue glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
      </div>

      <div className="max-w-[1248px] w-full mx-auto px-6 lg:px-12 flex flex-col items-start relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#DDE6F2] text-[#334155] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-6">
          WHY TEACHIFYY
        </div>

        {/* Heading */}
        <h2 className="text-[#0F172A] text-[32px] md:text-[44px] font-bold font-sans tracking-tight mb-16 text-left">
          How Teachifyy is Different?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {differences.map((diff, index) => (
            <div
              key={index}
              className="bg-[#DDE6F2] rounded-[24px] p-6 flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(31,72,98,0.08)] transition-all min-h-[190px] justify-center gap-5"
            >
              <div className="shrink-0 flex items-center justify-center">
                <Image
                  src={diff.icon}
                  alt={diff.text}
                  width={diff.width}
                  height={diff.height}
                  className="object-contain max-w-full h-auto"
                />
              </div>
              <p className="text-[#1F2937] font-medium text-[15px] leading-snug px-2">
                {diff.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferencesSection;
