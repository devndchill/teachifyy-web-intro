import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// Updated the array to perfectly reflect the content in the user's design snapshot
const testimonials = [
  {
    id: 1,
    name: "Shivam Aggarwal",
    role: "Primary Educator, UK",
    content:
      'No other program showed me the path to go international. Teachifyy did — step by step. Never thought being a teacher in Vietnam was this easy"',
    initials: "SA",
  },
  {
    id: 2,
    name: "Shivam Aggarwal",
    role: "Primary Educator, UK",
    content:
      'No other program showed me the path to go international. Teachifyy did — step by step. Never thought being a teacher in Vietnam was this easy"',
    initials: "SA",
  },
  {
    id: 3,
    name: "Shivam Aggarwal",
    role: "Primary Educator, UK",
    content:
      'No other program showed me the path to go international. Teachifyy did — step by step. Never thought being a teacher in Vietnam was this easy"',
    initials: "SA",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#DDE6F2] text-[#000000] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-6">
          EDUCATORS STORY
        </div>

        {/* Heading */}
        <h2 className="text-[#0F172A] text-[32px] md:text-[40px] font-bold font-sans tracking-tight mb-4 text-center">
          What Our Educators Say
        </h2>

        {/* Subtext */}
        <p className="text-[#334155] text-[18px] max-w-4xl text-center mb-20 font-sans tracking-tight">
          Real stories from real educators who have transformed their teaching
          practice and careers with Teachifyy.
        </p>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16 w-full max-w-[1100px] mx-auto px-2">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="relative w-full pt-[32px] pl-[32px] min-h-[300px]"
            >
              {/* Back Shape Image */}
              <div className="absolute top-0 left-0 w-[90%] h-[75%] z-0 rounded-[26.5px] overflow-hidden">
                <Image
                  src="/assets/corner-frame.png"
                  alt="Background corner frame"
                  fill
                  className="object-contain object-left-top"
                />
              </div>

              {/* Front Content Container */}
              <div className="relative z-10 ml-[55px] mt-[55px] pr-4 lg:pr-6 flex flex-col items-start min-h-[220px]">
                {/* Text Content */}
                <p className="text-[#334155] text-[12px] leading-[1.7] italic font-medium tracking-tight pr-2">
                  {test.content}
                </p>

                {/* Profile section pinned to bottom */}
                <div className="mt-[20px] w-full flex items-center justify-between">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[28px] h-[28px] shrink-0 rounded-full bg-[#2b5886] text-white flex items-center justify-center font-bold text-[10px]">
                      {test.initials}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#0F172A] font-bold text-[12px] leading-tight mb-[2px]">
                        {test.name}
                      </p>
                      <p className="text-[#64748B] text-[9px] leading-tight font-medium">
                        {test.role}
                      </p>
                    </div>
                  </div>

                  {/* Stars Graphic */}
                  <div className="flex items-center gap-[2px] shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-[10px] h-[10px] fill-[#FACC15] text-[#FACC15]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
