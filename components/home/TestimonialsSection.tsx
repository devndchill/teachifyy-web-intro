import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// Updated the array with the new testimonials including 'Before', 'After' and 'Earning'
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "English Teacher, Pune",
    earning: "Now earning ₹42K/month",
    content: (
      <>
        <span className="font-bold not-italic block mb-0.5">Before:</span>
        <span className="block mb-2">"I had been teaching English for 6 years but never had a certificate to show for it. Every international school I applied to asked for a TEFL and I had nothing. I kept losing opportunities to younger teachers with less experience but more credentials."</span>
        <span className="font-bold not-italic block mb-0.5">After:</span>
        <span className="block">"Three months after completing Teachify's TEFL/TESOL programme, I got shortlisted at two international curriculum schools. I now teach Cambridge English at a school in Noida — at a salary I couldn't have asked for before."</span>
      </>
    ),
    initials: "PS",
  },
  {
    id: 2,
    name: "Meenakshi Rawat",
    role: "Preschool Teacher, Delhi",
    earning: "Now earning ₹74K/month",
    content: (
      <>
        <span className="font-bold not-italic block mb-0.5">Before:</span>
        <span className="block mb-2">"My spoken English was fine but I had no structure to how I taught it. Parents would ask me about my qualifications and I would go quiet. I felt like a fraud even though I genuinely loved teaching."</span>
        <span className="font-bold not-italic block mb-0.5">After:</span>
        <span className="block">"Now I have a certified methodology behind everything I do in class. Parents see the certificate and ask fewer questions — but more importantly, I finally feel like I deserve to be in the room."</span>
      </>
    ),
    initials: "MR",
  },
  {
    id: 3,
    name: "Ankita Verma",
    role: "Senior Teacher & Department Coordinator, Kolkata",
    earning: "Now earning ₹50K/month",
    content: (
      <>
        <span className="font-bold not-italic block mb-0.5">Before:</span>
        <span className="block mb-2">"I was being considered for a coordinator role but kept getting passed over. My principal told me I needed to 'present myself better.' I didn't fully understand what that meant — I thought I was communicating fine."</span>
        <span className="font-bold not-italic block mb-0.5">After:</span>
        <span className="block">"After Teachify's Professional Communication course, I led my first parent-teacher townhall without notes and received written appreciation from the school director. I got the coordinator title two months later."</span>
      </>
    ),
    initials: "AV",
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
                <div className="text-[#334155] text-[11px] leading-[1.6] italic font-medium tracking-tight pr-2">
                  {test.content}
                </div>

                <div className="mt-[20px] w-full flex items-center justify-between">
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
                      <p className="text-[#10B981] text-[10px] font-bold leading-tight mt-[2px]">
                        {test.earning}
                      </p>
                    </div>
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
